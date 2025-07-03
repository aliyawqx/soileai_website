import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text?.trim()) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    /* -------------------------------------------------
     * 1.   Получаем API-ключ
     * ------------------------------------------------- */
    const apiKey =
      process.env.ELEVENLABS_API_KEY || // <— сервер (deploy / dashboard)
      process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || // <— preview-runtime (Next.js)
      ""

    if (!apiKey) {
      // Чёткое сообщение, чтобы было понятно, что нужно сделать
      return NextResponse.json(
        {
          error:
            "ELEVENLABS_API_KEY is missing. " +
            "Задайте переменную окружения ELEVENLABS_API_KEY (или NEXT_PUBLIC_ELEVENLABS_API_KEY) " +
            "в настройках проекта и перезапустите превью.",
        },
        { status: 500 },
      )
    }

    /* -------------------------------------------------
     * 2.   Короткий текст (лимит ElevenLabs — 250 симв.)
     * ------------------------------------------------- */
    const safeText = text.length > 250 ? text.slice(0, 247) + "…" : text

    /* -------------------------------------------------
     * 3.   Формируем запрос к ElevenLabs
     * ------------------------------------------------- */
    const response = await fetch(
      "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream", // endpoint /stream даёт mp3 сразу
      {
        method: "POST",
        headers: {
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: safeText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.6,
            similarity_boost: 0.8,
            style: 0.3,
            use_speaker_boost: true,
          },
        }),
      },
    )

    /* -------------------------------------------------
     * 4.   Обрабатываем статусы
     * ------------------------------------------------- */
    if (response.status === 401) {
      // Неверный ключ / неактивная подписка
      return NextResponse.json(
        {
          error: "ElevenLabs вернул 401 Unauthorized. " + "Проверьте корректность ключа и активность подписки.",
        },
        { status: 500 },
      )
    }

    if (!response.ok) {
      // Любые другие ошибки
      console.error("ElevenLabs API error:", response.status, response.statusText)
      return NextResponse.json({ error: `TTS service error (status ${response.status})` }, { status: 500 })
    }

    const audioBuffer = await response.arrayBuffer()

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("TTS Error:", error)
    return NextResponse.json(
      {
        error: "TTS generation failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"
import { type NextRequest, NextResponse } from "next/server"

interface Message {
  sender: "user" | "bot" | "Пользователь" | "Пользователь"; 
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    // Получаем ключ из безопасной переменой оружения (production)
    // или из NEXT_PUBLIC_… (браузерный preview-режим next-lite).
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      console.error("OpenAI API key is not set")
      return NextResponse.json({ error: "Отсутствует переменная окружения OPENAI_API_KEY." }, { status: 500 })
    }

    // Создаем контекст из истории разговора
    let conversationContext = ""
    if (conversationHistory && conversationHistory.length > 0) {
      conversationContext = conversationHistory
        .map((msg: Message) => `${msg.sender === "user" ? "Пользователь" : "Консультант"}: ${msg.text}`)
        .join("\n")
    }

    const systemPrompt = `Ты - профессиональный речевой консультант и логопед, работающий в платформе Soile AI. 

Твоя роль:
- Помогать людям с нарушениями речи
- Давать советы по речевым упражнениям и восстановлению
- Поддерживать мотивацию пациентов
- Отвечать на вопросы о дефектах речи
- Рекомендовать обращение к специалистам при необходимости

Стиль общения:
- Дружелюбный и поддерживающий
- Профессиональный, но понятный
- Эмпатичный к проблемам пользователей
- Мотивирующий и позитивный

Отвечай на том языке, на котором с тобой общаются. Если вопрос не связан с речью или логопедией, вежливо перенаправь разговор на твою специализацию.

${conversationContext ? `\nКонтекст разговора:\n${conversationContext}\n` : ""}

Новое сообщение пользователя:`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: message,
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Ошибка API чата:", error)
    return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 })
  }
}

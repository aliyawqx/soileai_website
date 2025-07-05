"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Mic, MicOff, Play, Pause, Download, RotateCcw, Languages, Volume2, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../components/speech-consultant"

export default function RecognitionPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("ru-RU")
  const [recognizedText, setRecognizedText] = useState("")
  const [hasRecording, setHasRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const languages = [
    { code: "kk-KZ", name: "Қазақша", flag: "🇰🇿" },
    { code: "ru-RU", name: "Русский", flag: "🇷🇺" },
    { code: "en-US", name: "English", flag: "🇺🇸" },
    { code: "uz-UZ", name: "O'zbekcha", flag: "🇺🇿" },
    { code: "ky-KG", name: "Кыргызча", flag: "🇰🇬" },
  ]

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()

        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = selectedLanguage

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let finalTranscript = ""

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
              finalTranscript += transcript
            }
          }

          if (finalTranscript) {
            setRecognizedText((prev) => prev + finalTranscript)
          }
        }

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error("Speech recognition error:", event.error)
          setIsRecording(false)

          if (event.error === "language-not-supported") {
            alert(`Язык ${selectedLanguage} не поддерживается браузером. Попробуйте другой язык.`)
          }
        }

        recognition.onend = () => {
          setIsRecording(false)
        }

        recognitionRef.current = recognition
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [selectedLanguage])

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop())
      }

      if (recognitionRef.current) {
        recognitionRef.current.lang = selectedLanguage
        recognitionRef.current.start()
      } else {
        alert("Распознавание речи не поддерживается в вашем браузере.")
        return
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecognizedText("")
      setHasRecording(false)
    } catch (error) {
      console.error("Error starting recording:", error)
      alert("Ошибка доступа к микрофону. Проверьте разрешения.")
    }
  }

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop()
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }

    setIsRecording(false)
    setHasRecording(true)
  }

  const handleGenerateTTS = async () => {
    if (!recognizedText.trim()) return

    setIsProcessing(true)
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: recognizedText,
          language: selectedLanguage,
        }),
      })

      const contentType = response.headers.get("Content-Type") || ""

      if (response.ok && contentType.includes("audio")) {
        const audioBlob = await response.blob()
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)
        return
      }

      const json = await response.json().catch(() => ({}))
      const errMsg =
        json?.error || `Ошибка TTS (${response.status}) – проверьте API-ключ ElevenLabs или лимиты сервиса.`

      if (json?.fallback) {
        alert(json.fallback)
      } else {
        alert(errMsg)
      }
    } catch (error) {
      console.error("TTS Error:", error)
      alert("Не удалось сгенерировать аудио. Попробуйте ещё раз позже.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePlayAudio = () => {
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.src = audioUrl
        audioRef.current.play()
        setIsPlaying(true)

        audioRef.current.onended = () => {
          setIsPlaying(false)
        }
      }
    }
  }

  const handleReset = () => {
    setIsRecording(false)
    setIsPlaying(false)
    setHasRecording(false)
    setRecognizedText("")
    setAudioUrl(null)
    setIsProcessing(false)

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ""
    }
  }

  const downloadText = () => {
    const element = document.createElement("a")
    const file = new Blob([recognizedText], { type: "text/plain;charset=utf-8" })
    element.href = URL.createObjectURL(file)
    element.download = "recognized-text.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const downloadAudio = () => {
    if (audioUrl) {
      const element = document.createElement("a")
      element.href = audioUrl
      element.download = "generated-audio.wav"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }

  const getLanguageInfo = () => {
    const lang = languages.find((l) => l.code === selectedLanguage)
    return lang || languages[1]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Mobile Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center">
                <img src="/soile-logo.svg" alt="Soile AI" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Главная
              </Link>
              <Link href="/recognition" className="text-blue-600 font-medium">
                Распознавание речи
              </Link>
              <Link href="/recovery" className="text-gray-600 hover:text-blue-600 transition-colors">
                Восстановление
              </Link>
              <Link href="/articles" className="text-gray-600 hover:text-blue-600 transition-colors">
                Статьи
              </Link>
              <Link href="/recognition">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Начать
                </Button>
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-3 pt-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link
                  href="/recognition"
                  className="text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Распознавание речи
                </Link>
                <Link
                  href="/recovery"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Восстановление
                </Link>
                <Link
                  href="/articles"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Статьи
                </Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 mt-2 w-full">
                    Начать
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Многоязычное распознавание речи
            </h1>
            <p className="text-base md:text-xl text-gray-600">
              Поддержка казахского, русского, английского и других языков
            </p>
          </div>

          {/* Language Selection */}
          <Card className="mb-6 border-blue-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-blue-800 text-lg">
                <Languages className="w-5 h-5" />
                <span>Выбор языка</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите язык" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center justify-center space-x-2 text-lg bg-blue-50 p-3 rounded-lg">
                  <span>{getLanguageInfo().flag}</span>
                  <span className="font-medium text-blue-800">{getLanguageInfo().name}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recording Section */}
          <Card className="mb-6 border-blue-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-blue-800 text-lg">
                <Mic className="w-5 h-5" />
                <span>Запись речи</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full flex items-center justify-center mb-4 transition-all ${
                    isRecording
                      ? "bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"
                      : "bg-gradient-to-r from-blue-500 to-cyan-500"
                  }`}
                >
                  {isRecording ? (
                    <MicOff className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  ) : (
                    <Mic className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  )}
                </div>

                {isRecording && (
                  <div className="text-red-600 font-medium mb-4 text-sm md:text-base">
                    🔴 Идёт запись на {getLanguageInfo().flag} {getLanguageInfo().name}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                {!isRecording ? (
                  <Button
                    size="lg"
                    onClick={handleStartRecording}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full sm:w-auto"
                  >
                    <Mic className="w-5 h-5 mr-2" />
                    Начать запись
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={handleStopRecording}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 w-full sm:w-auto"
                  >
                    <MicOff className="w-5 h-5 mr-2" />
                    Остановить
                  </Button>
                )}

                {hasRecording && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleReset}
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Сбросить
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {hasRecording && (
            <div className="space-y-6">
              {/* Text Output */}
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-800 text-lg">Распознанный текст</CardTitle>
                  <CardDescription className="text-sm">
                    Ваша речь на {getLanguageInfo().flag} {getLanguageInfo().name} преобразована в текст
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={recognizedText}
                    onChange={(e) => setRecognizedText(e.target.value)}
                    className="min-h-24 mb-4 text-base"
                    placeholder="Здесь появится распознанный текст..."
                    dir={["ar-SA", "fa-IR", "ur-PK"].includes(selectedLanguage) ? "rtl" : "ltr"}
                  />
                  <Button variant="outline" className="w-full bg-transparent" onClick={downloadText}>
                    <Download className="w-4 h-4 mr-2" />
                    Скачать текст
                  </Button>
                </CardContent>
              </Card>

              {/* Audio Output */}
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-800 text-lg">Адаптивная аудиоверсия</CardTitle>
                  <CardDescription className="text-sm">
                    Чёткое произношение на {getLanguageInfo().flag} {getLanguageInfo().name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all ${
                        isPlaying
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500"
                      }`}
                    >
                      <Volume2 className="w-10 h-10 text-white" />
                    </div>

                    {isPlaying && <div className="text-green-600 font-medium mb-4 text-sm">🔊 Воспроизведение...</div>}
                    {isProcessing && <div className="text-blue-600 font-medium mb-4 text-sm">⚙️ Генерация аудио...</div>}
                  </div>

                  <div className="space-y-3">
                    {!audioUrl && recognizedText && (
                      <Button
                        onClick={handleGenerateTTS}
                        disabled={isProcessing}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        {isProcessing ? (
                          <>
                            <Volume2 className="w-4 h-4 mr-2 animate-spin" />
                            Генерация...
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 mr-2" />
                            Создать аудио
                          </>
                        )}
                      </Button>
                    )}

                    {audioUrl && (
                      <div className="space-y-3">
                        <Button
                          onClick={handlePlayAudio}
                          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        >
                          {isPlaying ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Пауза
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Воспроизвести
                            </>
                          )}
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent" onClick={downloadAudio}>
                          <Download className="w-4 h-4 mr-2" />
                          Скачать аудио
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Info Section */}
          <Card className="mt-6 border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🌍 Многоязычная поддержка</h3>
                <div className="space-y-3 text-left">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">📝 Speech-to-Text:</h4>
                    <p className="text-gray-600 text-xs">Распознавание речи на языках Центральной Азии и мира</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">🔊 Text-to-Speech:</h4>
                    <p className="text-gray-600 text-xs">Естественный синтез речи с правильной интонацией</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    💡 <strong>Совет:</strong> Используйте хороший микрофон для лучшего качества распознавания
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <audio ref={audioRef} style={{ display: "none" }} />

      {/* Speech Consultant */}
      <SpeechConsultant />
    </div>
  )
}

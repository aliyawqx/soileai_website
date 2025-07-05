"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function SpeechHearingExercisesArticle() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Mobile Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Soile AI
              </span>
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
              <Link href="/recognition" className="text-gray-600 hover:text-blue-600 transition-colors">
                Распознавание речи
              </Link>
              <Link href="/recovery" className="text-gray-600 hover:text-blue-600 transition-colors">
                Восстановление
              </Link>
              <Link href="/articles" className="text-blue-600 font-medium">
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
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
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
                  className="text-blue-600 font-medium py-2"
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

      <div className="px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/articles">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад к статьям
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <Card className="mb-8 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-700">Упражнения</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />11 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" />
                  Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-4">
                🧏 Упражнения для развития речевого слуха
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Комплекс упражнений для развития фонематического слуха и улучшения восприятия речи.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Article Content */}
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p>Развитие речевого слуха — важная часть коррекционной и развивающей работы как с детьми, так и со взрослыми с нарушениями речи.</p>

                <h2>🗝️ Что даёт тренировка речевого слуха</h2>
                <ul>
                  <li>Улучшает понимание речи на слух.</li>
                  <li>Повышает чёткость произношения.</li>
                  <li>Помогает быстрее осваивать новые звуки.</li>
                  <li>Снижает количество ошибок в речи и письме.</li>
                </ul>

                <h2>🎧 Эффективные упражнения</h2>
                <p>👂 <strong>Определение звука в слове:</strong> Произносите слова и просите определить, есть ли нужный звук.</p>
                <p>📣 <strong>Определение места звука:</strong> Найдите, где звук слышится — в начале, середине или конце слова.</p>
                <p>🔔 <strong>Различение похожих звуков:</strong> Чередуйте похожие звуки — пусть человек различает их на слух.</p>
                <p>🎲 <strong>Игра «Эхо»:</strong> Повторять услышанный звук, слог или слово.</p>
                <p>🎵 <strong>Слоговые цепочки:</strong> Начать цепочку слогов, человек повторяет и добавляет свой.</p>

                <h2>✅ Советы</h2>
                <ul>
                  <li>Занимайтесь регулярно: 5–10 минут в день.</li>
                  <li>Используйте игровые формы.</li>
                  <li>Давайте время подумать и услышать.</li>
                  <li>Хвалите за старание и успехи!</li>
                </ul>

                <p>Развитие речевого слуха — путь к чёткой и красивой речи! 🫶</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/recovery">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full sm:w-auto">
                      Начать восстановление
                    </Button>
                  </Link>
                  <Link href="/recognition">
                    <Button
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
                    >
                      Попробовать распознавание
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 w-full sm:w-auto"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Speech Consultant */}
          <SpeechConsultant />
        </div>
      </div>
    </div>
  )
}

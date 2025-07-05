"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function SpeechDisordersArticle() {
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
                <Badge className="bg-blue-100 text-blue-700">Основы</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />8 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" />
                  Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-4">
                🗣️ Виды речевых нарушений и их коррекция
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Речь — ключ к общению и обучению. Если ребёнок говорит не так, как сверстники, важно не ждать, а
                помогать сразу.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Article Content */}
          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                {/* Виды нарушений */}
                <div className="mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">Основные виды речевых нарушений</h2>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-500">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">🔤 Дислалия</h3>
                      <p className="text-gray-700">
                        Ребёнок неправильно произносит звуки, шепелявит или заменяет буквы. Чаще всего это связано с
                        тем, что мышцы языка и губ развиты слабо или ребёнок редко слышит чёткую речь.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 md:p-6 rounded-lg border-l-4 border-yellow-500">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-3">⏸️ Заикание</h3>
                      <p className="text-gray-700">
                        Повторение слогов или запинки. Часто начинается после испуга или сильного стресса. При волнении
                        заикание может усиливаться.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 md:p-6 rounded-lg border-l-4 border-purple-500">
                      <h3 className="text-lg font-semibold text-purple-800 mb-3">🧩 Алалия</h3>
                      <p className="text-gray-700">
                        Ребёнок почти не говорит или говорит односложно. Слова и фразы даются с трудом. Причина обычно в
                        особенностях работы мозга.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">📚 Дислексия и дисграфия</h3>
                      <p className="text-gray-700">
                        Ребёнок путает буквы при чтении или письме, переставляет их местами. Важно заметить это в
                        начальной школе, чтобы не отставать от программы.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Методы коррекции */}
                <div className="mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">✅ Как помочь</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 md:p-6 rounded-lg border border-blue-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">👩‍🏫 Логопед</h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Подбирает упражнения, учит правильно произносить звуки, тренирует слух и речь через игры и
                        повторения.
                      </p>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-lg border border-blue-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">🧘 Психолог</h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Помогает справиться со страхом говорить, снимает внутреннее напряжение — это особенно важно при
                        заикании.
                      </p>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-lg border border-blue-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">🧩 Дефектолог</h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Работает с вниманием, памятью и мышлением. Без этого сложно развивать речь при сложных
                        нарушениях.
                      </p>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-lg border border-blue-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">💻 Современные методы</h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Специальные массажи, логопедические тренажёры, компьютерные программы, которые помогают быстрее
                        поставить звуки и развить речь.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Роль родителей */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 md:p-6 rounded-lg border border-cyan-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">🏡 Роль родителей</h3>
                    <p className="text-gray-700 mb-4">
                      Родители дома закрепляют результат: читают вместе книги, учат скороговорки, говорят спокойно и
                      правильно.
                    </p>
                    <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-yellow-800 font-medium text-sm">
                        ⚠️ Важно: Ребёнка нельзя ругать за ошибки — важнее хвалить за старание.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Заключение */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6 rounded-lg border border-green-200">
                  <h2 className="text-xl font-bold text-green-800 mb-4">🏁 Итог</h2>
                  <p className="text-gray-700 mb-4">
                    Речевые нарушения не проходят сами. Но при регулярной работе с логопедом и поддержке семьи почти все
                    проблемы можно решить.
                  </p>
                  <p className="text-green-800 font-semibold">
                    Главное — начать вовремя и не бояться обратиться за помощь.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
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

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Похожие статьи</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300">
                <CardHeader className="pb-3">
                  <Badge className="bg-green-100 text-green-700 w-fit">Поддержка</Badge>
                  <CardTitle className="text-lg text-blue-800">Роль семьи в речевой реабилитации</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Как близкие могут помочь в процессе восстановления речи и создать поддерживающую среду.
                  </CardDescription>
                  <Link href="/family-support">
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      Читать статью
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300">
                <CardHeader className="pb-3">
                  <Badge className="bg-purple-100 text-purple-700 w-fit">Технологии</Badge>
                  <CardTitle className="text-lg text-blue-800">Современные технологии в логопедии</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Обзор инновационных методов и технологий, используемых в современной речевой терапии.
                  </CardDescription>
                  <Link href="/technology-in-speech-therapy">
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Читать статью
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Speech Consultant */}
      <SpeechConsultant />
    </div>
  )
}

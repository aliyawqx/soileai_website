"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function MotivationGoalsArticle() {
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

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

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

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-3 pt-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-600 py-2">Главная</Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-600 py-2">Распознавание речи</Link>
                <Link href="/recovery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-600 py-2">Восстановление</Link>
                <Link href="/articles" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600 font-medium py-2">Статьи</Link>
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
          <div className="mb-6">
            <Link href="/articles">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад к статьям
              </Button>
            </Link>
          </div>

          <Card className="mb-8 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-700">Мотивация</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />7 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" /> Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-4">
                🏆 Мотивация и цели в речевой терапии: как настроиться на успех и не сойти с дистанции
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Как правильно ставить цели, сохранять мотивацию и добиваться реальных результатов в работе над речью.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p>Речевая терапия — это процесс, требующий времени, терпения и регулярных усилий. Независимо от возраста, будь то ребёнок, подросток или взрослый, ключевыми факторами успешной коррекции речи являются правильно поставленные цели и устойчивая мотивация. Без них даже самая квалифицированная помощь может не дать ожидаемых результатов 😓</p>

                <h2>Один из самых главных факторов — правильное определение цели 🎯</h2>
                <p>Цели и задачи должны быть конкретными.</p>
                <p>Например:</p>
                <p>❌ «Говорить лучше» → ✅ «Научиться чётко произносить звук [р] в словах».</p>

                <h2>Достижимость</h2>
                <p>Ставьте цели, соответствующие текущему уровню возможностей. Нереалистичные ожидания разочаровывают 😢</p>

                <h2>Пошаговое выполнение плана</h2>
                <p>Важно разбить большую цель на несколько пунктов. Разделение большой цели на этапы помогает видеть прогресс и поднимать мотивацию ⚡️</p>

                <h2>Самое главное — верьте в себя</h2>
                <p>Вера в себя всегда ускоряет результат реабилитации. Самые значимые достижения в мире были достигнуты самыми амбициозными людьми, которые верили в свою внутреннюю силу 💪</p>

                <p>🗝️ Ваше внутреннее достоинство — основной ключ к успеху.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/recovery">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full sm:w-auto">
                      Начать восстановление
                    </Button>
                  </Link>
                  <Link href="/recognition">
                    <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                      Попробовать распознавание
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 w-full sm:w-auto">
                    <Share2 className="w-4 h-4 mr-2" /> Поделиться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <SpeechConsultant />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function NutritionArticle() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-green-100">
      {/* Mobile Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-600 to-lime-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
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
              <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                Главная
              </Link>
              <Link href="/recognition" className="text-gray-600 hover:text-green-600 transition-colors">
                Распознавание речи
              </Link>
              <Link href="/recovery" className="text-gray-600 hover:text-green-600 transition-colors">
                Восстановление
              </Link>
              <Link href="/articles" className="text-green-600 font-medium">
                Статьи
              </Link>
              <Link href="/recognition">
                <Button className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700">
                  Начать
                </Button>
              </Link>
            </nav>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-3 pt-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-green-600 py-2">Главная</Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-green-600 py-2">Распознавание речи</Link>
                <Link href="/recovery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-green-600 py-2">Восстановление</Link>
                <Link href="/articles" onClick={() => setIsMobileMenuOpen(false)} className="text-green-600 font-medium py-2">Статьи</Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 mt-2 w-full">
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
              <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад к статьям
              </Button>
            </Link>
          </div>

          <Card className="mb-8 border-green-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-50 to-lime-50">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-yellow-100 text-yellow-700">Питание</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />6 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" /> Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-green-800 mb-4">
                🍋 Питание и здоровье речевого аппарата
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Как еда влияет на голос, дикцию и общее качество речи.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p>🗣️ Органы речи — это сложная система, включающая язык, губы, мягкое нёбо, гортань, голосовые связки, дыхательные пути и даже зубы. Их здоровье зависит не только от тренировки и ухода, но и от питания.</p>

                <h2>Полезные продукты для речевого аппарата</h2>
                <ul>
                  <li>🍗 Белки восстанавливают ткани, поддерживают мышцы. Встречаются в мясе, рыбе, бобовых.</li>
                  <li>💊 Витамины группы B улучшают работу нервов и мышц. Чаще всего содержатся в крупах, орехах, зелени.</li>
                  <li>💧 Вода увлажняет слизистые и поддерживает голос.</li>
                </ul>

                <h2>🚫 Чего следует избегать</h2>
                <ul>
                  <li>Слишком горячая или холодная пища — может раздражать слизистую.</li>
                  <li>🥠 Сухие и крошливые продукты (сухари, чипсы) — царапают гортань и вызывают кашель.</li>
                  <li>☕️ Кофеин и алкоголь — обезвоживают, сушат голосовые связки.</li>
                  <li>🧂 Сильно солёная и острая еда — усиливает раздражение слизистых.</li>
                </ul>

                <h2>📌 Рекомендации для поддержания речевого здоровья</h2>
                <ul>
                  <li>💧 Регулярное питьё: 1,5–2 литра воды в день.</li>
                  <li>🍯 Тёплая вода с мёдом или травяной чай — полезны для увлажнения голосовых связок.</li>
                  <li>🍽️ Полноценное питание: не пропускайте приёмы пищи, особенно завтрак — он активизирует голосовой аппарат.</li>
                  <li>Избегайте переедания перед речевой нагрузкой: это может снизить дыхательный объём.</li>
                </ul>

                <h2>🗣 Подходит для:</h2>
                <ul>
                  <li>Людей, активно использующих голос (педагогов, певцов, логопедов, дикторов)</li>
                  <li>Детей с речевыми нарушениями — правильное питание важно для мышечной активности</li>
                  <li>Людей после инсульта или с ДЦП — полноценный рацион поддерживает реабилитацию</li>
                </ul>

                <p>✅ <strong>Заключение:</strong> Питание — это не просто «топливо» для тела, а важнейший фактор поддержания здоровья речевого аппарата. Сбалансированный рацион помогает сохранить чистоту голоса, силу мышц и здоровье слизистых оболочек.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/recovery">
                    <Button className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 w-full sm:w-auto">
                      Начать восстановление
                    </Button>
                  </Link>
                  <Link href="/recognition">
                    <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                      Попробовать распознавание
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 w-full sm:w-auto">
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

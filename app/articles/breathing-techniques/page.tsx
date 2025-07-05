"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function BreathingExercisesArticle() {
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
                <Badge className="bg-blue-100 text-blue-700">Дыхание</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />8 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" /> Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-4">
                🌬️ Эффективные дыхательные упражнения для выразительной речи
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Как дыхание влияет на качество речи и какие упражнения помогут говорить чётко, уверенно и красиво.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p>Речь невозможна без дыхания. От его глубины, ритма и контроля зависит не только сила и чёткость голоса, но и способность выразительно, уверенно и долго говорить. Поэтому дыхательные упражнения считаются важными для эффективного восстановления речи ✅</p>

                <h2>Правильное речевое дыхание:</h2>
                <ul>
                  <li>📣 помогает говорить длинными фразами без частых вдохов;</li>
                  <li>увеличивает силу и звучность голоса;</li>
                  <li>⬇️ снижает напряжение в голосовых связках;</li>
                  <li>делает речь более плавной, выразительной и эмоциональной;</li>
                  <li>🎧 улучшает общее дыхание и концентрацию.</li>
                </ul>

                <h2>🙌 Основные принципы</h2>
                <ul>
                  <li>Дышать нужно через нос, выдыхать через рот.</li>
                  <li>Основное внимание — на диафрагмальное дыхание.</li>
                  <li>Вдох — короткий и активный, выдох — длинный и контролируемый.</li>
                  <li>Выполнять упражнения стоя или сидя с ровной спиной.</li>
                </ul>

                <h2>Эффективные упражнения</h2>

                <h3>🎈 «Шарик»</h3>
                <p>Положите руки на живот. На вдохе медленно «надуйте шарик» — живот округляется. На выдохе через рот — «сдувайте» шарик, втягивая живот. Повторите 5–7 раз.</p>

                <h3>🕯️ «Свеча»</h3>
                <p>Представьте, что перед вами горит свеча. Сделайте медленный вдох носом и плавно выдохните ртом так, чтобы пламя колыхалось, но не гасло. Это учит управлять силой и плавностью выдоха.</p>

                <h3>🐍 «Шипение»</h3>
                <p>Вдох через нос. На выдохе произносите долгий звук «с-с-с» или «ш-ш-ш». Старайтесь, чтобы выдох был ровным и как можно более длительным.</p>

                <h3>🚂 «Паровозик»</h3>
                <p>Вдохните через нос. На выдохе ритмично произносите «чух-чух-чух» или «пуф-пуф-пуф». Можно сопровождать движение руками — детям особенно нравится.</p>

                <h3>📖 Чтение на выдохе</h3>
                <p>Возьмите короткое стихотворение. Сделайте вдох и читайте строчку на одном выдохе. Постепенно увеличивайте длину фразы, произносимой без добора воздуха.</p>

                <h2>Дополнительные советы</h2>
                <ul>
                  <li>Выполняйте упражнения регулярно: 5–10 минут в день.</li>
                  <li>Отлично подходят как утренняя разминка.</li>
                  <li>Перед упражнениями сделайте лёгкую разминку — это улучшает кровообращение.</li>
                  <li>Включайте упражнения в логопедические занятия, пение, работу над дикцией.</li>
                </ul>

                <h2>Заключение</h2>
                <p>Дыхательные упражнения — простые, но мощные инструменты для выразительной, уверенной и управляемой речи. Они полезны и детям, и взрослым, помогают не только улучшить речь, но и снять напряжение, наладить контакт с телом и голосом 🗣️</p>
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

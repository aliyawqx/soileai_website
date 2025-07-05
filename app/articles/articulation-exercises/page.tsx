"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function ArticulationGymnasticsArticle() {
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
                <Badge className="bg-blue-100 text-blue-700">Основы</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />10 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" /> Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-4">
                🗣️ Основы артикуляционной гимнастики: подробное руководство
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Практические упражнения для укрепления мышц органов речи у детей и взрослых.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p>Артикуляционная гимнастика — это комплекс упражнений, направленных на развитие и укрепление мышц органов речи: губ, языка, щёк, мягкого нёба. Она важна для детей, осваивающих речь, а также для взрослых, восстанавливающихся после речевых нарушений.</p>

                <p>Упражнения помогают:</p>
                <ul className="list-disc pl-6">
                  <li>🗣️ улучшить дикцию;</li>
                  <li>🔈 развить правильную артикуляцию звуков;</li>
                  <li>🗯️ подготовить речевой аппарат к постановке звуков;</li>
                  <li>💯 устранить или предотвратить речевые дефекты.</li>
                </ul>

                <p>Вот несколько простых и эффективных упражнений, которые можно выполнять ежедневно:</p>

                <div className="space-y-4">
                  <div>
                    <strong>«Улыбка» и «трубочка»</strong><br/>
                    Попеременно вытягивайте губы в трубочку, затем широко улыбайтесь, не показывая зубы. Повторите 5–7 раз.
                  </div>
                  <div>
                    <strong>«Часики»</strong><br/>
                    Открыть рот и двигать языком от одного уголка губ к другому, как маятник. Следите, чтобы голова оставалась неподвижной.
                  </div>
                  <div>
                    <strong>🐎 «Лошадка»</strong><br/>
                    Стук языком по верхнему нёбу, имитируя цоканье. Это упражнение хорошо развивает подвижность языка.
                  </div>
                  <div>
                    <strong>🫟 «Маляр»</strong><br/>
                    Широким языком «покрасьте» верхнее нёбо, проводя им вперёд-назад.
                  </div>
                  <div>
                    <strong>🍄‍🟫 «Грибок»</strong><br/>
                    Прижмите широкий язык к нёбу, будто присоской, и медленно открывайте рот, не отрывая язык.
                  </div>
                </div>

                <p>Упражнения желательно выполнять перед зеркалом, чтобы контролировать правильность движений.<br/>
                Начинать с 3–5 минут в день, постепенно увеличивая продолжительность.<br/>
                Повторять каждое упражнение по 5–10 раз.<br/>
                Занятия проводить регулярно, желательно в одно и то же время 🙌</p>
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

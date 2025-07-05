"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Share2, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../../components/speech-consultant"

export default function FamilySupportArticle() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
      {/* Mobile Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
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
              <Link href="/" className="text-gray-600 hover:text-yellow-600 transition-colors">
                Главная
              </Link>
              <Link href="/recognition" className="text-gray-600 hover:text-yellow-600 transition-colors">
                Распознавание речи
              </Link>
              <Link href="/recovery" className="text-gray-600 hover:text-yellow-600 transition-colors">
                Восстановление
              </Link>
              <Link href="/articles" className="text-yellow-600 font-medium">
                Статьи
              </Link>
              <Link href="/recognition">
                <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600">
                  Начать
                </Button>
              </Link>
            </nav>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-3 pt-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-yellow-600 py-2">Главная</Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-yellow-600 py-2">Распознавание речи</Link>
                <Link href="/recovery" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-yellow-600 py-2">Восстановление</Link>
                <Link href="/articles" onClick={() => setIsMobileMenuOpen(false)} className="text-yellow-600 font-medium py-2">Статьи</Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 mt-2 w-full">
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
              <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад к статьям
              </Button>
            </Link>
          </div>

          <Card className="mb-8 border-yellow-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-orange-100 text-orange-700">Поддержка</Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />9 мин чтения
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" /> Soile AI Team
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl text-yellow-800 mb-4">
                👥 Роль семьи в речевой реабилитации
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Практические советы для родственников о том, как поддержать близкого человека.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-yellow-200 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p>🩺 Восстановление речи после инсульта, травмы головы или других неврологических заболеваний — длительный и непростой процесс. Одним из ключевых факторов успешной реабилитации является активное участие семьи.</p>

                <p>👨‍⚕️ Специалисты — логопеды, афазиологи, неврологи — играют важную роль, но реальная практика происходит дома. Именно там человек сталкивается с реальными речевыми ситуациями: диалогами, просьбами, необходимостью что-то объяснить.</p>

                <p>Без ежедневной практики прогресс может замедлиться. Родные могут помогать соблюдать режим занятий и делать их частью повседневной жизни.</p>

                <h2>Практические советы для родственников</h2>

                <ul>
                  <li>🙌 <strong>Проявляйте терпение</strong><br />
                  Не перебивайте, если человек долго подбирает слова.<br />
                  ❎ Не заканчивайте за него фразы, если он не просит.<br />
                  Будьте готовы к повторениям и ошибкам — это нормально.</li>

                  <li>🛩️ <strong>Упрощайте, но не «упрощайте слишком»</strong><br />
                  Используйте короткие и понятные фразы.<br />
                  💬 Избегайте иронии, сложных метафор и двусмысленных выражений.<br />
                  При этом не разговаривайте «как с ребёнком» — сохраняйте уважительный тон.</li>

                  <li>🗣️ <strong>Разговаривайте регулярно</strong><br />
                  🤍 Устраивайте короткие беседы каждый день, даже если они односторонние.<br />
                  Обсуждайте простые и знакомые темы: еда, погода, родственники, хобби.<br />
                  Используйте фотоальбомы, семейные видео — они пробуждают память и эмоции.</li>

                  <li>🧺 <strong>Вовлекайте в бытовые дела</strong><br />
                  🧩 Попросите помочь накрыть на стол, назвать продукты, составить список покупок.<br />
                  💁‍♀️ Комментируйте действия: «Я режу хлеб. Это хлеб. А это нож».</li>
                </ul>

                <p>Такие действия активизируют как пассивную, так и активную речь.</p>

                <p>Каждый случай уникален. У кого-то речь восстанавливается быстро, у кого-то — медленно и частично. Главное — не терять веру в прогресс, быть рядом и не сдаваться. Ваша поддержка, терпение и любовь — мощный стимул для восстановления 🫶</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/recovery">
                    <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 w-full sm:w-auto">
                      Начать восстановление
                    </Button>
                  </Link>
                  <Link href="/recognition">
                    <Button variant="outline" className="border-yellow-300 text-yellow-600 hover:bg-yellow-50 w-full sm:w-auto">
                      Попробовать распознавание
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 w-full sm:w-auto">
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

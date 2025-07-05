"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Brain,
  Users,
  Video,
  BookOpen,
  Heart,
  Globe,
  Headphones,
  GraduationCap,
  UserCheck,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "./components/speech-consultant"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Mobile Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center">
                <img src="/soile-logo.png" alt="Soile AI" className="w-full h-full object-contain" />
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
              <Link href="/" className="text-blue-600 font-medium">
                Главная
              </Link>
              <Link href="/recognition" className="text-gray-600 hover:text-blue-600 transition-colors">
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
                <Link href="/" className="text-blue-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
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
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Статьи
                </Link>
                <Link href="/recognition" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Начать
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          {/* Logo */}

          <Badge
            variant="secondary"
            className="mb-4 md:mb-6 bg-blue-100 text-blue-700 border-blue-200 text-xs md:text-sm"
          >
            🎯 Инновационные технологии для речевой реабилитации
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 leading-tight">
            Помогаем людям с дефектами речи быть услышанными
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
            Soile AI распознаёт дефектную речь и преобразует её в понятный текст и адаптивную аудиоверсию, предлагает
            эффективный подход к восстановлению речи. Ваш голос важен — мы поможем его услышать.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center mb-8 md:mb-12">
            <Link href="/recognition" className="w-full md:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full md:w-auto"
              >
                <Mic className="w-5 h-5 mr-2" />
                Попробовать распознавание
              </Button>
            </Link>
            <Link href="/recovery" className="w-full md:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent w-full md:w-auto"
              >
                <Video className="w-5 h-5 mr-2" />
                Начать восстановление
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800">Наши возможности</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к решению проблем с речью
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-lg md:text-xl">Распознавание языков стран СНГ</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Распознавание и адаптация речи на казахском, русском, английском, узбекском и кыргызском языках
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-lg md:text-xl">Адаптивное аудио</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Преобразование дефектной речи в чёткую и понятную аудиоверсию
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-lg md:text-xl">Видео-уроки</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Профессиональные видео-уроки для улучшения качества речи
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-lg md:text-xl">ИИ-тренировки</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Персонализированные тренировки, разработанные с дефектологами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-lg md:text-xl">Психологическая поддержка</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Консультации с психологами для поддержания ментального здоровья
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 text-lg md:text-xl">Профессиональные консультации</CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base">
                  Индивидуальные консультации с дефектологами и речевыми терапевтами
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800">Наши услуги</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="pb-3 md:pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-blue-800">Обучение и восстановление</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>Видео-уроки от профессиональных логопедов</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>Персонализированные программы тренировок</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>Интерактивные упражнения с ИИ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="pb-3 md:pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-blue-800">Поддержка и консультации</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>Консультации с дефектологами</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>Психологическая поддержка</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>Речевой консультант 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-800">База знаний</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Изучайте полезные статьи о дефектах речи, методах восстановления и современных подходах к лечению
            </p>
            <Link href="/articles">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full md:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Читать статьи
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Начните свой путь к чёткой речи уже сегодня
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам людей, которые уже улучшили качество своей речи с помощью Soile AI
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center">
            <Link href="/recognition" className="w-full md:w-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full md:w-auto">
                Попробовать бесплатно
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent w-full md:w-auto"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center">
                  <img src="/soile-logo.png" alt="Soile AI" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg md:text-xl font-bold">Soile AI</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">Технологии ИИ для речевой реабилитации</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Услуги</h3>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/recognition" className="hover:text-white transition-colors">
                    Распознавание речи
                  </Link>
                </li>
                <li>
                  <Link href="/recovery" className="hover:text-white transition-colors">
                    Восстановление
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-white transition-colors">
                    Статьи
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Контакты</h3>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:+77006537475" className="hover:text-white transition-colors flex items-center">
                    <Phone className="w-3 h-3 mr-2" />
                    +7 700 653 7475
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:soileai.official@gmail.com"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-3 h-3 mr-2" />
                    soileai.official@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/soile.ai?igsh=Z2Z4Zzk5bGgzdjcx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Instagram className="w-3 h-3 mr-2" />
                    @soile.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; 2025 Soile AI. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Speech Consultant */}
      <SpeechConsultant />
    </div>
  )
}

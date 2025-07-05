"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronLeft, ChevronRight, Clock, Users, BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../components/speech-consultant"

export default function RecoveryPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

   const videos = [
    {
      id: 1,
      title: "Приветствие",
      duration: "0:19",
      instructor: "Академия коммуникаций 'MODERNIZE'",
      level: "Начинающий",
      description: "Добро пожаловать в мир речевой реабилитации с Soile AI",
      youtubeId: "kDSDjayxKzE",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Приветствие",
    },
    {
      id: 2,
      title: "Паузы в речи",
      duration: "2:47",
      instructor: "Академия коммуникаций 'MODERNIZE'",
      level: "Начинающий",
      description: "Как правильно использовать паузы в речи для улучшения выразительности",
      youtubeId: "5AWm4cxc4lE",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Паузы+в+речи",
    },
    {
      id: 3,
      title: "Слова и звуки паразиты",
      duration: "5:39",
      instructor: "Академия коммуникаций 'MODERNIZE'",
      level: "Начинающий",
      description: "Как избавиться от слов-паразитов и улучшить чистоту речи",
      youtubeId: "7d72TQy1hgk",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Слова+паразиты",
    },
    {
      id: 4,
      title: "Интонации",
      duration: "8:14",
      instructor: "Академия коммуникаций 'MODERNIZE'",
      level: "Средний",
      description: "Развитие интонационной выразительности и мелодики речи",
      youtubeId: "kKvcj4uC08c",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Интонации",
    },
    {
      id: 5,
      title: "Постановка красивого голоса",
      duration: "10:44",
      instructor: "Академия коммуникаций 'MODERNIZE'",
      level: "Продвинутый",
      description: "Техники постановки и развития красивого, звучного голоса",
      youtubeId: "i7tTpA-fdqk",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Красивый+голос",
    },
    {
      id: 6,
      title: "Темп речи",
      duration: "3:56",
      instructor: "Академия коммуникаций 'MODERNIZE'",
      level: "Начинающий",
      description: "Как контролировать темп речи для лучшего восприятия",
      youtubeId: "kK096c2z2L4",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Темп+речи",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Виды речевых нарушений и их коррекция",
      category: "Основы",
      readTime: "8 мин",
      excerpt: "Подробный обзор основных типов речевых нарушений и современных методов их коррекции.",
      link: "/articles/speech-disorders",
    },
    {
      id: 2,
      title: "Роль семьи в речевой реабилитации",
      category: "Поддержка",
      readTime: "6 мин",
      excerpt: "Как близкие могут помочь в процессе восстановления речи и создать поддерживающую среду.",
      link: "/articles/family-support",
    },
    {
      id: 3,
      title: "Упражнения для развития речевого слуха",
      category: "Упражнения",
      excerpt: "Комплекс упражнений для развития фонематического слуха и улучшения восприятия речи.",
      readTime: "11 мин",
      link: "/articles/speech-hearing-exercises",
    },
    {
      id: 4,
      title: "Психологические аспекты речевых нарушений",
      category: "Психология",
      readTime: "12 мин",
      excerpt: "Влияние речевых проблем на психическое состояние и методы психологической поддержки.",
      link: "/articles/psychological-support",
    },
    {
      id: 5,
      title: "Современные технологии в логопедии",
      category: "Технологии",
      excerpt: "Обзор инновационных методов и приложений, используемых в современной речевой терапии.",
      readTime: "10 мин",
      link: "/articles/technology-in-speech-therapy",
    },
    {
      id: 6,
      title: "Питание и речь: связь и влияние",
      category: "Здоровье",
      readTime: "5 мин",
      excerpt: "Как правильное питание может влиять на качество речи и процесс восстановления.",
      link: "/articles/nutrition-and-speech-health",
    },
  ]


  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начинающий":
        return "bg-green-100 text-green-700"
      case "Средний":
        return "bg-yellow-100 text-yellow-700"
      case "Продвинутый":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Основы: "bg-blue-100 text-blue-700",
      Поддержка: "bg-green-100 text-green-700",
      Технологии: "bg-purple-100 text-purple-700",
      Психология: "bg-pink-100 text-pink-700",
      Профилактика: "bg-orange-100 text-orange-700",
      Здоровье: "bg-cyan-100 text-cyan-700",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
  }

  const currentVideo = videos[currentVideoIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Mobile Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
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
              <Link href="/recovery" className="text-blue-600 font-medium">
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
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Распознавание речи
                </Link>
                <Link
                  href="/recovery"
                  className="text-blue-600 font-medium py-2"
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

      <div className="px-4 py-6 md:py-12">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Восстановление речи
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные видео-уроки и полезные статьи для улучшения качества речи
            </p>
          </div>

          {/* Video Lessons Section */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">Видео-уроки</h2>

            {/* Video Player */}
            <Card className="mb-6 md:mb-8 border-blue-200 shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  {currentVideo.youtubeId ? (
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full rounded-t-lg"
                        src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`}
                        title={currentVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-t-lg">
                      <div className="aspect-video flex items-center justify-center p-4">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                            <Play className="w-8 h-8 md:w-12 md:h-12 text-white" />
                          </div>
                          <h3 className="text-lg md:text-2xl font-bold mb-2">{currentVideo.title}</h3>
                          <p className="text-blue-100 text-sm md:text-base">{currentVideo.description}</p>
                          <p className="text-blue-200 text-xs md:text-sm mt-2">Скоро будет доступно</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Video Navigation */}
                  <div className="absolute inset-y-0 left-2 md:left-4 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevVideo}
                      className="bg-black/20 hover:bg-black/40 text-white w-8 h-8 md:w-10 md:h-10"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </Button>
                  </div>
                  <div className="absolute inset-y-0 right-2 md:right-4 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextVideo}
                      className="bg-black/20 hover:bg-black/40 text-white w-8 h-8 md:w-10 md:h-10"
                    >
                      <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </Button>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <Badge className={getLevelColor(currentVideo.level)}>{currentVideo.level}</Badge>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      {currentVideo.duration}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      {currentVideo.instructor}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{currentVideo.description}</p>
                  {currentVideo.youtubeId ? (
                    <div className="text-green-600 font-medium text-sm">✅ Видео доступно для просмотра</div>
                  ) : (
                    <Button disabled className="bg-gray-400 cursor-not-allowed w-full md:w-auto">
                      <Play className="w-4 h-4 mr-2" />
                      Скоро будет доступно
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {videos.map((video, index) => (
                <Card
                  key={video.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    index === currentVideoIndex ? "ring-2 ring-blue-500 border-blue-300" : "border-blue-200"
                  }`}
                  onClick={() => setCurrentVideoIndex(index)}
                >
                  <CardContent className="p-2 md:p-3">
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2 md:mb-3">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 md:w-5 md:h-5 text-blue-600 ml-0.5" />
                        </div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </div>
                      {/* Available Indicator */}
                      {video.youtubeId && (
                        <div className="absolute top-1 right-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                        </div>
                      )}
                      {/* Current Video Indicator */}
                      {index === currentVideoIndex && (
                        <div className="absolute top-1 left-1">
                          <div className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-medium">Сейчас</div>
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium text-xs md:text-sm mb-1 line-clamp-2 text-gray-800">{video.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <Badge className={`${getLevelColor(video.level)} text-xs px-1.5 py-0.5`} variant="secondary">
                        {video.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Articles Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">Полезные статьи</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-base md:text-lg text-blue-800 line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 md:mb-4 line-clamp-3 text-sm">{article.excerpt}</CardDescription>
                    <Link href={`${article.link}`}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Читать статью
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-8">
              <Link href="/articles">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full md:w-auto"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Все статьи
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Speech Consultant */}
      <SpeechConsultant />
    </div>
  )
}

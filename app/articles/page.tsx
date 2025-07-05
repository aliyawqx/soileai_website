"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Clock, Search, Star, User, Menu, X } from "lucide-react"
import Link from "next/link"
import SpeechConsultant from "../components/speech-consultant"

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = [
    { id: "all", name: "Все статьи", count: 25 },
    { id: "basics", name: "Основы", count: 7 },
    { id: "exercises", name: "Упражнения", count: 8 },
    { id: "psychology", name: "Психология", count: 4 },
    { id: "technology", name: "Технологии", count: 3 },
    { id: "support", name: "Поддержка", count: 3 },
  ]

  const articles = [
    {
      id: 1,
      title: "Виды речевых нарушений и их коррекция",
      category: "basics",
      categoryName: "Основы",
      excerpt:
        "Подробный обзор основных типов речевых нарушений: дислалия, заикание, алалия, дислексия. Современные методы коррекции и роль семьи в процессе восстановления.",
      readTime: "8 мин",
      author: "Soile AI Team",
      rating: 4.9,
      views: 2150,
      featured: true,
      link: "/articles/speech-disorders",
    },
    {
      id: 2,
      title: "Основы артикуляционной гимнастики",
      category: "basics",
      categoryName: "Основы",
      excerpt:
        "Подробное руководство по выполнению базовых артикуляционных упражнений для улучшения подвижности органов речи.",
      readTime: "10 мин",
      author: "Soile AI Team",
      rating: 4.8,
      views: 1250,
      featured: true,
      link: "/articles/articulation-exercises",
    },
    {
      id: 3,
      title: "Дыхательные техники для речи",
      category: "exercises",
      categoryName: "Упражнения",
      excerpt: "Эффективные дыхательные упражнения, которые помогут улучшить качество и выразительность речи.",
      readTime: "8 мин",
      author: "Михаил Иванов",
      rating: 4.9,
      views: 980,
      featured: false,
      link: "/articles/breathing-techniques",
    },
    {
      id: 4,
      title: "Психологическая поддержка при речевых нарушениях",
      category: "psychology",
      categoryName: "Психология",
      excerpt: "Как справиться с эмоциональными трудностями и повысить уверенность в себе при речевых проблемах.",
      readTime: "15 мин",
      author: "Soile AI Team",
      rating: 4.7,
      views: 756,
      featured: true,
      link: "/articles/psychological-support",
    },
    {
      id: 5,
      title: "Современные технологии в логопедии",
      category: "technology",
      categoryName: "Технологии",
      excerpt: "Обзор инновационных методов и приложений, используемых в современной речевой терапии.",
      readTime: "10 мин",
      author: "Soile AI Team",
      rating: 4.6,
      views: 634,
      featured: false,
      link: "/articles/technology-in-speech-therapy",
    },
    {
      id: 6,
      title: "Роль семьи в речевой реабилитации",
      category: "support",
      categoryName: "Поддержка",
      excerpt:
        "Практические советы для родственников о том, как поддержать близкого человека в процессе восстановления речи.",
      readTime: "9 мин",
      author: "Soile AI Team",
      rating: 4.8,
      views: 892,
      featured: false,
      link: "/articles/family-support",
    },
    {
      id: 7,
      title: "Упражнения для развития речевого слуха",
      category: "exercises",
      categoryName: "Упражнения",
      excerpt: "Комплекс упражнений для развития фонематического слуха и улучшения восприятия речи.",
      readTime: "11 мин",
      author: "Soile AI Team",
      rating: 4.7,
      views: 723,
      featured: false,
      link: "/articles/speech-hearing-exercises",
    },
    {
      id: 8,
      title: "Мотивация и цели в речевой терапии",
      category: "psychology",
      categoryName: "Психология",
      excerpt: "Как правильно ставить цели и поддерживать мотивацию на пути к улучшению речи.",
      readTime: "7 мин",
      author: "Soile AI Team",
      rating: 4.9,
      views: 567,
      featured: true,
      link: "/articles/motivation-in-speech-therapy",
    },
    {
      id: 9,
      title: "Питание и здоровье речевого аппарата",
      category: "basics",
      categoryName: "Основы",
      excerpt: "Влияние питания на здоровье органов речи и рекомендации по правильному рациону.",
      readTime: "6 мин",
      author: "Soile AI Team",
      rating: 4.5,
      views: 445,
      featured: false,
      link: "/articles/nutrition-and-speech-health",
    },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = articles.filter((article) => article.featured)

  const getCategoryColor = (category: string) => {
    const colors = {
      basics: "bg-blue-100 text-blue-700",
      exercises: "bg-green-100 text-green-700",
      psychology: "bg-purple-100 text-purple-700",
      technology: "bg-orange-100 text-orange-700",
      support: "bg-pink-100 text-pink-700",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
  }

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
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              База знаний
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Полезные статьи о речевых нарушениях, методах восстановления и современных подходах к лечению
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 mb-4 md:mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                <Input
                  placeholder="Поиск статей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 md:pl-10 border-blue-200 focus:border-blue-400"
                />
              </div>
              {/* <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Фильтры
              </Button> */}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-xs md:text-sm ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      : "border-blue-300 text-blue-600 hover:bg-blue-50"
                  }`}
                  size="sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          {selectedCategory === "all" && (
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Рекомендуемые статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featuredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300 relative"
                  >
                    <CardHeader className="pb-3 pr-20">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getCategoryColor(article.category)}>{article.categoryName}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-base md:text-lg text-blue-800 line-clamp-2">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-3 md:mb-4 line-clamp-3 text-sm">{article.excerpt}</CardDescription>
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-500" />
                          {article.rating}
                        </div>
                      </div>
                      <Link href={article.link}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Читать статью
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* All Articles */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
              {selectedCategory === "all" ? "Все статьи" : categories.find((c) => c.id === selectedCategory)?.name}
              <span className="text-gray-500 font-normal ml-2">({filteredArticles.length})</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border-blue-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>{article.categoryName}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-base md:text-lg text-blue-800 line-clamp-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 md:mb-4 line-clamp-3 text-sm">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-500" />
                        {article.rating}
                      </div>
                    </div>
                    <Link href={article.link}>
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

            {filteredArticles.length === 0 && (
              <div className="text-center py-8 md:py-12">
                <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">Статьи не найдены</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Попробуйте изменить поисковый запрос или выбрать другую категорию
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Speech Consultant */}
      <SpeechConsultant />
    </div>
  )
}

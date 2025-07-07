"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Search,
    Calendar,
    User,
    TrendingUp,
    ArrowRight,
    Filter,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/header"
import { apiCall } from "@/helper/apiCall"
import { Footer } from "@/components/footer"

type BlogPost = {
    title: string
    category: string
    thumbnail: string
    content: string
    created: string
}

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [sortBy, setSortBy] = useState("newest")
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

    const categories = useMemo(() => {
        const set = new Set<string>();
        blogPosts.forEach((post) => {
            if (post.category) set.add(post.category);
        });
        return ["All", ...Array.from(set)];
    }, [blogPosts])

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await apiCall.get("/articles")
                setBlogPosts(response.data)
            } catch (error) {
                console.error("Error fetching blog posts:", error)
            }
        }
        fetchBlogPosts()
    }, [])

    // Filter and sort blog posts
    const filteredPosts = blogPosts
        .filter((post: any) => {
            const matchesSearch =
                post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
            return matchesSearch && matchesCategory
        })
        .sort((a: any, b: any) => {
            if (sortBy === "newest") {
                return new Date(b.created).getTime() - new Date(a.created).getTime()
            } else if (sortBy === "oldest") {
                return new Date(a.created).getTime() - new Date(b.created).getTime()
            }
            return 0
        })

    const featuredPosts = filteredPosts.slice(0, 2)
    const regularPosts = filteredPosts.filter(
        (post) => !featuredPosts.some((featured) => featured.title === post.title)
    )

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header></Header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />

                    {/* Content */}
                    <div className="relative z-20 px-4 sm:px-6 text-center text-white max-w-3xl w-full">
                        <Badge variant="secondary" className="mb-3 sm:mb-4 text-sm sm:text-base">
                            Berita & Artikel
                        </Badge>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                            Informasi Terkini Seputar Hunian & Tapera
                        </h1>

                        <p className="text-sm sm:text-lg md:text-xl mx-auto px-2 sm:px-0">
                            Temukan berita, edukasi, dan artikel menarik seputar perumahan, kebijakan Tapera,
                            serta tips kepemilikan hunian yang layak dan terjangkau.
                        </p>
                    </div>
                </section>

                {/* Search and Filter Section */}
                <section className="w-full py-8 bg-muted/30">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col sm:flex-row gap-4 flex-1">
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-full sm:w-[200px]">
                                        <Filter className="h-4 w-4 mr-2" />
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-full sm:w-[150px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest First</SelectItem>
                                    <SelectItem value="oldest">Oldest First</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <section className="w-full py-12 md:py-16">
                        <div className="px-4 md:px-6">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold">Featured Articles</h2>
                                <Badge variant="outline">
                                    <TrendingUp className="h-4 w-4 mr-1" />
                                    Trending
                                </Badge>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2">
                                {featuredPosts.map((post) => (
                                    <Card key={post.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.thumbnail !== "" ? post.thumbnail : "/foto_thumbnail.png"}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="secondary">{post.category}</Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                                                <div className="flex items-center space-x-1">
                                                    <User className="h-4 w-4" />
                                                    <span>{post.title}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{formatDate(post.created)}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    {/* <Clock className="h-4 w-4" />
                                                    <span>{post.readTime}</span> */}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 line-clamp-3">{post.content}</p>
                                            <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                                                Read Full Article
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* All Blog Posts */}
                <section className="w-full py-12 md:py-16 bg-muted/30">
                    <div className="px-4 md:px-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                            </h2>
                            <div className="text-sm text-muted-foreground">
                                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                            </div>
                        </div>

                        {regularPosts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                                <p className="text-muted-foreground mb-4">Try adjusting your search terms or category filter.</p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSearchTerm("")
                                        setSelectedCategory("All")
                                    }}
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {regularPosts.map((post) => (
                                    <Card key={post.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                                        <div className="relative h-40 overflow-hidden">
                                            <Image
                                                src={post.thumbnail !== "" ? post.thumbnail : "/foto_thumbnail.png"}
                                                alt={post.thumbnail}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <Badge variant="secondary" className="text-xs">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                                                <div className="flex items-center space-x-1">
                                                    <User className="h-3 w-3" />
                                                    <span>{post.title}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{formatDate(post.created)}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.content}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                                    {/* <Clock className="h-3 w-3" />
                                                    <span>{post.readTime}</span> */}
                                                </div>
                                                <Button variant="link" size="sm" className="p-0 h-auto text-primary hover:cursor-pointer">
                                                    Read More
                                                    <ArrowRight className="ml-1 h-3 w-3" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Categories Overview */}
                {/* <section className="w-full py-12 md:py-16">
                    <div className="px-4 md:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore by Category</h2>
                            <p className="text-lg text-muted-foreground">
                                Find articles that match your specific interests and needs
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { name: "Market Analysis", icon: TrendingUp, count: 3, color: "bg-blue-500" },
                                { name: "Buying Tips", icon: Home, count: 2, color: "bg-green-500" },
                                { name: "Selling Tips", icon: DollarSign, count: 2, color: "bg-orange-500" },
                                { name: "Investment", icon: Building, count: 1, color: "bg-purple-500" },
                                { name: "Property Management", icon: Key, count: 1, color: "bg-red-500" },
                                { name: "Local Market", icon: MapPin, count: 1, color: "bg-teal-500" },
                            ].map((category) => (
                                <Card
                                    key={category.name}
                                    className="group hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    <CardContent className="p-4 text-center">
                                        <div
                                            className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                                        >
                                            <category.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold mb-1">{category.name}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {category.count} article{category.count !== 1 ? "s" : ""}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* Newsletter Signup */}
                {/* <section className="w-full py-12 md:py-16 bg-primary text-primary-foreground">
                    <div className="px-4 md:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                            Subscribe to our newsletter and never miss the latest real estate insights, market updates, and expert
                            tips.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                            />
                            <Button variant="secondary" className="whitespace-nowrap">
                                Subscribe Now
                            </Button>
                        </div>
                    </div>
                </section> */}
            </main>

            <Footer></Footer>
        </div>
    )
}

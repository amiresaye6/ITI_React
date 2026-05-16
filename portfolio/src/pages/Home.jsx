import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Zap } from "lucide-react"

const Home = () => {
    const categories = [
        { name: "Electronics", items: "120+ Items", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" },
        { name: "Apparel", items: "340+ Items", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80" },
        { name: "Accessories", items: "80+ Items", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80" },
    ];

    return (
        <div className="flex flex-col gap-16 md:gap-24 pb-20">
            {/* 1. Hero Section */}
            <section className="relative bg-background pt-16 md:pt-24 lg:pt-32 pb-12">
                <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
                        <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                            <span className="h-px w-8 bg-primary"></span>
                            New Season Arrivals
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl text-balance">
                            Elevate Your Modern Lifestyle
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Discover our curated collection of high-performance products designed to seamlessly balance durability, function, and minimal design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                            <Button asChild size="lg" className="h-12 px-8 gap-2 rounded-full">
                                <Link to="/products">
                                    Shop Collection <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full border-2">
                                <Link to="/categories">Browse Categories</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Premium Hero Graphic Container */}
                    <div className="relative order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-2xl border border-border/50">
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80"
                                alt="Modern storefront"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        {/* Decorative background blur to make it pop */}
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-[3rem]"></div>
                    </div>
                </div>
            </section>

            {/* 2. Categories Section (Cleaned up: No text overlays!) */}
            <section className="mx-auto max-w-7xl w-full px-6 flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Shop by Category</h2>
                        <p className="text-lg text-muted-foreground mt-2">Explore our collections categorized by your specific needs.</p>
                    </div>
                    <Button asChild variant="link" className="gap-1 p-0 h-auto font-semibold text-primary hover:text-primary/80">
                        <Link to="/categories">
                            View all categories <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link to={`/categories/${category.name.toLowerCase()}`} key={category.name} className="group block">
                            <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Clean Text Below Image */}
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                                        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1 font-medium">{category.items}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 3. Value Props / Features Section */}
            <section className="mx-auto max-w-7xl w-full px-6">
                <div className="rounded-3xl bg-muted/50 border border-border p-8 md:p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                        <div className="flex flex-col items-start gap-4">
                            <div className="p-3.5 bg-background shadow-sm border border-border text-primary rounded-xl shrink-0">
                                <Truck className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Free Shipping</h4>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">Complimentary delivery on all orders exceeding $50.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <div className="p-3.5 bg-background shadow-sm border border-border text-primary rounded-xl shrink-0">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Secure Payments</h4>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">Fully encrypted, bank-level data checkout protection.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <div className="p-3.5 bg-background shadow-sm border border-border text-primary rounded-xl shrink-0">
                                <Zap className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Instant Processing</h4>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">Orders dispatched within 24 hours of confirmation.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <div className="p-3.5 bg-background shadow-sm border border-border text-primary rounded-xl shrink-0">
                                <ShoppingBag className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Premium Quality</h4>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">Curated from brands matching high inspection standards.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
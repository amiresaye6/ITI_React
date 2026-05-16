import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { ArrowLeft, LifeBuoy } from "lucide-react"

const NotFound = () => {
    return (
        <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center max-w-md">
                {/* 404 Badge using standard Primary tokens */}
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Error 404
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Page not found
                </h1>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or the URL might be incorrect.
                </p>

                {/* Clean Shadcn Button integrations */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button asChild variant="default" className="w-full sm:w-auto gap-2">
                        <Link to="/">
                            <ArrowLeft className="h-4 w-4" />
                            Go back home
                        </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
                        <Link to="/contact">
                            <LifeBuoy className="h-4 w-4" />
                            Contact support
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default NotFound
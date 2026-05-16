import { Link, NavLink } from "react-router"
import { Button } from "@/components/ui/button"
import { ShoppingBag, User } from "lucide-react"

const Header = () => {
    const linkStyles = ({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"
        }`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

                {/* Brand Logo using Lucide ShoppingBag */}
                <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
                    <ShoppingBag className="h-6 w-6 stroke-[2.5]" />
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        E-Store
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className={linkStyles}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={linkStyles}>
                        All Products
                    </NavLink>
                    <NavLink to="/categories" className={linkStyles}>
                        Categories
                    </NavLink>
                </nav>

                {/* Actions Block using Lucide Icons */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
                        <Link to="/cart">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
                            <span className="sr-only">Cart</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hidden sm:inline-flex">
                        <Link to="/account">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Link>
                    </Button>

                    <Button size="sm" className="ml-2 hidden sm:inline-flex">
                        <Link to="/login">Sign In</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
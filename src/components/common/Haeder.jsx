import { Link, NavLink } from "react-router"
import { Button } from "@/components/ui/button"
import { ShoppingBag, User, Moon, Sun } from "lucide-react"
import { useThemeStore } from "@/store/useThemeStore"
import { useLanguage } from "@/context/LanguageContext"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Header = () => {
    const { theme, toggleTheme } = useThemeStore();
    const { language, toggleLanguage } = useLanguage();
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

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
                        {language === 'en' ? 'Welcome' : 'مرحباً'}
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
                    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-bold">
                        {language === 'en' ? 'AR' : 'EN'}
                    </Button>

                    <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
                        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
                        <Link to="/cart">
                            <ShoppingBag className="h-5 w-5" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                    {cartItems.length}
                                </span>
                            )}
                            <span className="sr-only">Cart ({cartItems.length})</span>
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
import { Link } from "react-router"
import { ShoppingBag } from "lucide-react"
// Importing official brand symbols from your new library setup
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background border-t border-border mt-auto">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-16">
                <div className="md:flex md:justify-between gap-8">

                    {/* Brand Section */}
                    <div className="mb-8 md:mb-0 max-w-sm">
                        <Link to="/" className="flex items-center gap-2 text-primary">
                            <ShoppingBag className="h-6 w-6 stroke-[2.5]" />
                            <span className="self-center text-xl font-bold tracking-tight text-foreground">
                                E-Store
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                            Your premium destination for premium essentials. Crafted for durability, performance, and modern lifestyle demands.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                                Shop Catalog
                            </h2>
                            <ul className="text-sm text-muted-foreground space-y-3">
                                <li>
                                    <Link to="/products" className="hover:text-primary transition-colors">All Products</Link>
                                </li>
                                <li>
                                    <Link to="/products?category=featured" className="hover:text-primary transition-colors">Featured Items</Link>
                                </li>
                                <li>
                                    <Link to="/products?category=new" className="hover:text-primary transition-colors">New Arrivals</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                                Customer Support
                            </h2>
                            <ul className="text-sm text-muted-foreground space-y-3">
                                <li>
                                    <Link to="/faq" className="hover:text-primary transition-colors">FAQ & Help</Link>
                                </li>
                                <li>
                                    <Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                                Legal Details
                            </h2>
                            <ul className="text-sm text-muted-foreground space-y-3">
                                <li>
                                    <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-border" />

                {/* Subfooter section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-xs text-muted-foreground">
                        © {currentYear} <Link to="/" className="hover:underline">E-Store Inc</Link>. All Rights Reserved.
                    </span>

                    {/* Socials Block using SiFacebook and SiInstagram */}
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                            <SiFacebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                            <SiInstagram className="h-4 w-4" />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
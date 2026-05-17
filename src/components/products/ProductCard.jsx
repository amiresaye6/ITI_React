import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"
import { useState } from "react"

const ProductCard = ({ title, category, price, rating, stock, tags, brand, image, description, id }) => {

    const [inCart, setInCart] = useState(false);

    const addToCartHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const items = await JSON.parse(localStorage.getItem("cart")) || [];

        const itemInCart = items.filter(i => i.id === id);
        if (itemInCart.length > 0) {
            items.map(item => {
                if (item.id === id) {
                    item.count += 1;
                }
            })
            console.log("increase count only");

        } else {

            items.push({
                title,
                category,
                price,
                rating,
                stock,
                tags,
                brand,
                image,
                description,
                id,
                count: 1,
            });

            console.log("add new item to cart");
        }

        localStorage.setItem("cart", JSON.stringify(items));
        setInCart(true);


    }

    return (
        <Link to={`/product/${title.slice(0, 30).toLowerCase().split(" ").join("_") || "slug_" + id}/${id}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg max-w-sm pt-0">
                <div className="relative aspect-square overflow-hidden bg-muted top-0">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-2 top-2 flex flex-col gap-1">
                        {brand && <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {brand}
                        </Badge>}
                        {stock < 10 && (
                            <Badge variant="destructive">Only {stock} left!</Badge>
                        )}
                    </div>
                </div>

                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {category}
                        </span>
                        <div className="flex items-center gap-1 text-sm font-medium">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {rating}
                        </div>
                    </div>
                    <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                        {description || "High-quality product designed for durability and performance."}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-wrap gap-1">
                        {tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px]">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold">${price}</span>
                    <Button size="sm" className="gap-2"
                        onClick={(e) => addToCartHandler(e)}
                    //   disabled={inCart}
                    >
                        <ShoppingCart className="h-4 w-4" />
                        {inCart ? "In Cart" : "Add to Cart"}
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard
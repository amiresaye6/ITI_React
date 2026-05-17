import { useLoaderData, useNavigation, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Star,
    Truck,
    ShieldCheck,
    RotateCcw,
    Package,
    ShoppingCart,
    AlertCircle
} from "lucide-react";
import ReviewCard from "@/components/common/ReviewCard";
import Spinner from "@/components/products/spinner/Spinner";


export const ErrorBoundary = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            <AlertCircle className="h-12 w-12 text-destructive mb-4" />
            <h2 className="text-3xl font-bold tracking-tight mb-2">Product Not Found</h2>
            <p className="text-muted-foreground mb-6">
                The item you are looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
                <Link to="/products">Back to All Products</Link>
            </Button>
        </div>
    );
};


export const Component = () => {
    const { product } = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Spinner />;
    }

    const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left Column: Image Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="aspect-square bg-muted rounded-3xl overflow-hidden border border-border flex items-center justify-center p-8">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                        />
                    </div>
                    {product.images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.images.map((img, idx) => (
                                <div key={idx} className="h-24 w-24 shrink-0 rounded-xl border border-border bg-muted overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain p-2" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Column: Product Details */}
                <div className="flex flex-col gap-8">

                    {/* Header Info */}
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary" className="uppercase tracking-wider text-[10px]">
                                {product.brand}
                            </Badge>
                            {product.availabilityStatus === "In Stock" ? (
                                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:bg-green-950/30">
                                    In Stock ({product.stock})
                                </Badge>
                            ) : (
                                <Badge variant="destructive">Out of Stock</Badge>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-2 mt-1">
                            <div className="flex text-yellow-400">
                                {/* Simple Star Rating visualizer */}
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? "fill-current" : "text-muted stroke-muted-foreground"}`} />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">
                                {product.rating} ({product.reviews.length} reviews)
                            </span>
                        </div>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-end gap-4">
                        <span className="text-4xl font-black">${product.price.toFixed(2)}</span>
                        <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground line-through decoration-destructive">
                                ${originalPrice}
                            </span>
                            <span className="text-sm font-bold text-green-600">
                                {product.discountPercentage}% OFF
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {product.description}
                    </p>

                    {/* Action Block */}
                    <div className="flex flex-col gap-4 py-6 border-y border-border">
                        {product.minimumOrderQuantity > 1 && (
                            <p className="text-sm font-medium text-amber-600 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" />
                                Minimum order quantity: {product.minimumOrderQuantity} units
                            </p>
                        )}
                        <Button size="lg" className="w-full sm:w-auto h-14 text-lg gap-2">
                            <ShoppingCart className="h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>

                    {/* Meta Information Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-sm">
                        <div className="flex items-start gap-3">
                            <Truck className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <span className="block font-semibold text-foreground">Shipping</span>
                                <span className="text-muted-foreground">{product.shippingInformation}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <span className="block font-semibold text-foreground">Warranty</span>
                                <span className="text-muted-foreground">{product.warrantyInformation}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <RotateCcw className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <span className="block font-semibold text-foreground">Returns</span>
                                <span className="text-muted-foreground">{product.returnPolicy}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Package className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <span className="block font-semibold text-foreground">Dimensions</span>
                                <span className="text-muted-foreground">
                                    {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-24 pt-12 border-t border-border">
                <h2 className="text-2xl font-bold tracking-tight mb-8">Customer Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.reviews.map((review, idx) => (
                        <ReviewCard idx={idx} review={review} />
                    ))}
                </div>
            </div>

        </div>
    );
};
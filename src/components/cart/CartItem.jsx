import { Minus, Plus, Trash2, Star, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    // Calculate total price for this specific row
    const lineTotal = (item.price * item.count).toFixed(2);

    // Check if the user is trying to add more than available
    const isMaxStock = item.count >= item.stock;

    return (
        <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 bg-card border border-border rounded-2xl shadow-sm transition-all hover:shadow-md">

            {/* 1. Image Thumbnail */}
            <div className="shrink-0 relative h-28 w-28 sm:h-32 sm:w-32 bg-muted rounded-xl border border-border overflow-hidden p-2 flex items-center justify-center">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                />
            </div>

            {/* 2. Main Details */}
            <div className="flex flex-col grow gap-2 justify-between">
                <div>
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            {/* Brand & Category */}
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    {item.brand}
                                </span>
                                <span className="text-muted-foreground text-xs px-1.5 py-0.5 bg-muted rounded-md">
                                    {item.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-lg text-foreground leading-tight line-clamp-1">
                                {item.title}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mt-1.5">
                                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-medium text-muted-foreground">
                                    {item.rating}
                                </span>
                            </div>
                        </div>

                        {/* Mobile Price (Hidden on desktop, shown on mobile) */}
                        <div className="text-right sm:hidden">
                            <p className="font-black text-lg">${lineTotal}</p>
                            <p className="text-xs text-muted-foreground">${item.price.toFixed(2)} ea</p>
                        </div>
                    </div>

                    {/* Description - Truncated to 2 lines so it doesn't break the layout */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2 leading-relaxed max-w-xl">
                        {item.description}
                    </p>
                </div>

                {/* Tags (Optional: only show the first 2 to save space) */}
                {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] font-medium opacity-70 hover:opacity-100">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>

            {/* 3. Actions & Pricing (Desktop alignment) */}
            <div className="flex sm:flex-col items-center justify-between sm:items-end gap-4 shrink-0 sm:min-w-30">

                {/* Desktop Price */}
                <div className="hidden sm:block text-right">
                    <p className="font-black text-xl text-foreground">${lineTotal}</p>
                    <p className="text-xs text-muted-foreground font-medium">${item.price.toFixed(2)} / item</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center border border-border rounded-lg bg-background p-1 shadow-sm">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-md hover:bg-muted"
                            onClick={() => onUpdateQuantity(item.id, item.count - 1)}
                            disabled={item.count <= 1}
                        >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                        </Button>

                        <span className="w-8 text-center text-sm font-semibold tabular-nums">
                            {item.count}
                        </span>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-md hover:bg-muted"
                            onClick={() => onUpdateQuantity(item.id, item.count + 1)}
                            disabled={isMaxStock}
                        >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                        </Button>
                    </div>
                    {/* Stock Warning indicator */}
                    {isMaxStock && (
                        <p className="text-[10px] text-destructive flex items-center gap-1 font-medium">
                            <AlertCircle className="h-3 w-3" /> Max stock reached
                        </p>
                    )}
                </div>

                {/* Remove Button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 -ml-2 sm:ml-0 h-8 px-2 gap-1.5"
                    onClick={() => onRemove(item.id)}
                >
                    <Trash2 className="h-4 w-4" />
                    <span className="text-xs font-semibold">Remove</span>
                </Button>

            </div>
        </div>
    );
};

export default CartItem;
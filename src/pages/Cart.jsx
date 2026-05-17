import CartItem from "@/components/cart/cartItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShoppingCart, ShieldCheck, Tag } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const handleUpdateQuantity = (id, newCount) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, count: newCount } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const { subtotal, shipping, tax, total } = useMemo(() => {
    const sub = cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
    const ship = sub > 50 || sub === 0 ? 0 : 10.00;
    const tx = sub * 0.08;

    return {
      subtotal: sub,
      shipping: ship,
      tax: tx,
      total: sub + ship + tx
    };
  }, [cartItems]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-[75vh]">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-8">
        Your Shopping Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
          </div>

          <div className="w-full lg:w-1/3 sticky top-24">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-6">

              <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping estimate</span>
                  <span className="font-medium text-foreground">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax estimate (8%)</span>
                  <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
                </div>
              </div>

              <hr className="border-border" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-foreground">Total</span>
                <span className="text-2xl font-black text-foreground">${total.toFixed(2)}</span>
              </div>

              <div className="flex gap-2">
                <div className="relative w-full">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Promo code" className="pl-9 h-11" />
                </div>
                <Button variant="outline" className="h-11">Apply</Button>
              </div>

              <Button size="lg" className="w-full h-14 text-lg mt-2 gap-2">
                Proceed to Checkout <ArrowRight className="h-5 w-5" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Secure encrypted checkout
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 py-16 text-center">
          <div className="w-full max-w-md flex flex-col items-center p-8 md:p-12 border-2 border-dashed border-border rounded-3xl bg-muted/10">
            <div className="flex items-center justify-center w-24 h-24 bg-muted rounded-full mb-6 shadow-sm">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
              Looks like you haven't added anything yet. Explore our top categories and find something you love!
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto gap-2 rounded-full h-12 px-8">
              <Link to="/products">
                Start Shopping <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
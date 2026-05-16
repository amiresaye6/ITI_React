export const productDetailsLoader = async ({ params }) => {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);

    if (!res.ok) {
        throw new Error("Product not found");
    }

    const product = await res.json();
    return { product };
}
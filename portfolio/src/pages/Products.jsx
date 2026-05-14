import { Breadcrumbs } from "@/components/products/BreadCrums";
import { PaginationSection } from "@/components/products/PaginationSection";
import ProductCard from "@/components/products/ProductCard";
import ProductError from "@/components/products/ProductError";
import ProductsHeader from "@/components/products/ProductsHeader";
import Spinner from "@/components/products/spinner/Spinner";
import { useEffect, useState } from "react"

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);
    const [isCLoading, setIsCLoading] = useState(false);
    const [cError, setCError] = useState(null);

    const [productsUrl, setProductsUrl] = useState("https://dummyjson.com/products?limit=12&skip=0");


    const searchHandler = async (statment) => {
        try {
            setIsLoading(true);

            const res = await fetch(`https://dummyjson.com/products/search?q=${statment}`);

            if (!res.ok) {
                throw new Error("Failed to fetch Products");
            }
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false);
        }
    }

    // fetch Categories once on load :__:
    useEffect(() => {
        (
            async () => {
                try {
                    setIsCLoading(true);
                    const res = await fetch("https://dummyjson.com/products/categories");

                    if (!res.ok) {
                        throw new Error("Failed to fetch Categories");
                    }
                    const data = await res.json();
                    setCategories(data);
                } catch (err) {
                    console.log(err.message);

                    setCError(err.message)
                } finally {
                    setIsCLoading(false);
                }
            }

        )();
    }, []);

    // fetch producs on load and when the products url changes 
    useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true);
                    const res = await fetch(productsUrl);

                    if (!res.ok) {
                        throw new Error("Failed to fetch Products");
                    }
                    const data = await res.json();
                    setProducts(data.products);
                } catch (err) {
                    setError(err.message)
                } finally {
                    setIsLoading(false);
                }
            }

        )();
    }, [productsUrl])
    console.log(products);


    return (
        <>
            <ProductsHeader searchHandler={searchHandler} catSelectHandler={setProductsUrl} categories={categories} isLoading={isCLoading} error={cError} />
            <Breadcrumbs />
            {error && <ProductError message={error} />}
            {
                isLoading ?
                    <Spinner /> :

                    <>
                        <div className="container mx-auto px-4 py-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                                {products.map(product => {
                                    return <ProductCard
                                        key={product.sku}
                                        title={product.title}
                                        category={product.category}
                                        price={product.price}
                                        rating={product.rating}
                                        stock={product.stock}
                                        tags={product.tags}
                                        brand={product.brand}
                                        description={product.description}
                                        image={product.images[0]}
                                    />
                                }

                                )
                                }
                            </div>
                        </div>
                    </>
            }
            <br />
            <PaginationSection />
        </>
    )
}

export default Products
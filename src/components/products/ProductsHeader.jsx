import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Spinner } from "@/components/ui/spinner"
import { Badge } from "@/components/ui/badge"
import Search from "./Search"


const ProductsHeader = ({ catSelectHandler, categories, isLoading, error, searchHandler }) => {
    return (
        <div className="flex items-center lg:justify-between px-8 py-6 bg-background border-b border-border flex-wrap justify-center gap-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                    Featured Products
                </h1>
                <p className="text-sm text-muted-foreground">
                    Explore our latest arrivals and top-rated items.
                </p>
            </div>

            <div className="w-96">
                <Search searchHandler={searchHandler}/>

            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground hidden sm:block">
                    Filter by:
                </span>
                {
                    error ? (
                        <Badge variant="destructive">{error}</Badge>
                    ) : (
                        <Select onValueChange={catSelectHandler}>
                            {isLoading ?
                                <SelectTrigger className="w-45 bg-card">
                                    <Spinner />
                                </SelectTrigger> :
                                (
                                    <>
                                        <SelectTrigger className="w-45 bg-card">
                                            <SelectValue placeholder="Filter products" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Filter Options</SelectLabel>
                                                {
                                                    categories.map(cat => {
                                                        return <SelectItem
                                                            key={cat.slug}
                                                            value={cat.url}>
                                                            {cat.name}
                                                        </SelectItem>
                                                    }
                                                    )
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </>
                                )}
                        </Select>
                    )
                }
            </div>
        </div>
    )
}

export default ProductsHeader
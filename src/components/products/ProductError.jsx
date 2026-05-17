import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const ProductError = ({ message }) => {
    return (
        <div className="w-full max-w-2xl h-screen mx-auto my-12 px-4">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Unable to Load Products</AlertTitle>
                <AlertDescription>
                    {message || "An error occurred while fetching the product list. Please try again later."}
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default ProductError
import { Star } from "lucide-react"

const ReviewCard = ({idx, review}) => {
    return (
        <div key={idx} className="p-6 rounded-2xl bg-muted/50 border border-border flex flex-col gap-3">
            <div className="flex justify-between items-start">
                <span className="font-semibold">{review.reviewerName}</span>
                <span className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                </span>
            </div>
            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-muted stroke-muted-foreground"}`} />
                ))}
            </div>
            <p className="text-sm text-muted-foreground">"{review.comment}"</p>
        </div>
    )
}

export default ReviewCard
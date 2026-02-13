import { Star } from "lucide-react";
import clsx from "clsx";

interface StarsRatingProps {
    value: number; // 0 a 5
    size?: number;
}

export function StarsRating({ value, size = 14 }: StarsRatingProps) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < value;

                return (
                    <Star
                        key={i}
                        size={size}
                        className={clsx(
                            "transition-colors",
                            filled
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-white/40"
                        )}
                    />
                );
            })}
        </div>
    );
}

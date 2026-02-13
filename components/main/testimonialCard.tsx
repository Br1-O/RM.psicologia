import { StarsRating } from "@/components/StarsRating";

interface TestimonialCardProps {
    name: string;
    punctuation: number;
    opinion: string;
    href: string;
    date?: string;
}

const TestimonialCard =
    ({
           name,
           punctuation,
           opinion,
           href,
           date = "24/10/25"
       }: TestimonialCardProps)=>  {
    return (
        <div className="flex justify-center x-full h-full flex-col pl-8 pr-4 py-5 text-white">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold leading-none">
                        {name}
                      </span>

                      <StarsRating value={punctuation} />
                </div>

                <span className="text-[11px] text-white/70">
                    {date}
                </span>
            </div>

            {/* Opinion */}
            <p className="mt-4 text-md leading-relaxed text-white/90 line-clamp-5">
                {opinion}
            </p>

            {/* Footer */}
            <div className="mt-auto pt-3 self-end">
                <a
                    href={href}
                    className="text-xs underline underline-offset-2 text-white/80 hover:text-white transition"
                >
                    Ver original
                </a>
            </div>
        </div>
    );
}

export default TestimonialCard;
import { Link } from "react-router";

interface ServiceCardProps {
    title: string;
    excerpt: string;
    image: string;
    to: string;
    className?: string;
}

export default function ServiceCard({ title, excerpt, image, to, className = "" }: ServiceCardProps) {
    // Provide a slightly longer fallback if a very short excerpt is passed
    const displayedExcerpt = excerpt && excerpt.length < 80 ? `${excerpt} We bieden maatwerk, ervaren personeel en heldere rapportage.` : excerpt;

    return (
        <article className={`group rounded-lg overflow-hidden shadow-md h-full flex flex-col bg-white transition-shadow duration-300 group-hover:shadow-lg ${className}`} style={{ borderColor: '#ACACAC' }}>
            {/* Image header - fixed height so cards remain compact */}
            <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden bg-transparent">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content area - text and actions */}
            <div className="p-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#395A7F' }}>{title}</h3>
                    <p className="text-sm sm:text-base leading-relaxed clamp-3" style={{ color: '#1f2937' }}>{displayedExcerpt}</p>
                </div>

                <div className="mt-4">
                    <Link
                        to={to}
                        className="inline-block text-white px-4 py-2 rounded-md font-medium transition-colors"
                        style={{ backgroundColor: '#395A7F' }}
                        onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#6E9FC1'}
                        onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#395A7F'}
                    >
                        Lees meer
                    </Link>
                </div>
            </div>
        </article>
    );
}

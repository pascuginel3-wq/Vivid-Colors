import {getEventTypeEvents} from '../utils/photoLoader';
import {galleryDataById} from "../components/GallerySection.tsx";
import {Link} from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel.tsx";

interface Props {
    type: string;
}

const PortfolioEventTypePage: React.FC<Props> = ({ type }) => {
    const events = getEventTypeEvents(type);
    const gallery = galleryDataById[type];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {gallery.title}
            </h2>
            {events.map((event, i) => (
                <div className="py-10" key={i}>
                    <Link to={`/portofoliu/${type}/${event.event}`} key={`${type}/${event}`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            {event.event.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                        </h2>
                    </Link>
                    <ImageCarousel images={event.images.slice(0, 6)} gradient={gallery.gradient} />
                </div>
            ))}
        </div>
    );
};

export default PortfolioEventTypePage;

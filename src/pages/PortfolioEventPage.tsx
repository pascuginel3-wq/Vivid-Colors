import { getEventImages } from '../utils/photoLoader';
import {galleryDataById} from "../components/GallerySection.tsx";
import {Link} from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel.tsx";

interface Props {
    type: string;
    event: string;
}

const PortfolioEventPage: React.FC<Props> = ({ type, event }) => {
    const images = getEventImages(type, event);
    const gallery = galleryDataById[type];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2">
                <Link to={`/portofoliu/${type}`} key={`${type}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        {gallery.title}
                    </h2>
                </Link>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    &gt;
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    {event.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                </h2>
            </div>
            <div  className="py-10">
                <ImageCarousel images={images} gradient={gallery.gradient} />
            </div>
        </div>
    );
};

export default PortfolioEventPage;

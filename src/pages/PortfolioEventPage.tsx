import { getEventImages } from '../utils/photoLoader';
import {galleryDataById} from "../components/GallerySection.tsx";
import {Link} from "react-router-dom";

interface Props {
    type: string;
    event: string;
}

const PortfolioEventPage: React.FC<Props> = ({ type, event }) => {
    const images = getEventImages(type, event);
    const gallery = galleryDataById[type];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/portfolio/${type}`} key={`${type}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    {gallery.title}
                </h2>
            </Link>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {event.replace(/_/g, ' ')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        <img
                            src={image}
                            alt={`${event} ${index + 1}`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${gallery.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-lg font-semibold">Fotografie #{index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioEventPage;

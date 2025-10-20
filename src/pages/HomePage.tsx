import { Link } from 'react-router-dom';
import {getEventTypeImages, PhotoEntry} from '../utils/photoLoader';
import Hero from "../components/Hero.tsx";
import Story from "../components/Story.tsx";
import GallerySection, {galleryData} from "../components/GallerySection.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";

interface Props {
    entries: PhotoEntry[];
}

const HomePage: React.FC<Props> = ({ entries }) => {
    return (
        <div>
            <Hero />
            <Story />
            {galleryData
                .filter((gallery) => getEventTypeImages(gallery.id).length)
                .map((gallery) => (
                    <GallerySection key={gallery.id} {...gallery} />
                ))}
            <div className="grid">
                {entries.map(({ type, event }) => (
                    <Link
                        to={`/portfolio/${type}/${event}`}
                        key={`${type}/${event}`}
                        className="folder-card"
                    >
                        <h3>{event.replace(/_/g, ' ')}</h3>
                        <p>Type: {type}</p>
                    </Link>
                ))}
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;

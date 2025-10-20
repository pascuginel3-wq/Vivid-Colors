import {getEventTypeImages} from '../utils/photoLoader';
import Hero from "../components/Hero.tsx";
import Story from "../components/Story.tsx";
import GallerySection, {galleryData} from "../components/GallerySection.tsx";

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <Story />
            {galleryData
                .filter((gallery) => getEventTypeImages(gallery.id).length)
                .map((gallery) => (
                    <GallerySection key={gallery.id} {...gallery} />
                ))}
        </div>
    );
};

export default HomePage;

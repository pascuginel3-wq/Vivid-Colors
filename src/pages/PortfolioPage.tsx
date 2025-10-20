import { getEventImages } from '../utils/photoLoader';

interface Props {
    type: string;
    event: string;
}

const PortfolioPage: React.FC<Props> = ({ type, event }) => {
    const images = getEventImages(type, event);

    return (
        <div>
            <h2>{event.replace(/-/g, ' ')} ({type})</h2>
            <div className="image-grid">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`${event}-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;

import {useEffect, useState} from "react";

interface ImageCarouselProps {
  images: string[];
  gradient: string;
}

export default function ImageCarousel({ images, gradient }: ImageCarouselProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const showModal = selectedImageIndex !== null;

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
        prev !== null ? (prev + 1) % images.length : null
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
        prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Optional: keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showModal) return;
      if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
                src={image}
                alt={`${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div
                className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-lg font-semibold">Fotografie #{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedImageIndex !== null && (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
        >
          <div
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
            >
              &times;
            </button>

            <button
                className="absolute left-4 text-white text-4xl px-2"
                onClick={prevImage}
            >
              ❮
            </button>

            <img
                src={images[selectedImageIndex]}
                alt={`Preview ${selectedImageIndex}`}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />

            <button
                className="absolute right-4 text-white text-4xl px-2"
                onClick={nextImage}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from 'react';

const Carousel = ({ projectData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {projectData.map((item: any, index: any) => (
                    <div key={item.id} className={`duration-700 ease-in-out ${index === currentImageIndex ? 'block' : 'hidden'}`} data-carousel-item>
                        <img src={item.url} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {projectData.map((_: any, index: any) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === currentImageIndex}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevImage}>
                {/* Your Previous button content */}
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextImage}>
                {/* Your Next button content */}
            </button>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center text-white">
                {projectData[currentImageIndex].text}
            </div>
        </div>
    );
};

export default Carousel;

import { useState } from "react";
import allTrips from "../assets/crosbySnacks/all-trips.png";
import home from "../assets/crosbySnacks/home.png";
import votes from "../assets/crosbySnacks/votes.png";

const images = [home, allTrips, votes];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-8 w-full overflow-hidden rounded-2xl border border-gray-200 p-4">
      <div className="relative">
        <img
          src={images[activeIndex]}
          alt={`Crosby Snacks screenshot ${activeIndex + 1}`}
          className="h-90 w-full rounded-xl object-contain"
        />

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-sm text-white"
        >
          ←
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-sm text-white"
        >
          →
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-gray-900" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

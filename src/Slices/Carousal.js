import { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";

const Carousal = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((currentImage) =>
      currentImage === 0 ? slides.length - 1 : currentImage - 1
    );
  };

  const next = () => {
    setCurrent((currentImage) =>
      currentImage === slides.length - 1 ? 0 : currentImage + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="overflow-hidden relative">
        {/* Photo */}
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides}
        </div>

        {/* Left & Right Side Button */}
        <div className=" absolute inset-0 px-4 flex justify-between items-center">
          <button
            onClick={previous}
            className="text-gray-300 p-2 rounded-full shadow bg-white/75 hover:bg-white"
          >
            <BiSolidLeftArrow size={25} className="hover:text-gray-600" />
          </button>
          <button
            onClick={next}
            className="text-gray-300 p-2 rounded-full shadow bg-white/75 hover:bg-white"
          >
            <BiSolidRightArrow size={25} className="hover:text-gray-600" />
          </button>
        </div>
        {/* Dot show */}
        <div className=" absolute bottom-2 left-0 right-0">
          <div className="flex justify-center gap-5">
            {slides.map((s, i) => (
              <BsCircleFill
                size={10}
                className={`transition-all ${
                  current === i ? "text-pink-600":"bg-opacity-60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;

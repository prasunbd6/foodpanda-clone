import { slides } from "./Slidesdb";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Allrestaurantdemo = () => {

    // Previous
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="text-white bg-pink-600 rounded-full transition ease-in-out duration-300
        flex justify-center items-center
        w-7 h-7
        absolute top-48 -left-4
        md:top-16 md:-left-5
        hover:ring-2 hover:ring-pink-600"
                onClick={onClick}
            >
                <IoIosArrowRoundBack size={20} />
            </div>
        );
    }

    // Next
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="text-white bg-pink-600 rounded-full transition ease-in-out duration-300
      flex justify-center items-center
      w-7 h-7
      absolute top-48 -right-4
      md:top-16 md:-right-5
      hover:ring-2 hover:ring-pink-600"
                onClick={onClick}
            >
                <IoIosArrowRoundForward size={20} />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };



    return (
        <>
            <div className="pt-5 mx-auto w-[500px] md:w-[401px] lg:w-[600px] xl:w-[800px] 2xl:w-[1040px] 3xl:w-[11px] h-auto">
                <div>
                    <Slider {...settings}>
                        {slides.map((i) => {
                            return (
                                <>
                                    <div className="flex flex-col justify-center items-center relative">
                                        <div key={i.id} className="w-[450px] h-auto mx-auto md:w-[180px]  rounded-xl group overflow-hidden">
                                            <img src={i.photo_url} className="w-full h-full bg-cover hover:scale-110 transition  duration-300 ease-in text-center" alt="" />
                                        </div>
                                        <p className="text-center">{i.restaurant_name}</p>
                                    </div>
                                </>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Allrestaurantdemo;
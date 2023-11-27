import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { PiStar } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";

const Ghorerkhabar = () => {

    const imgAddress = [
        {
            id: 1,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 2,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 3,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 4,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 5,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 6,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 7,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 8,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 9,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 10,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 12,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 13,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 11,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 22,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },

        {
            id: 23,
            photo:
                "https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
    ];

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

    // Previous
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="text-white bg-pink-600 rounded-full transition ease-in-out duration-300
        flex justify-center items-center
        w-5 h-5
        absolute top-40 -left-3
        md:top-10 md:-left-4
        hover:ring-2 hover:ring-pink-600 "
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
      w-5 h-5
      absolute top-40 -right-3
      md:top-10 md:-right-4
      hover:ring-2 hover:ring-pink-600"
                onClick={onClick}
            >
                <IoIosArrowRoundForward size={20} />
            </div>
        );
    }


    return (
        <>
            <p className="text-2xl font-bold py-5">Ghorer khabar</p>
            <div className="mx-auto w-[490px] md:w-[401px] lg:w-[600px] xl:w-[800px] 2xl:w-[1040px] 3xl:w-[11px] h-auto">
            <div>
              
                    <Slider {...settings}>
                        {imgAddress.map((data) => {
                            return (
                                <>
                                    <div
                                        className="w-[450px] h-auto mx-auto md:w-[180px]  rounded-xl group relative"
                                        key={data.id}
                                    >
                                        <div className=" overflow-hidden">
                                            <img
                                                src={data.photo}
                                                className="bg-cover w-full h-full duration-700  group-hover:scale-110"
                                                alt=""
                                            />
                                        </div>

                                        <div className="flex flex-col py-3">
                                            <div className="flex justify-between items-center">
                                                <p className="md:text-sm font-bold">Res Name</p>
                                                <div className="flex justify-between items-center gap-1">
                                                    <i className="text-pink-600">
                                                        <PiStar size={13} />
                                                    </i>
                                                    <p className="md:text-xs">2.1</p>
                                                    <p className="md:text-xs">(2000+)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="flex items-center">
                                                    <TbCurrencyTaka size={20} />
                                                </i>
                                                <p className="md:text-xs">Category</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="text-slate-400 px-2">
                                                    <GoClock size={11} />
                                                </i>
                                                <p className="text-slate-400 md:text-sm">45 min</p>
                                                <i className="text-pink-400 md:text-sm">
                                                    <MdOutlineDeliveryDining size={20} />
                                                </i>
                                                <p className="text-pink-400 md:text-sm">delivery</p>
                                            </div>
                                        </div>

                                        <div className="w-56 h-36 absolute top-3 left-3 flex flex-col gap-1 text-white">
                                            <span className="w-32 flex items-center gap-1 px-1 rounded-lg bg-gradient-to-r from-pink-500 to-pink-700 md:w-[100px]">
                                                <i>
                                                    <LuBadgePercent size={15} />
                                                </i>
                                                <p className="text-xs">Free Delivery</p>
                                            </span>

                                            <span className="w-44 flex items-center gap-1 px-1 rounded-lg bg-gradient-to-r from-pink-500 to-pink-700 md:w-[125px]">
                                                <i>
                                                    <LuBadgePercent size={15} />
                                                </i>
                                                <p className="text-xs">Voucher </p>
                                            </span>


                                        </div>

                                        <div className=" absolute w-10 h-10 md:w-7 md:h-8 bg-white drop-shadow-xl top-[0px] right-[0px]">
                                            <p className="md:text-xs text-center">40 MIN</p>
                                        </div>

                                        <div className="absolute w-6 h-6 rounded-full flex justify-center items-center drop-shadow-lg bg-white text-pink-700 bottom-[106px] left-[420px]">
                                            <FaRegHeart />
                                        </div>



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

export default Ghorerkhabar;
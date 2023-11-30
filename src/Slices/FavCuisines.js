import Slider from "react-slick";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const FavCuisines = () => {

  const icecream = [
    {
      id: 1,
      link: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "cone",
    },
    {
      id: 2,
      link: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "colorful cone",
    },
    {
      id: 3,
      link: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "variety",
    },

    {
      id: 4,
      link: "https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "shop",
    },

    {
      id: 11,
      link: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "cone",
    },
    {
      id: 12,
      link: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "colorful cone",
    },
    {
      id: 13,
      link: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "variety",
    },

    {
      id: 14,
      link: "https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type: "shop",
    }

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
        w-7 h-7
        absolute top-36 -left-3
        md:top-16 md:-left-4
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
      w-7 h-7
      absolute top-36 -right-3
      md:top-16 md:-right-4
      hover:ring-2 hover:ring-pink-600"
        onClick={onClick}
      >
        <IoIosArrowRoundForward size={20} />
      </div>
    );
  }

  return (
    <>

      <div className="pt-5 ">
        <p className="w-96 text-xl font-bold py-1">Your favourite Cuisines</p>

        <div className="mx-auto w-[490px] md:w-[401px] lg:w-[600px] xl:w-[800px] 2xl:w-[1040px] 3xl:w-[11px] h-auto">
          <div>
            <Slider {...settings}>
              {icecream.map((i) => {
                return (
                  <>
                    <div className="flex flex-col justify-center items-center relative">
                      <div key={i.id} className="w-[450px] h-auto mx-auto md:w-[180px]  rounded-xl group overflow-hidden">
                        <img src={i.link} className="w-full h-full bg-cover hover:scale-110 transition  duration-300 ease-in text-center" alt="" />
                      </div>
                      <p className="text-center">{i.type}</p>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>

      </div>



    </>
  );
};

export default FavCuisines;

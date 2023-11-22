import Slider from "react-slick";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const FavCuisines = () => {
  // Previous
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="text-white bg-pink-600 rounded-full transition ease-in-out duration-300
        flex justify-center items-center
        w-5 h-5
        absolute top-32 -left-8
        md:top-10 
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
      absolute top-32 -right-8
      md:top-10 
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const icecream = [
    {
      id: 1,
      link: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type:"cone",
    },
    {
      id: 2,
      link: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type:"colorful cone",
    },
    {
      id:3,
      link:"https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type:"variety",
    },

    {
      id:4,
      link:"https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1600",
      type:"shop",
    }

  ];

  return (
    <>
      <p className="text-xl font-bold py-5">Your favourite Cuisines</p>
      <div>
        <Slider {...settings}>
          {icecream.map((i) => {
            return (
              <>
                <div className="flex flex-wrap flex-col justify-center items-center">
                  <div  key={i.id} className="w-44 rounded-3xl overflow-hidden">
                    <img
                      src={i.link}
                      className="w-full h-full bg-cover hover:scale-110 transition  duration-500 ease-in text-center"
                      alt=""
                    />
                  </div>
                  <p className="text-center">{i.type}</p>
                  </div>
              </>
            );
          })}
          </Slider>
      </div>
    </>
  );
};

export default FavCuisines;

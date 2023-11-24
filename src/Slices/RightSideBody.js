import { slides } from "./Slidesdb";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import Allrestaurant from "./Allrestaurant";
import FavCuisines from "./FavCuisines";


const RightSideBody = ({ RiEqualizerLine, content, AiOutlineSearch }) => {

  // Previous
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="text-white bg-pink-600 rounded-full transition ease-in-out duration-300
        flex justify-center items-center
        w-5 h-5
        absolute top-28 -left-4
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
      absolute top-28 -right-4
      md:top-10 md:-right-4
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

        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
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
    ],
  };

  return (
    <>
      <div className=" md:w-[440px] lg:w-[680px] xl:w-[900px]  2xl:w-[1160px] h-auto flex flex-col justify-start items-center gap-4">
        {/************************************************* Working Area - START *****************************************************/}

        <div className="w-11/12 h-auto flex justify-center items-center mt-5 md:justify-start">
          {/************** Search Content (SM Device) - END ********************/}
          <div className="w-4/5 flex justify-center items-center gap-4 md:justify-between">
            <form>
              <label className="flex justify-start items-center relative group">
                <AiOutlineSearch
                  size={23}
                  className="text-slate-400 absolute left-2 group-hover:text-pink-500 "
                />
                <input
                  type="text"
                  name="search"
                  autoComplete="off"
                  placeholder="Search for Cuisine"
                  className="w-[400px] md:w-[280px] h-10 md:h-12 bg-slate-50 px-10 border rounded-3xl md:rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-400 md:focus:ring-2 md:focus:ring-sky-100"
                />
              </label>
            </form>

            <div className=" flex justify-center items-center border rounded-full py-1 px-2 gap-2 focus:outline-none ring-2 ring-slate-200 hover:ring-slate-300">
              <span>
                <RiEqualizerLine size={18} />
              </span>
              <p className="font-bold text-lg">Filters</p>
            </div>
          </div>
          {/************** Search Content (SM Device) - END ******************/}
        </div>

        <div className="w-11/12 h-auto flex justify-center items-center mt-5">
          {/*Slider*/}
          <div className="pt-5 mx-auto w-[500px] md:w-[401px] lg:w-[600px] xl:w-[800px] 2xl:w-[1040px] 3xl:w-[11px] h-auto relative">
  
        <Slider {...settings}>
          {slides.map((i) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center">
                  <div  key={i.id} className="w-[350px] md:w-[130px] lg:w-[142px] rounded-lg overflow-hidden">
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

        <div className="w-11/12 h-auto mt-5">
          <FavCuisines />
        </div>

        <div className="w-11/12 h-auto mt-5">

          <Allrestaurant />

        </div>



        <div className="w-full md:w-[399px] lg:w-[650px] xl:w-[915px] 2xl:w-[1148px]  h-auto flex flex-col flex-wrap justify-start gap-10 md:px-4">
          {content.map((con) => {
            return (
              <>
                <div className="w-auto gap-4 md:lg:xl:px-6">
                  <h1
                    className=" font-bold text-xl md:text-xl lg:xl:text-2xl"
                    key={con.id}
                  >
                    {con.heading}
                  </h1>
                  <p className="text-slate-600 text-lg md:text-lg lg:xl:text-xl">
                    {con.details}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        {/************************************************* Working Area - END *****************************************************/}
      </div>
    </>
  );
};

export default RightSideBody;

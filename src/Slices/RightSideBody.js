import { slides } from "./Slidesdb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RightSideBody = ({ RiEqualizerLine, content, AiOutlineSearch }) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "pink",
          
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      
      
    ],
  };

  return (
    <>
      <div className=" md:w-[460px] lg:w-[680px] xl:w-[900px]  2xl:w-[1160px] h-auto flex flex-col justify-start items-center gap-4">
        {/************************************************* Working Area - START *****************************************************/}

        <div className="w-11/12 h-auto flex justify-between md:justify-start items-center gap-4 lg:gap-5 py-2 px-1 mt-5">
          {/************** Search Content (SM Device) - END ********************/}
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
                className="w-[280px] md:w-[380px] h-10 md:h-12 bg-slate-50 px-10 border rounded-3xl md:rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-400 md:focus:ring-2 md:focus:ring-sky-100"
              />
            </label>
          </form>

          <div className=" flex justify-center items-center border rounded-full py-1 px-2 gap-2 focus:outline-none ring-2 ring-slate-200 hover:ring-slate-300">
            <span>
              <RiEqualizerLine size={18} />
            </span>
            <p className="font-bold text-lg">Filters</p>
          </div>
          {/************** Search Content (SM Device) - END ******************/}
        </div>

        {/*Slider*/}
        <div className="w-[500px] md:w-[410px] lg:w-[600px] xl:w-[800px] 2xl:w-[900px] h-auto">
          <Slider {...settings}>
            {slides.map((d) => {
              return (
                <>
                  <div className="w-full md:w-48 flex flex-col px-5">
                    <img src={d.photo_url} alt="" className="object-cover" />
                    <p className="text-center">{d.restaurant_name}</p>
                    <bottom></bottom>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>

        <div className="w-full md:w-[475px] lg:w-[650px] xl:w-[915px] 2xl:w-[1148px]  h-auto flex flex-col flex-wrap justify-start gap-10 md:px-4">
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

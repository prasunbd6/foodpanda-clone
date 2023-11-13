import React from "react";
import Carousal from "./Carousal";

const RightSideBody = ({ RiEqualizerLine, content, AiOutlineSearch }) => {
  const slides = [
    "https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1426715/pexels-photo-1426715.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];



  return (
    <>
      <div className=" md:w-[460px] lg:w-[680px] xl:w-auto h-auto flex flex-col justify-start items-center gap-4">
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
                className="w-[360px] md:w-[380px] h-10 md:h-12 bg-slate-50 px-10 border rounded-3xl md:rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-400 md:focus:ring-2 md:focus:ring-sky-100"
              />
            </label>
          </form>

          <div className=" flex justify-center items-center border rounded-full py-2 px-4 gap-2 focus:outline-none ring-2 ring-slate-200 hover:ring-slate-300">
            <span>
              <RiEqualizerLine size={18} />
            </span>
            <p className="font-bold text-lg">Filters</p>
          </div>
          {/************** Search Content (SM Device) - END ******************/}
        </div>

        <div className="w-full h-auto flex justify-center items-center">
          <div className="max-w-lg">
          <Carousal autoSlide={true}>
              {slides.map((s) => (
                <img src={s} alt="" />
              ))}
            </Carousal>
          </div>
            
          
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

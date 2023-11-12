import React from "react";

const RightSideBody = ({ RiEqualizerLine, content, AiOutlineSearch }) => {
  return (
    <>
      {/************************************************* Search Content (SM Device) - START *****************************************************/}

      <div className=" md:w-[460px] lg:w-[680px] xl:w-auto 2xl:w-auto h-auto flex flex-col justify-start items-center gap-4">
        {/************************************************** Search Content (SM Device) - END ***************************************************/}

        <div className="w-11/12 h-auto flex md:flex-col justify-between items-center gap-4 py-2 px-1 md:hidden mt-5">
          <form>
            <label className="flex justify-start items-center relative group md:hidden">
              <AiOutlineSearch
                size={23}
                className="text-slate-400 absolute left-2 group-hover:text-pink-500 "
              />
              <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="Search for Cuisine"
                className="w-[300px] h-10 bg-slate-50 px-10 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </label>
          </form>

          <div className="md:hidden flex justify-center items-center border rounded-full py-2 px-4 gap-2 focus:outline-none ring-2 ring-slate-200 hover:ring-slate-300 md:cursor-pointer">
            <span>
              <RiEqualizerLine size={18} />
            </span>
            <p className="font-bold text-lg">Filters</p>
          </div>
        </div>
        {/************************************************** Search Content (SM Device) - END ***************************************************/}

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





      </div>

     
    </>
  );
};

export default RightSideBody;

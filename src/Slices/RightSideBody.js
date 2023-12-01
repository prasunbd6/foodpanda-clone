
import Allrestaurant from "./Allrestaurant";
import FavCuisines from "./FavCuisines";
import Ghorerkhabar from "./Ghorerkhabar";
import Allrestaurantdemo from "./Allrestaurantdemo";
import KacchiOnFire from "./KacchiOnFire";

const RightSideBody = ({ RiEqualizerLine, content, AiOutlineSearch }) => {

  return (
    <>
      <div className=" md:w-[440px] lg:w-[680px] xl:w-[900px]  2xl:w-[1160px] h-auto flex flex-col justify-start items-center gap-4">
        {/************************************************* Working Area - START *****************************************************/}

        {/* Search Bar */}
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
                  className="w-[400px] md:w-[280px] lg:w-[380px] xl:w-[430px] h-10 md:h-12 bg-slate-50 px-10 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-pink-400 md:focus:ring-2 md:focus:ring-sky-100"
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

        {/* All Restaurant Demo */}
        <div className="w-11/12 h-auto flex justify-center items-center mt-5">
          <Allrestaurantdemo />
        </div>

        {/* Favourate Cuisines */}
        <div className="w-11/12 h-auto mt-5">
          <FavCuisines />
        </div>

        {/* Ghorer Khabar */}
        <div className="w-11/12 h-auto mt-5">
          <Ghorerkhabar />
        </div>

        {/* Kacchi on Fire */}
        <div className="w-11/12 h-auto mt-5">
          <KacchiOnFire />
        </div>

        {/* All Restaurant */}
        <div className="w-11/12 h-auto mt-5">
          <Allrestaurant />
        </div>

        {/* Details */}
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

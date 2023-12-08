import { PiStar } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";
import Slides from "../Slices/Slidesdb"

const Allrestaurant = () => {
  
  

  return (
    <>
    <p className="text-2xl font-bold py-5">All Restaurants</p>

      <div className="flex flex-wrap justify-center items-center md:mx-auto gap-5">


        {Slides.map((data) => {
          return (
            <>
              <div className="w-[500px] h-auto md:w-[180px]  rounded-xl group relative" key={data.id} >

              <div className="rounded-t-xl overflow-hidden md:w-[178px] md:h-[100px]">
                      <img
                        src={data.photo_url}
                        className="bg-cover w-full h-full duration-700  group-hover:scale-110"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col py-3">
                      <div className="flex justify-between items-center">
                        <p className="md:text-[13px] font-bold px-1">{data.restaurant_name}</p>
                        <div className="flex justify-between items-center gap-1 px-1">
                          <i className="text-pink-600">
                            <PiStar size={13} />
                          </i>
                          <p className="md:text-xs">{data.ratings}</p>
                          <p className="md:text-xs">({data.subscriber}+)</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <i className="flex items-center">
                          <TbCurrencyTaka size={20} />
                        </i>
                        <p className="md:text-xs">{data.food_type}</p>
                      </div>

                      <div className="flex justify-start items-center gap-2 md:justify-between md:gap-0">
                        <div className="flex justify-start items-center px-1">
                          <i className="text-slate-400 px-1">
                            <GoClock size={11} />
                          </i>
                          <p className="text-slate-400 md:text-sm">{data.duration} min</p>
                        </div>
                        <div className="flex justify-start items-center px-1 gap-1">
                          <i className="text-pink-400 md:text-sm">
                            <MdOutlineDeliveryDining size={20} />
                          </i>
                          <p className="text-pink-400 md:text-sm">{data.service_charge}</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-56 h-36 md:w-40 md:h-20 absolute top-3 left-3 md:left-1 flex flex-col gap-1 text-white">
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

                    <div className=" absolute w-11 h-11 md:w-7 md:h-8 bg-white drop-shadow-xl top-[0px] right-[0px]">
                      <p className="md:text-xs text-center">{data.duration} MIN</p>
                    </div>

                    

              </div>
            </>
          );
        })}


      </div>
    </>
  );
};

export default Allrestaurant;
import { PiStar } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LuBadgePercent } from "react-icons/lu";

const Allrestaurant = () => {
  
  const imgAddress = [
    {
      id: 1,
      photo:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 2,
      photo:
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 3,
      photo:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"   
      },

    {
      id: 4,
      photo:
        "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 5,
      photo:
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 6,
      photo:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 7,
      photo:
        "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 8,
      photo:
        "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 9,
      photo:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 10,
      photo:
        "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 12,
      photo:
        "https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 13,
      photo:
        "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 11,
      photo:
        "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 22,
      photo:
        "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 23,
      photo:
        "https://images.pexels.com/photos/693269/pexels-photo-693269.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
    <p className="text-2xl font-bold py-5">All Restaurants</p>

      <div className="flex flex-wrap justify-center items-center md:mx-auto gap-5">


        {imgAddress.map((data) => {
          return (
            <>
              <div className="w-[500px] h-auto md:w-64  rounded-xl group relative" key={data.id} >
                <div className="overflow-hidden">
                  <img src={data.photo} className="bg-cover w-full h-full duration-700  group-hover:scale-110" alt="" />
                </div>

                <div className="flex flex-col py-3">
                  <div className="flex justify-between">
                    <p className="px-2 text-xl font-bold">Res Name</p>
                    <div className="flex justify-between items-center gap-1">
                      <i className="text-pink-600">
                        <PiStar size={13} />
                      </i>
                      <p>2.1</p>
                      <p>(2000+)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="flex items-center">
                      <TbCurrencyTaka size={20} />
                    </i>
                    <p>Category</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="text-slate-400 px-2">
                      <GoClock size={11} />
                    </i>
                    <p className="text-slate-400">45 min</p>
                    <i className="text-pink-400">
                      <MdOutlineDeliveryDining size={20} />
                    </i>
                    <p className="text-pink-400">delivery</p>
                  </div>
                </div>

                <div className="w-56 h-36 absolute top-3 left-3 flex flex-col gap-1 text-white">
                  <span className="w-32 flex items-center gap-1 px-1 rounded-lg bg-gradient-to-r from-pink-500 to-pink-700">
                    <i>
                      <LuBadgePercent size={15} />
                    </i>
                    <p>Free Delivery</p>
                  </span>

                  <span className="w-44 flex items-center gap-1 px-1 rounded-lg bg-gradient-to-r from-pink-500 to-pink-700">
                    <i>
                      <LuBadgePercent size={15} />
                    </i>
                    <p>Voucher </p>
                  </span>
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
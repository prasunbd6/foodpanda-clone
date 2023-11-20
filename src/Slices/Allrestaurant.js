import { PiStar } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Allrestaurant = () => {
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

  return (
    <>
      <div className="flex flex-wrap justify-center items-center md:justify-start md:mx-3 gap-4">
        {imgAddress.map((data) => {
          return (
            <>
              <div className="w-[500px] h-auto md:w-64 border rounded-xl overflow-hidden group" key={data.id}>
                <img src={data.photo} className="bg-cover w-full h-full duration-700  group-hover:scale-110" alt="" />
                <div className="flex flex-col py-3 group-hover:shadow-md">
                  <div className="flex justify-between">
                    <p className="px-2 text-xl font-bold">Res Name</p>
                    <div className="flex justify-between items-center gap-1">
                      <i className="text-pink-600"><PiStar size={13}/></i>
                      <p>2.1</p>
                      <p>(2000+)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="flex items-center"><TbCurrencyTaka size={20}/></i>
                    <p>Category</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="text-slate-400 px-2"><GoClock size={11}/></i>
                    <p className="text-slate-400">45 min</p>
                    <i className="text-pink-400"><MdOutlineDeliveryDining size={20}/></i>
                    <p className="text-pink-400">delivery</p>
                  </div>
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

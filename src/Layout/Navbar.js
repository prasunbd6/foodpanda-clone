import { SiFoodpanda } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GiShoppingCart,GiForkKnifeSpoon } from "react-icons/gi";
import {PiGlobeSimpleBold,PiSuitcaseRollingThin} from "react-icons/pi"
import {MdOutlineKeyboardArrowDown,MdOutlineDeliveryDining,MdOutlineEmojiPeople} from "react-icons/md"



const Navbar = () => {
   
  return (
    <>
      <div className="flex flex-col justify-center items-center">

        <div className="w-full h-auto mt-32 pt-2 flex flex-wrap justify-between items-center bg-white fixed md:w-11/12 md:h-20 md:mt-14">
          {/* User Logo & Brand */}

          <i className="w-2/12 px-1 text-pink-500 text-xl font-bold md:hidden order-1">
            <CiUser size={30} />
          </i>

          {/* Logo & Brand Name */}
          <div className="md:w-auto flex items-center  text-pink-500 gap-2 md:order-2 order-2">
            <i className="p-1 rounded-lg bg-pink-500">
              <SiFoodpanda size={23} className="bg-white rounded-xl" />
            </i>
            <p className=" font-bold text-2xl md:text-3xl">foodpanda</p>
          </div>

          
          {/* login, Signup & language */}
          
          <ul className="hidden md:w-4/12 md:h-14 md:flex md:justify-around lg:justify-end md:items-center md:py-1 md:text-center lg:gap-5 md:order-4">
            <li className="md:w-24 border ring-1 ring-pink-500 rounded-xl p-2 bg-white hover:bg-white cursor-pointer hover:p-4 duration-300 text-pink-500">login</li>
            <li className="md:w-24 border rounded-xl p-2 bg-pink-500 hover:bg-pink-500 cursor-pointer hover:p-4 duration-300 text-white">Sign Up</li>
            <li className="md:w-24 rounded-lg p-2 cursor-pointer hover:bg-pink-100 duration-200 flex justify-around items-center">
            <i><PiGlobeSimpleBold size={20}/></i>
            <p>EN</p>
            <i><MdOutlineKeyboardArrowDown size={20} className=" text-pink-500 font-bold"/></i>
            </li>
          </ul>

          {/* Heart & Shopping Logo */}
          <ul className="w-2/12 md:w-32 flex justify-end md:justify-end items-center text-pink-500 gap-4 p-1 md:order-5 order-3">
          <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200"><AiOutlineHeart size={30} /></li>
          <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200"><HiOutlineShoppingBag size={30} /></li>
          </ul>

          {/* Map Logo & Address */}
          <div className="w-full md:w-3/12 py-1 flex justify-center md:justify-end md:order-3 order-4">
          <div className="w-96 md:w-auto rounded-md flex justify-center md:justify-end items-center text-sm py-1 text-center gap-2 cursor-pointer hover:bg-pink-100 duration-300">
            <i>
              <HiOutlineMapPin />
            </i>
            <p>Ashraf Ali Road, Patharghata kotwali Chittagong.</p>
          </div>
          </div>

          {/* Menu Operation */}
          <div className="w-full flex justify-around items-center text-pink-500 gap-3  order-5  md:w-full md:h-24 md:justify-start md:items-center md:text-2xl md:order-5">
           
          
          <button className="w-26 flex justify-center items-center px-3 py-2 hover:border hover:border-b-2 hover:bottom-3 hover:bg-pink-100">
                <MdOutlineDeliveryDining size={23}/><span>Delivery</span>
          </button>

          <button className="w-26 flex justify-center items-center px-3 py-2 hover:border hover:border-b-2 hover:bottom-3 hover:bg-pink-100">
                <MdOutlineDeliveryDining size={23}/><span>Delivery</span>
          </button>

          

          {/* 
          <ul className="flex justify-center items-center text-pink-500 border-pink-600 outline-none cursor-pointer duration-200 gap-1 px-2 hover:border-b-2 hover:bg-pink-100 hover:rounded-t-lg active:border-b-2 active:bg-pink-100 active:rounded-t-lg">
                <li><MdOutlineEmojiPeople size={15}/></li>
                <li className="text-xs">Pick-Up</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 border-pink-600 outline-none cursor-pointer duration-200 gap-1 px-2 hover:border-b-2 hover:bg-pink-100 hover:rounded-t-lg active:border-b-2 active:bg-pink-100 active:rounded-t-lg">
                <li><PiSuitcaseRollingThin size={15}/></li>
                <li className="text-xs">pandamart</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 border-pink-600 outline-none cursor-pointer duration-200 gap-1 px-2 hover:border-b-2 hover:bg-pink-100 hover:rounded-t-lg active:border-b-2 active:bg-pink-100 active:rounded-t-lg">
                <li><GiShoppingCart size={15}/></li>
                <li className="text-xs">Shops</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 border-pink-600 outline-none cursor-pointer duration-200 gap-1 px-2 hover:border-b-2 hover:bg-pink-100 hover:rounded-t-lg active:border-b-2 active:bg-pink-100 active:rounded-t-lg">
                <li><GiForkKnifeSpoon size={15}/></li>
                <li className="text-xs">Dine-in</li>
          </ul>
              */}     

          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

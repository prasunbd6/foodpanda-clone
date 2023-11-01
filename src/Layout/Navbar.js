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
      <div className="flex felex-col justify-center items-center">
        <div className="w-full h-auto md:w-11/12 md:h-20 flex flex-wrap justify-between items-center bg-white py-1">
          {/* User Logo & Brand */}

          <i className="w-2/12 px-1 text-pink-500 text-xl font-bold md:hidden order-1">
            <CiUser size={30} />
          </i>

          {/* Logo & Brand Name */}
          <div className="md:w-auto flex items-center  text-pink-500 gap-2 md:order-2 order-2">
            <i className="p-1 rounded-lg bg-pink-500">
              <SiFoodpanda size={23} className="bg-white rounded-xl" />
            </i>
            <p className=" font-bold text-2xl">foodpanda</p>
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
          
          <div className="w-11/12 md:h-12 md:w-11/12 flex justify-start items-center order-5 md:order-5 py-2 gap-1  px-1">
           
          
          <ul className="flex justify-center items-center text-pink-500 gap-1 px-2 hover:border-b-2 border-pink-600 hover:bg-pink-100 outline-none hover:rounded-t-lg  cursor-pointer duration-200 translate">
                <li><MdOutlineDeliveryDining size={25}/></li>
                <li className="text-sm">Delivery</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 gap-1 px-2 hover:border-b-2 border-pink-600 hover:bg-pink-100 outline-none hover:rounded-t-lg  cursor-pointer duration-200 translate">
                <li><MdOutlineEmojiPeople size={25}/></li>
                <li className="text-sm">Pick-Up</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 gap-1 px-2 hover:border-b-2 border-pink-600 hover:bg-pink-100 outline-none hover:rounded-t-lg  cursor-pointer duration-200 translate">
                <li><PiSuitcaseRollingThin size={25}/></li>
                <li className="text-sm">pandamart</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 gap-1 px-2 hover:border-b-2 border-pink-600 hover:bg-pink-100 outline-none hover:rounded-t-lg  cursor-pointer duration-200 translate">
                <li><GiShoppingCart size={25}/></li>
                <li className="text-sm">Shops</li>
          </ul>

          <ul className="flex justify-center items-center text-pink-500 gap-1 px-2 hover:border-b-2 border-pink-600 hover:bg-pink-100 outline-none hover:rounded-t-lg  cursor-pointer duration-200 translate">
                <li><GiForkKnifeSpoon size={25}/></li>
                <li className="text-sm">Dine-in</li>
          </ul>
                   

          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

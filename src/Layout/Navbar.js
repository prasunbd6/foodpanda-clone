import { SiFoodpanda } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { GiShoppingCart, GiForkKnifeSpoon } from "react-icons/gi";
import { PiGlobeSimpleBold, PiSuitcaseRollingThin } from "react-icons/pi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineDeliveryDining,
  MdOutlineEmojiPeople,
} from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full h-auto mt-32 pt-2 flex flex-wrap justify-between items-center bg-white fixed order-1 md:w-full md:h-20 md:mt-14 lg:w-11/12 z-50">
          {/* User Logo & Brand */}

          <i className="w-2/12 px-1 text-pink-500 text-xl font-bold md:hidden order-1">
            <CiUser size={30} />
          </i>

          {/* Logo & Brand Name */}
          <div className="md:w-auto flex items-center  text-pink-500 gap-2 md:order-2 order-2">
            <i className="p-1 rounded-lg bg-pink-500">
              <SiFoodpanda size={23} className="bg-white rounded-xl" />
            </i>
            <p className=" font-bold text-2xl md:text-xl">foodpanda</p>
          </div>

          {/* login, Signup & language */}

          <ul className="hidden login-signup-language-md-config md:justify-end gap-2 ">
            <li className="md:w-20 border rounded-xl ring-1 ring-pink-500 text-pink-500 cursor-pointer p-1 bg-white hover:bg-white hover:border hover:border-pink-500 hover:ring-inset hover:ring-1 hover:ring-pink-500 ease-in-out duration-500">
              login
            </li>
            <li className="md:w-20 border rounded-xl ring-1 ring-pink-500  text-white cursor-pointer p-1 bg-pink-500 hover:bg-pink-600 hover:border hover:border-pink-500 ease-in-out duration-300">
              Sign Up
            </li>
            <li className="md:w-20 rounded-lg p-2 cursor-pointer gap-1 hover:bg-pink-100 duration-200 flex justify-around items-center">
              <i>
                <PiGlobeSimpleBold size={20} />
              </i>
              <p>EN</p>
              <i>
                <MdOutlineKeyboardArrowDown
                  size={20}
                  className=" text-pink-500 font-bold"
                />
              </i>
            </li>
          </ul>

          {/* Heart & Shopping Logo */}
          <ul className="w-2/12 md:w-24 flex justify-end md:justify-end items-center text-pink-500 gap-4 p-1 md:order-5 order-3">
            <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
              <AiOutlineHeart size={20} />
            </li>
            <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
              <HiOutlineShoppingBag size={20} />
            </li>
          </ul>

          {/* Map Logo & Address */}
          <div className="w-full md:w-4/12 py-1 flex justify-center md:justify-end md:order-3 order-4">
            <div className="w-96 md:w-auto rounded-md flex justify-center items-center md:justify-start  text-sm py-1 px-1 gap-1 text-center cursor-pointer hover:bg-pink-100 duration-300">
              <i>
                <HiOutlineMapPin />
              </i>
              <p>Ashraf Ali Road, Patharghata kotwali Chittagong.</p>
            </div>
          </div>

          {/* Menu Operation */}
          <ul className="menu-operation-in-ul-config menu-operation-in-md-config">
            <li className="menu-decoration-standby menu-decoration-hover menu-decoration-active">
              <MdOutlineDeliveryDining size={20} />
              <p className=" px-1">Delivery</p>
            </li>

            <li className="menu-decoration-standby menu-decoration-hover menu-decoration-active">
              <MdOutlineEmojiPeople size={20} />
              <p className=" px-1">Pick-Up</p>
            </li>

            <li className="menu-decoration-standby menu-decoration-hover menu-decoration-active">
              <PiSuitcaseRollingThin size={20} />
              <p className=" px-1">pandamart</p>
            </li>

            <li className="menu-decoration-standby menu-decoration-hover menu-decoration-active">
              <GiShoppingCart size={20} />
              <p className=" px-1">Shops</p>
            </li>

            <li className="menu-decoration-standby menu-decoration-hover menu-decoration-active">
              <GiForkKnifeSpoon size={20} />
              <p className=" px-1">Dine-in</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

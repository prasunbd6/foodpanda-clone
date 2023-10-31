import { SiFoodpanda } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="flex felex-col justify-center items-center">
        <div className="w-full h-auto md:w-11/12 md:h-20 flex flex-wrap justify-between items-center bg-white py-1">
          {/* User Logo & Brand */}

          <i className="w-2/12 md:w-1/12 px-1 text-pink-500 text-xl font-bold md:hidden order-1">
            <CiUser size={30} />
          </i>

          {/* Logo & Brand Name */}
          <div className="md:w-auto flex items-center  text-pink-500 gap-2 md:order-2 order-2">
            <i className="p-1 rounded-lg bg-pink-500">
              <SiFoodpanda size={23} className="bg-white rounded-xl" />
            </i>
            <p className=" font-bold text-xl">foodpanda</p>
          </div>

          
          {/* login, Signup & language */}
          <ul className="hidden md:w-3/12 md:h-10 md:flex md:justify-end md:items-center md:py-1 md:text-center md:gap-1 md:order-4">
            <li>login</li>
            <li>Sign Up</li>
            <li>Language</li>
          </ul>

          {/* Heart & Shopping Logo */}
          <ul className="w-2/12 md:w-24 flex justify-end md:justify-around items-center text-pink-500 gap-4 p-1 md:order-5 order-3">
          <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 md:p-1"><AiOutlineHeart size={30} /></li>
          <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 md:p-1"><HiOutlineShoppingBag size={30} /></li>
          </ul>

          {/* Map Logo & Address */}
          <div className="w-full md:w-auto py-1 flex justify-center md:justify-start md:order-3 order-4">
          <div className="w-60 md:w-auto rounded-md flex justify-center md:justify-end items-center py-1 text-center gap-2 cursor-pointer hover:bg-pink-100">
            <i>
              <HiOutlineMapPin />
            </i>
            <p>Ashraf Ali Road, Chittagong.</p>
          </div>
          </div>
          



        </div>
      </div>
    </>
  );
};

export default Navbar;

import { SiFoodpanda } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <div className="flex felex-col justify-center items-center">
        <div className="w-full h-auto md:w-11/12 md:h-32 flex flex-wrap justify-between items-center bg-white">
          {/* User Logo & Brand */}

          <i className="w-3/12 px-1  text-pink-500 text-xl font-bold md:hidden">
            <CiUser size={30} />
          </i>

          {/* Brand Name */}
          <div className="m-5 flex items-center  text-pink-500 gap-2">
            <i className="p-2 rounded-lg bg-pink-500">
              <SiFoodpanda size={25} className="bg-white rounded-xl" />
            </i>
            <p className=" font-bold text-2xl">foodpanda</p>
          </div>

          
          {/* login, Signup & language */}
          <ul className="hidden md:w-8/12 md:h-20 md:flex md:justify-end md:items-center md:py-1 md:text-center md:gap-5">
            <li>login</li>
            <li>Sign Up</li>
            <li>Language</li>
          </ul>

          {/* Shopping Logo */}
          <i className="w-3/12 md:w-auto px-1 md:px-4  text-pink-500 text-xl font-bold flex justify-end">
            <HiOutlineShoppingBag size={30} />
          </i>
          {/* Map Logo & Address */}
          <div className="w-full flex justify-center items-center py-1 text-center gap-2">
            <i>
              <HiOutlineMapPin />
            </i>
            <p>Ashraf Ali Road, Chittagong.</p>
          </div>



        </div>
      </div>
    </>
  );
};

export default Navbar;

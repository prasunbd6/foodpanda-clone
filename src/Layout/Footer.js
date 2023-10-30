import { SiFoodpanda } from "react-icons/si";
import { LuFacebook } from "react-icons/lu";
import {PiInstagramLogoThin} from "react-icons/pi"

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="w-10/12 flex justify-between items-center border-t-2">
          <div className="w-96 h-20 m-5 flex items-center  text-slate-400 gap-2">
            <i className="p-2 rounded-lg bg-slate-200">
              <SiFoodpanda size={35} />
            </i>
            <p className=" font-bold text-3xl">foodpanda</p>
          </div>

          <div className="w-96 h-20 m-5 flex justify-end items-center  text-slate-400 gap-6">
            <i className="p-2 rounded-full ring-slate-400 ring-1 hover:text-pink-500 duration-200 hover:ring-pink-400">
              <LuFacebook size={30} />
            </i>
            <i className="p-2 rounded-full ring-slate-400 ring-1 hover:text-pink-500 duration-200 hover:ring-pink-400">
              <PiInstagramLogoThin size={30} />
            </i>
          </div>
        </div>

        {/* Policy & Functions */}
        <div className="w-10/12 flex flex-wrap justify-center md:justify-between items-center text-lg border-t-2">
          
          <p className="w-full h-auto md:w-96 flex justify-center py-1">© 2022 foodpanda</p>
          

          <ul className="w-full md:w-96 flex flex-wrap justify-start gap-2 py-1">
            <li className="hover-link">Press</li>
            <li className="hover-link">Help Center</li> 
            <li className="hover-link">Terms and conditions</li> 
            <li className="hover-link">Privacy policy</li> 
            <li className="hover-link">Refund Account</li> 
            <li className="hover-link">Terms & Conditions</li> 
            <li className="hover-link">Cashback Program</li> 
            <li className="hover-link">Pandapro Subscription</li>
          </ul>

          <ul className="w-full md:w-96 flex flex-wrap justify-start gap-2 py-1">
            <li className="hover-link">Dine-in</li>
            <li className="hover-link">Security</li>
            <li className="hover-link">Partner with us</li>
            <li className="hover-link">How foodpanda works</li>
            <li className="hover-link">Download foodpanda Apps</li>
            <li className="hover-link">Careers</li>
            <li className="hover-link">Corporate Customer</li>
          </ul>

          <ul className="w-full md:w-96 flex flex-wrap justify-start gap-2 py-1">
            <li className="hover-link">pandago - Request a rider</li>
            <li className="hover-link">About pandago</li>
            <li className="hover-link">foodpanda Deals</li>
            <li className="hover-link">Grocery delivery</li>
            <li className="hover-link">Become an affiliate</li>
            <li className="hover-link">All cities</li>
            <li className="hover-link">Ramadan delivery</li>
          </ul>



        </div>
        
        {/* Address */}

      </div>
    </>
  );
};

export default Footer;

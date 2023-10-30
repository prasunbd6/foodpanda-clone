import { SiFoodpanda } from "react-icons/si";
import { LuFacebook } from "react-icons/lu";
import { PiInstagramLogoThin } from "react-icons/pi";

const Footer = () => {
  const country = [
    { id: 1, cname: "Bulgaria" },
    { id: 2, cname: "Romania" },
    { id: 3, cname: "Hong Kong" },
    { id: 4, cname: "Pakistan" },
    { id: 5, cname: "Singapore" },
    { id: 6, cname: "Malaysia" },
    { id: 7, cname: "Philippines" },
    { id: 8, cname: "Thailand" },
    { id: 9, cname: "Taiwan" },
  ];

  const bengali = [
    { id: 1, hname: "Sadia's Kitchen" },
    { id: 2, hname: "Sadia's Kitchen- GEC" },
    { id: 3, hname: "Mezzan Haile Ayon" },
    { id: 4, hname: "Hotel Zaman & Restaurants" },
    { id: 5, hname: "Chawk Malancha Mejbani" },
    { id: 6, hname: "Chawk Malancha" },
  ];

  const fastFood = [
    { id: 7, hname: "Sugar Bun" },
    { id: 8, hname: "Chubby Rolls" },
    { id: 9, hname: "Hot Chicken" },
    { id: 10, hname: "Super Yumm" },
    { id: 11, hname: "DCS Snacks" },
    { id: 12, hname: "Laziza" },
  ];

  const indian = [
    { id: 13, hname: "Basmati" },
    { id: 14, hname: "Chattometro" },
    { id: 15, hname: "Snoopy" },
    { id: 16, hname: "Dum Phoonk" },
    { id: 17, hname: "Red Chilli Restaurant" },
    { id: 18, hname: "Errante" },
  ];

  const chinese = [
    { id: 19, hname: "Bonanza" },
    { id: 20, hname: "Window@85" },
    { id: 21, hname: "The Pavilion" },
    { id: 22, hname: "Tai Wah Restaurant" },
    { id: 23, hname: "La Aristocracy" },
    { id: 24, hname: "Lotus" },
  ];

  const european = [
    { id: 25, hname: "Cafe Milano" },
    { id: 26, hname: "Da Signature" },
    { id: 27, hname: "Avalon Restaurant" },
    { id: 28, hname: "Meridian" },
    { id: 29, hname: "The Gallery" },
    { id: 30, hname: "Haatkhola" },
  ];

  const italian = [
    { id: 31, hname: "Barcode Cafe" },
    { id: 32, hname: "Muno Cafe Bistro" },
    { id: 33, hname: "Burgwich Town Fusion Cafe" },
  ];

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
          <p className="w-full h-auto md:w-96 flex justify-center py-1">
            © 2022 foodpanda
          </p>

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
        <div className="w-10/12 flex flex-wrap justify-center md:justify-start items-center border-t-2  md:gap-10">

          <div className="w-96 h-auto md:w-1/5 md:h-60 py-5">
            <h1 className=" font-extrabold text-xl hover-link">
              BENGALI FOOD DELIVERY IN CHITTAGONG
            </h1>
            <ul className="flex flex-wrap justify-start items-start gap-2 mt-3 text-xl">
              {bengali.map((bengali) => {
                return (
                  <>
                    <li key={bengali.id} className="hover-link">{bengali.hname}</li>,
                  </>
                );
              })}
            </ul>
          </div>

          <div className="w-96 h-auto md:w-1/5 md:h-60 py-5">
            <h1 className="font-extrabold text-xl hover-link">
            FAST FOOD DELIVERY IN CHITTAGONG
            </h1>
            <ul className="flex flex-wrap justify-start items-start gap-2 mt-3 text-xl">
              {fastFood.map((fastFood) => {
                return (
                  <>
                    <li key={fastFood.id} className="hover-link">{fastFood.hname}</li>,
                  </>
                );
              })}
            </ul>
          </div>

          <div className="w-96 h-auto md:w-1/5 md:h-60 py-5">
            <h1 className="font-extrabold text-xl hover-link">
            INDIAN FOOD DELIVERY IN CHITTAGONG
            </h1>
            <ul className="flex flex-wrap justify-start items-start gap-2 mt-3 text-xl">
              {indian.map((indian) => {
                return (
                  <>
                    <li key={indian.id} className="hover-link">{indian.hname}</li>,
                  </>
                );
              })}
            </ul>
          </div>

          <div className="w-96 h-auto md:w-1/5 md:h-60 py-5">
            <h1 className="font-extrabold text-xl hover-link">
            CHINESE FOOD DELIVERY IN CHITTAGONG
            </h1>
            <ul className="flex flex-wrap justify-start items-start gap-2 mt-3 text-xl">
              {chinese.map((chinese) => {
                return (
                  <>
                    <li key={chinese.id} className="hover-link">{chinese.hname}</li>,
                  </>
                );
              })}
            </ul>
          </div>

          <div className="w-96 h-auto md:w-1/5 md:h-60 py-5">
            <h1 className=" font-extrabold text-xl hover-link">
            EUROPEAN FOOD DELIVERY IN CHITTAGONG
            </h1>
            <ul className="flex flex-wrap justify-start items-start gap-2 mt-3 text-xl">
              {european.map((european) => {
                return (
                  <>
                    <li key={european.id} className="hover-link">{european.hname}</li>,
                  </>
                );
              })}
            </ul>
          </div>

          <div className="w-96 mh-auto d:w-3/12 md:h-60 py-5">
            <h1 className=" font-extrabold text-xl hover-link">
            ITALIAN FOOD DELIVERY IN CHITTAGONG
            </h1>
            <ul className="flex flex-wrap justify-start items-start gap-2 mt-3 text-xl">
              {italian.map((italian) => {
                return (
                  <>
                    <li key={italian.id} className="hover-link">{italian.hname}</li>,
                  </>
                );
              })}
            </ul>
          </div>

          

        </div>

        {/* Country */}
        <div className="w-10/12 flex justify-between items-center border-t-2">
          <ul className="w-full flex flex-wrap justify-start gap-2 py-3">
            {country.map((country) => {
              return (
                <>
                  <li key={country.id} className=" cursor-pointer">
                    {country.cname}
                  </li>
                  <li>|</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

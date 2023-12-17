import GoogleMapContainer from "../Slices/GoogleMapContainer";
import Slides from "../Slices/Slidesdb";
import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const PickUp = () => {
  const [selectedMapLink, setSelectedMapLink] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4002078432613!2d91.83427857405155!3d22.338512641511638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275bd5a1127d%3A0x93d7e8fa447e57dd!2sSri%20Govinda%20Restaurant!5e0!3m2!1sen!2sbd!4v1702575054332!5m2!1sen!2sbd"
  );
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleRestaurantClick = (mapLink) => {
    setSelectedMapLink(mapLink);
  };

  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col  md:mt-[130px]">
        {/*In Medium Device___Restaurant & Google Map - API Test Purpose*/}
        <div className="w-full md:w-full md:h-auto md:flex justify-around items-start mx-auto gap-3">
          {/* Restaurant List*/}
          <div className="hidden md:w-[300px] md:h-[470px] md:overflow-y-scroll md:flex flex-col gap-5">
            {Slides.map((i) => {
              return (
                <>
                  {/* Card */}
                  <div
                    className="md:w-[200px] h-auto flex flex-col mx-auto bg-slate-200 border cursor-pointer group md:mt-1 hover:ring-1 hover:ring-pink-400"
                    key={i.id}
                    onClick={() => handleRestaurantClick(i.map_link)}
                  >
                    <div className="overflow-hidden w-auto h-[130px]">
                      <img
                        src={i.photo_url}
                        className="w-full h-full duration-700 group-hover:scale-110"
                        alt=""
                      />
                    </div>

                    <p className="px-1 text-slate-900 font-semibold overflow-x-hidden">
                      {i.restaurant_name}
                    </p>
                    <p className="px-1 text-slate-900 text-sm">
                      Type: {i.food_type}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center px-1 gap-1 text-gray-400">
                        <IoTimeOutline />
                        <p className="text-sm">{i.duration} min</p>
                      </div>
                      <div className="flex items-center px-1 text-pink-600">
                        <p className="text-sm">delivery</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {/*In Small Device*/}
          <div className="relative">
            {/* Restaurant List */}
            <div
              className="md:hidden mt-36 w-[288px] h-auto py-1 absolute top-0" >
              <div
                onClick={() => setOpen(!open)}
                className={`flex justify-between items-center gap-5 ${!selected && " text-gray-700"}`}>
                {selected
                  ? selected?.length > 20
                    ? selected.substring(0, 20) + `...`
                    : selected
                  : "Select Restaurant"}
                <BiChevronDown size={20} />
              </div>

              <ul className={`bg-white mt-2 overflow-y-scroll ${open ? ` h-40` : `h-0`}`}>
                <div className="flex items-center px-2 sticky top-0 bg-white">
                  <AiOutlineSearch size={20} className="text-gray-700" />
                  <input
                    value={inputValue}
                    onChange={(e) =>
                      setInputValue(e.target.value.toLowerCase())
                    }
                    type="text"
                    placeholder="Enter restaurant name"
                    className="placeholder:text-gray-700 p-2 outline-none"
                  />
                </div>

                {Slides.map((s) => {
                  return (
                    <>
                      <li
                        onClick={() => {

                          if (s.restaurant_name.toLowerCase() !== selected.toLowerCase()) {
                            setSelected(s.restaurant_name);
                            setOpen(false);
                            setInputValue("");
                            handleRestaurantClick(s.map_link);
                          }

                        }

                        }

                        className={`p-1 text-sm hover:bg-pink-100 cursor-pointer ${s.restaurant_name.toLowerCase().startsWith(inputValue) ? `block` : `hidden`
                          }`}
                        key={s.id}
                      >
                        {s.restaurant_name}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          {/*Map Area*/}
          <div className="mt-48 md:mt-0 md:w-full md:h-[470px] md:mx-auto">
            <GoogleMapContainer selectedMapLink={selectedMapLink} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUp;

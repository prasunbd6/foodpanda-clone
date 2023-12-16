import GoogleMapContainer from "../Slices/GoogleMapContainer";
import Slides from "../Slices/Slidesdb";
import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";


const PickUp = () => {

  const [selectedMapLink, setSelectedMapLink] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4002078432613!2d91.83427857405155!3d22.338512641511638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275bd5a1127d%3A0x93d7e8fa447e57dd!2sSri%20Govinda%20Restaurant!5e0!3m2!1sen!2sbd!4v1702575054332!5m2!1sen!2sbd");

  const handleRestaurantClick = (mapLink) => {
    setSelectedMapLink(mapLink);
  };



  return (
    <>
      <div className="md:mt-[130px] flex flex-col">


        {/*Restaurant & Google Map - API Test Purpose*/}
        <div className="md:w-11/12 h-auto flex items-start mx-auto">

          {/* Restaurant List*/}
          <div className="md:w-[250px] md:h-[470px] md:overflow-y-scroll flex flex-col gap-5">

            {
              Slides.map(i => {
                return (
                  <>
                    {/* Card */}
                    <div className="md:w-[200px] h-auto flex flex-col mx-auto bg-slate-200 border cursor-pointer group hover:ring-1 hover:ring-pink-400" key={i.id} onClick={() => handleRestaurantClick(i.map_link)} >
                      <div className="overflow-hidden w-auto h-[130px]">
                        <img src={i.photo_url} className="w-full h-full duration-700 group-hover:scale-110" alt="" />
                      </div>
                      <p className="px-1 text-slate-900 font-semibold overflow-x-hidden">{i.restaurant_name}</p>
                      <p className="px-1 text-slate-900 text-sm">Type: {i.food_type}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center px-1 gap-1 text-gray-400"><IoTimeOutline/><p className="text-sm">{i.duration} min</p></div>
                        <div className="flex items-center px-1 text-pink-600"><p className="text-sm">delivery</p></div>
                      </div>

                    </div>
                  </>
                )
              })
            }
          </div>



          {/*Map Area*/}
          <div className="md:w-11/12 md:h-[470px]">
            <GoogleMapContainer selectedMapLink={selectedMapLink} />
          </div>

        </div>


      </div>
    </>
  );
};

export default PickUp;

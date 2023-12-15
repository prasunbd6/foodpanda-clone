import GoogleMapContainer from "../Slices/GoogleMapContainer";

import Slides from "../Slices/Slidesdb";
import { useState } from "react";

const PickUp = () => {

  const [selectedMapLink, setSelectedMapLink] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4002078432613!2d91.83427857405155!3d22.338512641511638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad275bd5a1127d%3A0x93d7e8fa447e57dd!2sSri%20Govinda%20Restaurant!5e0!3m2!1sen!2sbd!4v1702575054332!5m2!1sen!2sbd");

  const handleRestaurantClick = (mapLink) => {
    setSelectedMapLink(mapLink);
  };



  return (
    <>

      {/* Google Map  Search Box*/}
      <ul className="px-1 md:absolute md:top-[100px] bg-pink-700 z-10">


        {
          Slides.map(i => {
            return (
              <>
                <li key={i.id} onClick={()=>handleRestaurantClick(i.map_link)} className=" cursor-pointer">{i.restaurant_name}</li>
              </>
            )
          })
        }


      </ul>





      {/* Container */}
      <div className="md:mt-[98px] md:w-11/12 md:h-[600px] mx-auto flex justify-center items-center">
        <GoogleMapContainer selectedMapLink={selectedMapLink}/>
      </div>
    </>
  );
};

export default PickUp;

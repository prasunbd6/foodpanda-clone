import GoogleMapContainer from "../Slices/GoogleMapContainer";
import { IoCloseSharp } from "react-icons/io5";

const PickUp = () => {
  return (
    <>

      {/* Google Map  Search Box*/}
      <div className="p-1 md:absolute md:top-[100px] md:left-[430px] md:w-[460px] md:h-20 md:flex md:justify-around bg-pink-400 md:z-10 gap-2">

        <input type="text" className="w-28 h-6" placeholder="Origin"/>
        <input type="text" className="w-28 h-6" placeholder="Destination"/>
        <button className="text-xs px-2 h-6">Route Calculate</button>
        <i ><IoCloseSharp/></i>

      </div>



      {/* Container */}
      <div className="md:mt-[98px] md:w-11/12 md:h-[600px] mx-auto flex justify-center items-center">
        <GoogleMapContainer />
      </div>
    </>
  );
};

export default PickUp;

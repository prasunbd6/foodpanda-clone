import GoogleMapContainer from "../Slices/GoogleMapContainer";

const PickUp = () => {
  return (
    <>
      {/* Google Map  Search Box*/}
      <div className="p-1 md:absolute md:top-[80px] md:left-[210px] md:w-[360px] md:h-32 md:flex md:justify-start md:bg-pink-400 md:z-10">
        <label className="block bg-green-300">
          <span className="block">Present Location</span>
          <input type="destination" className="peer ..." />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid address.
          </p>
        </label>
      </div>

      {/* Container */}
      <div className="md:mt-[150px] md:w-5/6 md:h-[600px] mx-auto flex justify-center items-center">
        <GoogleMapContainer />
      </div>
    </>
  );
};

export default PickUp;

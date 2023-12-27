import heroImg from "../Assets/refresh-hero-home-bd.png";

export const HomeContainer = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-auto h-60 flex flex-col justify-around items-start ">
          <p className="text-2xl font-bold lg:text-3xl text-gray-700 px-2">
            It's the food and groceries you love, delivered
          </p>

          <div
            className=" w-[400px]  bg-white mx-2 p-2 rounded-xl flex flex-col justify-start items-center gap-2 
          in-md-frame"
          >
            <input
              type="text"
              className="w-full h-10 rounded-md focus:outline-none border border-gray-300 
        in-md-input"
            />

            <button className="w-full md:w-auto px-4 py-2  rounded-md bg-pink-500 text-white in-md-button">
              Find
            </button>
          </div>
        </div>

        <div className="w-11/12 h-auto flex justify-center items-center">
          <img src={heroImg} className="bg-cover" alt="" />
        </div>

        {/*
   <div className="pt-16">
        
        </div>
 */}
      </div>
    </>
  );
};

import heroImg from "../Assets/refresh-hero-home-bd.png";
import HomeMdInput from "./HomeMdInput";

export const HomeContainer = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">

        
        <div className="w-7/12 md:h-[250px] flex md:justify-between md:flex-col">
          <p className="text-2xl font-bold lg:text-3xl text-gray-700 px-2">
            It's the food and groceries you love, delivered
          </p>
          <HomeMdInput/>
        </div>

        <div className="w-5/12 ">
          <img src={heroImg} className="bg-cover" alt="" />
        </div>

      </div>

      {/*input*/}
      <div
        className=" w-full md:w-[300px] md:flex-row bg-white mx-2 p-3 rounded-xl flex flex-col justify-start items-center gap-2 
          in-md-frame"
      >
        <input
          type="text"
          className="w-full h-10 rounded-md focus:outline-none border border-gray-300 
        in-md-input"
        />

        <button className="w-full md:w-32 px-4 py-2  rounded-md bg-pink-500 text-white in-md-button md:text-[13px]">
          Find Food
        </button>
      </div>
    </>
  );
};

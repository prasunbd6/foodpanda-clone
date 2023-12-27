import heroImg from "../Assets/refresh-hero-home-bd.png";

export const HomeContainer = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">

        <div className="w-6/12 flex">
          <p className="text-xl font-bold lg:text-3xl text-gray-700 px-2">
            It's the food and groceries you love, delivered
          </p>
        </div>

        <div className="w-6/12 ">
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

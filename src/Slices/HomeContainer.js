import heroImg from "../Assets/refresh-hero-home-bd.png";
import HomeMdInput from "./HomeMdInput";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

export const HomeContainer = () => {

  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // Function to handle input change
  const clearInput = (e) => {
    setInputValue("");
  }

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">


        <div className="w-7/12 md:h-[250px] flex md:justify-between md:flex-col">
          <p className="text-2xl font-bold lg:text-3xl text-gray-700 px-2">
            It's the food and groceries you love, delivered
          </p>
          {/* Input In Medium Device */}
          <HomeMdInput
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            clearInput={clearInput}
            RxCrossCircled={RxCrossCircled}
          />
        </div>

        <div className="w-5/12 ">
          <img src={heroImg} className="bg-cover" alt="" />
        </div>

      </div>

      {/*input in Small Device*/}
      <label
        className=" w-full md:w-[300px] md:flex-row bg-white mx-2 p-3 rounded-xl flex flex-col justify-start items-center gap-2 
          in-md-frame relative"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Street, Postal code"
          className="
          w-full 
          h-10 
          px-3
          rounded-md 
          focus:outline-none 
          border 
          border-gray-300
          border-opacity-50
          text-gray-400
          transition duration-200
          input-text
        "
        />
        <span className="
                absolute left-1 top-5 
                mx-5 text-md bg-white text-gray-400 text-opacity-80
                input-text
            ">
          Your street and street number
        </span>

        {
          inputValue && (
            <>
              <span onClick={clearInput} className=" absolute right-5 top-6 text-gray-600">
                <RxCrossCircled size={16} />
              </span>
            </>
          )
        }

        <button className="w-full md:w-32 px-4 py-2  
        rounded-md bg-pink-500 
        text-white in-md-button 
        md:text-[13px]
        transition duration-300
        hover:outline-none 
        hover:ring-2
        hover:ring-inherit
        hover:ring-pink-500
        ">
          Find Food
        </button>
      </label>
    </>
  );
};




const HomeMdInput = ({ inputValue, handleInputChange, clearInput, RxCrossCircled }) => {




    return (
        <>
            {/*input*/}
            <label className="hidden hidden-in-sm md:relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Street, Postal code"
                    className="
                    w-[530px] 
                    h-14 
                    rounded-md 
                    outline-none 
                    border-2
                    border-gray-300
                    border-opacity-50
                    px-3
                    text-gray-400
                    transition duration-200
            "/>
                <span className="
                absolute left-0 top-7 
                mx-6 text-md bg-white text-gray-400 text-opacity-80
                input-text
            ">
                    Your street and street number
                </span>
                {
                    inputValue && (
                        <>
                            <span onClick={clearInput} className=" absolute right-[155px] top-6 text-gray-600">
                                <RxCrossCircled size={16} />
                            </span>
                        </>
                    )
                }


                <button className="
                w-full h-14 md:w-32 p-2  
                rounded-md bg-pink-500 
                text-white in-md-button 
                md:text-[13px]
                hover:outline-none 
                hover:ring-2
                hover:ring-inherit
                hover:ring-pink-500
                ">
                    Find Food
                </button>
            </label>
        </>
    )
}

export default HomeMdInput
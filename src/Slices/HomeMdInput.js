

const HomeMdInput = () => {
    return (
        <>
            {/*input*/}
            <label className="hidden hidden-in-sm md:relative">
                <input
                    type="text"
                    placeholder="Street, Postal code"
                    className="
                    w-full 
                    h-10 
                    rounded-md 
                    outline-none 
                    border-2
                    border-opacity-50
                    px-3
                    text-gray-400
                    border-gray-300
                    transition duration-200
            "/>
                <span className="
                absolute left-1 top-5 
                mx-5 text-md bg-white text-gray-400 text-opacity-80
                input-text
            ">
                    Your street and street number
                </span>

                <button className="w-full md:w-32 px-4 py-2  rounded-md bg-pink-500 text-white in-md-button md:text-[13px]">
                    Find Food
                </button>
            </label>
        </>
    )
}

export default HomeMdInput
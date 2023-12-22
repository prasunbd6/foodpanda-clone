import heroImg from "../Assets/refresh-hero-home-bd.png"

export const HomeContainer = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center lg:relative">
                {/*Text & Inbox */}
                <div className="w-11/12 flex flex-col justify-start items-center">
                    <p className="text-2xl font-bold lg:text-3xl text-gray-700 px-2">It's the food and groceries you love, delivered</p>
                </div>
                {/*Image */}
                <div className="w-11/12 h-auto flex justify-center items-center">
                    <img src={heroImg} className="" alt="" />
                </div>
            </div>

            {/*Input Panel */}
            <div className="
2xl:left-[80px]
2xl:top-[450px]
xl:left-[70px]
xl:top-[400px]

            lg:absolute 
            lg:top-[340px]
            lg:left-[60px]
            lg:w-[458px]
            lg:flex-row

            w-full 
            bg-white 
            p-4 
            rounded-xl 
            flex 
            flex-col 
            items-center 
            gap-2">
                <input type="text" className="
                lg:w-[340px]
                w-full h-10 rounded-md focus:outline-none border border-gray-300" />
                <button className="
                lg:w-[90px]
                lg:h-[40px]
                lg:text-md
                w-full p-1 rounded-md bg-pink-500 text-white">Find Food</button>

            </div>


        </>
    )
}
export const HomeContainer = () => {
    return (
        <>
            <div className="md:w-full flex justify-center items-center relative">
                {/*Text & Inbox */}
                <div className="md:w-11/12 flex flex-col justify-start items-center">
                    <p className="text-2xl text-gray-700 px-2">It's the food and groceries you love, delivered</p>
                </div>
                {/*Image */}
                <div className="md:w-11/12 flex justify-center items-center">
                    <img src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-bd.png?width=1264" className="w-full h-full" alt="" />
                </div>
            </div>
            <div className="absolute md:-bottom-7 md:left-9 lg:bottom-24 lg:left-14 xl:left-28 md:w-[694px] lg:w-[450px] bg-white p-4 rounded-xl flex md:flex-col lg:flex-row items-center md:gap-2 lg:gap-4">
                <input type="text" className="md:w-full lg:w-72 md:h-10 rounded-md focus:outline-none border border-gray-300" />
                <button className="md:w-full lg:w-28 p-2 rounded-md bg-pink-500 text-white">Find Food</button>
            </div>
        </>
    )
}
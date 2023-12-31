

const HeroSection = ({heroImg}) => {
  return (
    <>
        <div className="w-11/12 mx-auto flex flex-col">
        {/* Hero Text Section */}
        <p className="px-2 py-6 text-lg md:text-3xl font-semibold text-black text-opacity-80 text-center md:text-left">
          You prepare the food, we handle the rest
        </p>
        </div>

        {/* Image Section */}
        <div className='h-[600px] relative'>
          <div className="w-full md:h-[400px] overflow-hidden">
            <img src={heroImg} alt="" className=" w-full h-full bg-center"/>
          </div>
        

          {/* Card*/}
          <span className="w-full md:w-auto absolute left-0 bottom-28 
          md:translate md:translate-x- md:translate-y-2  
          md:left-10 md:bottom-10">
            <div className="w-11/12 md:w-[600px] mx-auto rounded-xl border-lg bg-gray-100 flex flex-col p-4">
              <h1 className="p-1 text-md font-semibold">
                List your restaurant or shop on foodpanda
              </h1>
              <p className="p-1 text-md ">
                Would you like millions of new customers to enjoy your amazing
                food and groceries? So would we!
              </p>
              <p className="p-1 text-md ">
                It's simple: we list your menu and product lists online, help
                you process orders, pick them up, and deliver them to hungry
                pandas – in a heartbeat!
              </p>
              <p className="p-1 text-md ">
                Interested? Let's start our partnership today!
              </p>
              <button
                className="w-[100px] p-2 rounded-lg bg-pink-600 text-white
                hover:ring-pink-600 hover:ring-4 transition duration-300 ease-in-out">
                Get started
              </button>
            </div>
          </span>
        </div>
    </>
  )
}

export default HeroSection
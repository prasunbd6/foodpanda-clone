import { HomeContainer } from "../Slices/HomeContainer"
import heroImg from "../Assets/home-vendor-bd.jpg"


export const Home = () => {
    return (
        <>

            {/* Container Section */}

            <div className="w-11/12 h-auto mx-auto mt-12 lg:mt-12 flex flex-col justify-center items-center bg-gray-50 py-2">
                <HomeContainer />
            </div>

            {/* Hero Section */}

            <div className="w-11/12 h-auto mx-auto mt-20 flex flex-col">
                <p className="px-2 py-6 text-3xl font-semibold text-black text-opacity-80">You prepare the food, we handle the rest</p>
            </div>

            {/* Hero Image Section */}

            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-full h-full md:h-[580px] px-2 overflow-hidden ">
                    <img src={heroImg} alt="" className="w-full relative" />
                </div>
            </div>

            <div className="w-full absolute left-0 top-[900px]">
                <div className="w-11/12 mx-auto border-lg bg-gray-50 flex flex-col p-4 md:w-[500px] md:h-auto">
                    <h1 className="text-lg md:text-xl text-opacity-80">List your restaurant or shop on foodpanda</h1>
                    <p className="p-1 text-md md:text-sm">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
                    <p className="p-1 text-md md:text-sm">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                    <p className="p-1 text-md md:text-sm">Interested? Let's start our partnership today!</p>
                    <button
                        className="
                        w-28
                        p-2 
                        rounded-lg 
                        bg-pink-600 
                        text-white
                        hover:ring-pink-600
                        hover:ring-4
                        transition duration-300 ease-in-out
                        ">
                        Get started
                    </button>
                </div>
            </div>


        </>
    )
}

import { HomeContainer } from "../Slices/HomeContainer"
import heroImg from "../Assets/home-vendor-bd.jpg"
//import testImg from ""


export const Home = () => {

    const myPlace = [
        { id: 1, place: "Dhaka", myImg: "https://images.pexels.com/photos/18583290/pexels-photo-18583290/free-photo-of-traffic-on-street-under-dhaka-metro-overpass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, place: "Chittagong", myImg: "https://images.pexels.com/photos/3322106/pexels-photo-3322106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ]

    return (
        <>

            {/* Container Section */}

            <div className="w-11/12 h-screen mx-auto mt-12 lg:mt-12 flex flex-col justify-center items-center bg-gray-50 py-2">
                <HomeContainer />
            </div>

            {/* Hero Section (Need to repair)*/}

            <div className="w-11/12 h-[900px] mx-auto flex flex-col">
                {/* Hero Text Section */}
                <p className="px-2 py-6 text-lg md:text-3xl font-semibold text-black text-opacity-80 text-center md:text-left">You prepare the food, we handle the rest</p>

                {/* Image Section */}
                <div className="w-full h-auto flex justify-center items-center relative">

                    <div className="w-full md:h-[580px] px-2 overflow-hidden">
                        <img src={heroImg} alt="" className="bg-cover" />
                    </div>

                    {/* Card*/}
                    <span className="w-full md:w-auto h-auto absolute left-0 -bottom-40">
                        <div className="w-11/12 md:w-[600px] mx-auto rounded-xl border-lg bg-gray-100 flex flex-col p-4">
                            <h1 className="p-1 text-md font-semibold">List your restaurant or shop on foodpanda</h1>
                            <p className="p-1 text-md ">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
                            <p className="p-1 text-md ">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                            <p className="p-1 text-md ">Interested? Let's start our partnership today!</p>
                            <button className="w-[100px] p-2 rounded-lg bg-pink-600 text-white
                        hover:ring-pink-600 hover:ring-4 transition duration-300 ease-in-out">
                                Get started
                            </button>
                        </div>
                    </span>

                </div>




            </div>

            <div className="w-11/12 h-auto mx-auto flex flex-col">
                <p className="text-3xl font-semibold py-4">Find us in these cities and many more!</p>
                <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 md:justify-start">
                    {
                        myPlace.map(p => {
                            return (
                                <>
                                    {/* Card */}
                                    <div className="relative" key={p.id}>
                                        <div className="w-52 h-48 overflow-hidden border rounded-md">
                                            <img
                                                className="w-full h-full hover:scale-125 transition duration-500 ease-in-out"
                                                src={p.myImg} alt="" />
                                        </div>
                                        <button className="absolute left-2 bottom-2 bg-white px-4 py-1 border rounded-lg">
                                            {p.place}
                                        </button>
                                    </div>
                                </>
                            )
                        }

                        )
                    }

                </div>
            </div>








        </>
    )
}

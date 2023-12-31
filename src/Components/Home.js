import { HomeContainer } from "../Slices/Home/HomeContainer";
import heroImg from "../Assets/home-vendor-bd.jpg"
import HeroSection from "../Slices/Home/HeroSection";


export const Home = () => {
  const myPlace = [
    {
      id: 1,
      place: "Dhaka",
      myImg:
        "https://images.pexels.com/photos/18583290/pexels-photo-18583290/free-photo-of-traffic-on-street-under-dhaka-metro-overpass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      place: "Chittagong",
      myImg:
        "https://images.pexels.com/photos/3322106/pexels-photo-3322106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      place: "Khulna",
      myImg:
        "https://images.pexels.com/photos/18583290/pexels-photo-18583290/free-photo-of-traffic-on-street-under-dhaka-metro-overpass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      place: "Barishal",
      myImg:
        "https://images.pexels.com/photos/3322106/pexels-photo-3322106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      place: "Dhaka",
      myImg:
        "https://images.pexels.com/photos/18583290/pexels-photo-18583290/free-photo-of-traffic-on-street-under-dhaka-metro-overpass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      place: "Chittagong",
      myImg:
        "https://images.pexels.com/photos/3322106/pexels-photo-3322106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      {/* Container Section */}

      <div className="w-11/12 h-screen mx-auto mt-12 lg:mt-12 flex flex-col justify-center items-center bg-gray-50 py-2">
        <HomeContainer />
      </div>

      {/* Hero Section (Need to repair)*/}

      <section className="w-full h-auto">
        <HeroSection heroImg={heroImg}/>
      </section>

      

      <div className="w-11/12 h-auto mx-auto flex flex-col">
        <p className="text-3xl font-semibold py-4">
          Find us in these cities and many more!
        </p>
        <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 
         md:justify-start">
          {myPlace.map((p) => {
            return (
              <>
                {/* Card */}
                <div className="relative" key={p.id}>
                  <div className="w-96 h-60 overflow-hidden border rounded-md
                  md:w-52 md:h-32"
                  >
                    <img
                      className="w-full h-full hover:scale-125 transition duration-500 ease-in-out"
                      src={p.myImg}
                      alt=""
                    />
                  </div>
                  <button className="absolute left-2 bottom-2 bg-white px-4 py-1 border rounded-lg">
                    {p.place}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

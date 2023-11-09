import { SlBadge } from "react-icons/sl";

const Delivery = () => {
  const cuisines = [
    { id: 1, cname: "American" },
    { id: 2, cname: "Asian" },
    { id: 3, cname: "Bakery" },
    { id: 4, cname: "Bangladeshi" },
    { id: 5, cname: "Bengali" },
    { id: 6, cname: "Beverage" },
    { id: 7, cname: "Biryani" },
    { id: 8, cname: "Breakfast" },
    { id: 9, cname: "Burgers" },
    { id: 10, cname: "Cafe" },
    { id: 11, cname: "Cakes" },
    { id: 12, cname: "Chicken" },
    { id: 13, cname: "Chinese" },
    { id: 14, cname: "Chotpoti & Fuchka" },
    { id: 15, cname: "Curry" },
    { id: 16, cname: "Dessert" },
    { id: 17, cname: "Dumpling" },
    { id: 18, cname: "Fast Food" },
    { id: 19, cname: "Fish" },
    { id: 20, cname: "Fried Chicken" },
    { id: 21, cname: "Healthy" },
    { id: 22, cname: "Ice Cream" },
    { id: 23, cname: "Indian" },
    { id: 24, cname: "Italian" },
    { id: 25, cname: "Japanese" },
    { id: 26, cname: "Juice Corner" },
    { id: 27, cname: "Kashmiri" },
    { id: 28, cname: "Kebab" },
    { id: 29, cname: "Korean" },
    { id: 30, cname: "Meat" },
    { id: 31, cname: "Mediterranean" },
    { id: 32, cname: "Mexican" },
    { id: 33, cname: "Middle Eastern" },
    { id: 34, cname: "Noodles" },
    { id: 35, cname: "Pasta" },
    { id: 36, cname: "Pizza" },
    { id: 37, cname: "Rice Dishes" },
    { id: 38, cname: "Sandwiches" },
    { id: 39, cname: "Seafood" },
    { id: 40, cname: "Shawarma" },
    { id: 41, cname: "Snacks" },
    { id: 42, cname: "Soups" },
    { id: 43, cname: "Steak" },
    { id: 44, cname: "Sushi" },
    { id: 45, cname: "Sweets" },
    { id: 46, cname: "Thai" },
    { id: 47, cname: "Turkish" },
    { id: 48, cname: "Vegetarian" },
    { id: 49, cname: "Western" },
    { id: 50, cname: "Wraps" },
  ];

  const sortby = [
    { id: 1, type: "Relevance" },
    { id: 2, type: "Fastest Delivery" },
    { id: 3, type: "Distance" },
  ];

  const offers = [
    { id: 1, offers: "Accept vouchers" },
    { id: 2, offers: "Deals" },
  ];

  const content = [
    {
      id: 1,
      heading: "Order food online in Chittagong",
      details:
        "If you thought Bangladeshi cuisine was all about fish and rice, think again. While seafood and grains might serve as the staples for many a dish, there's much more to discover from this rich culinary heritage. In Chittagong, you'll find a remarkable range of regional specialities alongside the signatures of the best of Bangladeshi cooking. Whether you're looking to indulge with hot curries loaded with tender meat or please your palate with deliciously fresh tropical fruit recipes, you're well catered when it comes to food delivery in Chittagong.",
    },
    {
      id: 2,
      heading: "Make ordering online easy with foodpanda",
      details:
        "When hunger strikes, make foodpanda your first port of call. Whether you're home late and too tired to cook or stuck at the office and in need of nourishment, our user-friendly platform allows you to order food delivery in no time at all. To get started, head out to the foodapanda website or launch the app. Then, enter your area and search to find restaurants near you delivering to your location. You'll then see an overview of what's on offer. Simply click to open that restaurants delivery page and browse the full menu. Tap or click to add desired items to your basket, then head to the online checkout to pay and finalise your order. Once you've handled that part, the rest is taken care of, meaning you can relax as your food is prepared and delivered direct to your door.",
    },
    {
      id: 3,
      heading: "Enjoy first class food from the best Chittagong restaurants",
      details:
        "Whatever your appetite, there's plenty of choice when it comes to food takeaway in Chittagong. Here at foodpanda, our expert taste team have scoured eateries throughout the city to ensure you enjoy premium choice from the best restaurants around. Looking for homegrown dishes with homegrown flavours? Sink your teeth into Indian and Bengali specialities from the likes of Premium Sweets, Ahaar and Z Kitchen. Prefer to chow down on Chinese dishes? Find what you're looking for at Royal Kitchen and Korai Gost, or opt for fragrant Thai classics from Street 11 and Xenial. There are also rich pickings when it comes to Western dishes and fast food favourites.",
    },
    {
      id: 4,
      heading: "Delve into a diverse range of culinary delights",
      details:
        "Like elsewhere in Bangladesh, Chittagong offers up an eclectic offering when it comes to food. You'll never struggle to find first-rate fish dishes here, with the port city of Chittagong particularly renowned for its standout seafood. Classic dried fish and crab dishes are popular here, while more exotic alternatives like stingray are on hand to broaden your culinary horizons. If it's a curry you're craving, there's few better places in Bangladesh to be. Curries here are famously spicy and rich in flavour, with succulent beef the go-to. South Asian cuisine is also well represented, with plenty of premier Chinese and Thai eateries to entice.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-36 pt-1 md:mt-28">
        <p className="w-11/12 h-auto pt-1 bg-pink-50 text-center text-sm text-pink-700 md:text-lg md:py-2">
          YUMPANDA : 25% off up to Tk. 100 off on orders over Tk 199 (Valid 1
          time)
        </p>
      </div>

      <div className="h-auto flex flex-col justify-center items-center mt-0 gap-4">
        <div className=" w-11/12 h-auto flex flex-wrap justify-center items-start text-slate-600 md:justify-start md:items-start md:mt-5">
         
        {/* Left Side Bar */}
        <div className="hidden md:mt-3 md:w-64 md:h-[840px] md:flex md:flex-col md:justify-start md:items-start md:px-4 md:gap-5 md:border md:border-l-2 rounded-s-2xl md:pt-5 md:overflow-y-scroll">
            <p className="text-xl font-bold">Filters</p>

            {/*Sort by*/}
            <div className="w-full flex flex-wrap flex-col justify-start items-start gap-2">
              <p className="filter-heading-text">Sort by</p>

              <ul>
                {sortby.map((y) => {
                  return (
                    <>
                      <li>
                        <label className="flex items-center py-1 gap-2 group">
                          <input
                            type="radio"
                            name="status"
                            id={y.id}
                            checked
                            className="appearance-none w-5 h-5 border ring-inset ring-4 ring-white border-pink-500 rounded-full transition ease-in-out duration-300
                            sort-checked sort-checked-focus sort-focus sort-group-hover sort-hover-active
                           "
                          />

                          <span className="group-hover:text-pink-500 ">
                            {y.type}
                          </span>
                        </label>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            {/*Quick Filters*/}
            <div className="w-full flex flex-wrap flex-col justify-start items-start gap-2">
              <p className="filter-heading-text">Quick filters</p>

              <button className="border rounded-full py-1 px-3 flex items-center gap-2 hover:bg-pink-50">
                <span className=" text-pink-600">
                  <SlBadge />
                </span>
                Top restaurant
              </button>
            </div>

            {/*Offers*/}
            <div className="w-full flex flex-wrap flex-col justify-start items-start gap-2">
              <p className="filter-heading-text">Offers</p>
              <ul>
                {offers.map((o) => {
                  return (
                    <>
                      <li className="filter-list group" key={o.id}>
                        <label className="flex items-center gap-5">
                          <input
                            type="checkbox"
                            value={o.offers}
                            className="filter-list-label-square transition ease-in-out duration-300"
                          />
                          <p className="group-hover:text-pink-500">
                            {o.offers}
                          </p>
                        </label>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            {/*Cuisines*/}
            <div className="w-full flex flex-wrap flex-col justify-start items-start gap-2">
              <p className="filter-heading-text">Cuisines</p>
              <ul>
                <li className="filter-list">Search bar</li>

                {cuisines.map((x) => {
                  return (
                    <>
                      <li key={x.id} className="filter-list group">
                        <label className="flex items-center gap-5">
                          <input
                            type="checkbox"
                            id={x.id} // Add an id to the checkbox
                            value={x.cname}
                            className=" appearance-none w-5 h-5 border-2 border-pink-500  rounded-md ring-inset 
                            transition ease-in-out duration-300
                            sort-group-hover
                            sort-marked
                            "
                          />
                          <p className="group-hover:text-pink-500">{x.cname}</p>
                        </label>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Body */}
          <div className="w-full h-auto flex flex-wrap justify-start gap-6  md:w-4/6 md:px-5 lg:w-9/12 lg:px-10  xl:w-10/12 xl:px-16">
            {content.map((con) => {
              return (
                <>
                    <h1 className=" font-bold text-xl md:text-2xl lg:xl:text-3xl" key={con.id}>{con.heading}</h1>
                    <p className="text-slate-600 text-lg md:lg:xl:text-2xl">{con.details}</p>
                  
                </>
              );
            })}
            </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;

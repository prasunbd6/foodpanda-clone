import React from 'react'

const LeftSidebar = ({SlBadge, cuisines,sortby, offers,AiOutlineSearch}) => {
  return (
    <>
    <div className="hidden md:sticky md:top-24 md:mt-3 md:w-60 lg:w-64 md:h-[840px] md:flex md:flex-col md:justify-start md:items-start md:px-4 md:gap-5 md:border md:border-l-2 rounded-s-2xl md:pt-5 md:overflow-y-scroll">
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
        <li className="filter-list">
          <form>
            <label className="flex justify-start items-center relative group">
              <AiOutlineSearch
                size={23}
                className="text-slate-400 absolute left-2 group-hover:text-pink-500 group-focus:text-pink-500 "
              />
              <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="Search for Cuisine"
                className=" overflow-hidden w-[200px] h-8 bg-slate-50 px-10 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </label>
          </form>
        </li>

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
    </>
  )
}

export default LeftSidebar

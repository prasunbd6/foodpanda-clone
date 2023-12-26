import React from 'react'

const NavbarPrevious = () => {
  return (
    <>
        <div className="h-auto flex flex-col justify-center items-center bg-white">
        <div className="w-full pt-20 flex flex-wrap justify-between items-center bg-white fixed order-1 md:w-full md:h-20 md:mt-14 lg:w-11/12 z-50">
          {/* User Logo & Brand */}

          <ul className="w-2/12 flex justify-start items-center text-pink-500 gap-4 p-2 order-1 md:hidden">

            <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
              {
                user && (
                  <AiOutlineLogout size={25} onClick={handleLogout} />
                )
              }


              {
                !user && (
                  <CiUser size={25} onClick={googleSignIn} />
                )
              }



            </li>

          </ul>

          {/* Logo & Brand Name */}
          <NavLink to="/" className="flex items-center  text-pink-500 gap-2 order-2 md:w-auto md:order-2">
            <i className="p-1 rounded-lg bg-pink-500">
              <SiFoodpanda size={23} className="bg-white rounded-xl" />
            </i>
            <p className=" font-bold text-2xl md:text-xl">foodpanda</p>
          </NavLink>

          {/* login, Signup & language */}
          <ul className="hidden login-signup-language-md-config  gap-2">
            {
              user && (
                <>
                  <li className="md:w-20 border rounded-xl ring-1 ring-pink-500 text-pink-500 p-1 bg-white hover:bg-white hover:border hover:border-pink-500 hover:ring-inset hover:ring-1 hover:ring-pink-500 ease-in-out duration-500">
                    <p className="md:cursor-pointer" onClick={handleLogout}>logout</p>
                  </li>
                </>
              )
            }
            {!user && (<>
              <li className="md:w-20 border rounded-xl ring-1 ring-pink-500 text-pink-500 p-1 bg-white hover:bg-white hover:border hover:border-pink-500 hover:ring-inset hover:ring-1 hover:ring-pink-500 ease-in-out duration-500">
                <p className="md:cursor-pointer" onClick={googleSignIn}>login</p>
              </li>

              <li className="md:w-20 border rounded-xl ring-1 ring-pink-500  text-white p-1 bg-pink-500 hover:bg-pink-600 hover:border hover:border-pink-500 ease-in-out duration-300">
                <p className="md:cursor-pointer">Sign Up</p>
              </li>
            </>)
            }
            <li className="md:w-20 rounded-lg p-2 gap-1 hover:bg-pink-100 duration-200 flex justify-around items-center md:cursor-pointer">
              <i>
                <PiGlobeSimpleBold size={20} />
              </i>
              <p>EN</p>
              <i>
                <MdOutlineKeyboardArrowDown
                  size={20}
                  className=" text-pink-500 font-bold"
                />
              </i>
            </li>

          </ul>

          {/* Heart & Shopping Logo */}
          <ul className="w-2/12 md:w-24 flex justify-end md:justify-end items-center text-pink-500 gap-4 p-1 md:order-5 order-3">
            <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
              <AiOutlineHeart size={25} />
            </li>
            <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
              <HiOutlineShoppingBag size={25} />
            </li>
          </ul>

          {/* Map Logo & Address */}
          <div className="w-full flex justify-center py-1 order-4 md:w-4/12 md:justify-end md:order-3 ">
            <div className="w-96 md:w-auto rounded-md flex justify-center items-center md:justify-start  text-sm py-1 px-1 gap-1 text-center hover:bg-pink-100 duration-300">
              <i>
                <HiOutlineMapPin />
              </i>
              <p className="md:cursor-pointer">
                Ashraf Ali Road, Patharghata kotwali Chittagong.
              </p>
            </div>
          </div>

          {/* Menu Operation */}
          <ul className={`${user? "w-full h-auto flex justify-around items-center text-pink-500 gap-1  shadow-xl order-5 menu-operation-in-md-config":"hidden"}`}>

            {user && (<>

              <li className=" group relative">
                <NavLink to="/delivery" className="menu-decoration-standby" activeClassName="active">
                  <MdOutlineDeliveryDining size={20} /><p className="px-1 md:cursor-pointer">Delivery</p>
                  <span className="absolute -bottom-0 menu-decoration-hover-underline"></span>
                </NavLink>
              </li>

              <li className=" group relative">
                <NavLink to="/pickup" className="menu-decoration-standby" activeClassName="active">
                  <MdOutlineEmojiPeople size={20} /><p className=" px-1 md:cursor-pointer">Pick-Up</p>
                  <span className="absolute -bottom-0 menu-decoration-hover-underline"></span>
                </NavLink>
              </li>

              <li className=" group relative">
                <NavLink to="pandamart" className="menu-decoration-standby" activeClassName="active">
                  <PiSuitcaseRollingThin size={20} /><p className=" px-1 md:cursor-pointer">pandamart</p>
                  <span className="absolute -bottom-0 menu-decoration-hover-underline"></span>
                </NavLink>
              </li>

              <li className=" group relative">
                <NavLink to="shops" className="menu-decoration-standby" activeClassName="active">
                  <GiShoppingCart size={20} /><p className=" px-1 md:cursor-pointer">Shops</p>
                  <span className="absolute -bottom-0 menu-decoration-hover-underline"></span>
                </NavLink>
              </li>

              <li className=" group relative">
                <NavLink to="dinein" className="menu-decoration-standby" activeClassName="active">
                  <GiForkKnifeSpoon size={20} /><p className=" px-1 md:cursor-pointer">Dine-in</p>
                  <span className="absolute -bottom-0 menu-decoration-hover-underline"></span>
                </NavLink>
              </li>

            </>)

            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarPrevious
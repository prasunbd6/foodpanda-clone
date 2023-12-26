import { GiShoppingCart, GiForkKnifeSpoon } from "react-icons/gi";
import { PiSuitcaseRollingThin } from "react-icons/pi";
import { MdOutlineDeliveryDining, MdOutlineEmojiPeople } from "react-icons/md";
import { NavLink } from "react-router-dom";


const MenuOperation = ({ user }) => {

  return (
    <>
      <div className='order-5'>
        <ul className="w-11/12 mx-auto flex justify-around text-pink-600 md:justify-start">
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
    </>

  )
}

export default MenuOperation
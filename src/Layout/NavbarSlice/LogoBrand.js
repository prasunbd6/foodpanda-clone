import { NavLink } from "react-router-dom"
import { SiFoodpanda } from "react-icons/si";


const LogoBrand = () => {
  return (
    <>

      <NavLink to="/" className="order-2 md:order-4 w-auto flex items-center text-pink-500 gap-2 p-2">
        <i className="p-1 rounded-lg bg-pink-500">
          <SiFoodpanda size={23} className="bg-white rounded-xl" />
        </i>
        <p className=" font-bold text-2xl md:text-xl">foodpanda</p>
      </NavLink>

    </>
  )
}

export default LogoBrand
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

const CartLogo = () => {
  return (
    <>
      
        <ul className="order-5 md:order-7 flex justify-end items-center text-pink-500 p-1 gap-1">
          <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
            <AiOutlineHeart size={25} />
          </li>
          <li className="rounded md:rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
            <HiOutlineShoppingBag size={25} />
          </li>
        </ul>
    
    </>
  )
}

export default CartLogo
import { CiUser } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const UserLoginIcon = ({ user, handleLogout, googleSignIn }) => {
  return (
    <>
      <ul className="order-1 text-pink-500 p-1 md:hidden">
        <li className="rounded flex justify-center hover:rounded-full hover:bg-pink-100 p-2 duration-200">
          { user && ( <AiOutlineLogout size={25} onClick={handleLogout} />)}
          {!user && ( <CiUser size={25} onClick={googleSignIn} />)}
        </li>
      </ul>
    </>
  )
}

export default UserLoginIcon;
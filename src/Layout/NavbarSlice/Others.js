import { PiGlobeSimpleBold } from 'react-icons/pi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Others = ({ user, handleLogout, googleSignIn }) => {
  return (
    <>

      <ul className="others-ul hidden  md:order-6">
        {
          user ? (
            <>
              <li className="others-li text-pink-500">
                <p className="md:cursor-pointer md:text-center" onClick={handleLogout}>logout</p>
              </li>
            </>) : (<>
              <li className="others-li text-pink-500 others-li-hover">
                <p className="md:cursor-pointer md:text-center" onClick={googleSignIn}>login</p>
              </li>

              <li className="others-li text-white bg-pink-500 hover:ring-pink-500">
                <p className="md:cursor-pointer md:text-center px-1">Sign Up</p>
              </li>
            </>
          )
        }

        <li className="others-li text-pink-500">
          <div className='md:flex'>
            <i>
              <PiGlobeSimpleBold size={20} />
            </i>
            <p>EN</p>
            <i>
              <MdOutlineKeyboardArrowDown
                size={20}
                className=" md:text-pink-500 md:font-bold"
              />
            </i>
          </div>
        </li>

      </ul>

    </>

  )
}

export default Others
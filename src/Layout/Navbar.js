import { useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../Context/AuthContext"
import MenuOperation from "./NavbarSlice/MenuOperation";
import LogoAddress from "./NavbarSlice/LogoAddress";
import UserLoginIcon from "./NavbarSlice/UserLoginIcon";
import LogoBrand from "./NavbarSlice/LogoBrand";
import CartLogo from "./NavbarSlice/CartLogo";
import Others from "./NavbarSlice/Others"

const Navbar = () => {

  const { user, Logout, googleSignIn } = useUserAuthContext();

  const navigate = useNavigate();

  //Handle Logout
  const handleLogout = () => {
    Logout()
      .then(() => {
        navigate("/");
      })

  }

  return (
    <>
      {/*Main Area Fixed */}
      <div className="bg-white w-full h-auto fixed top-0 z-50">
        <div className="flex flex-col">
          {/*portion-1 */}
          <div className="flex justify-between items-center">
            <UserLoginIcon user={user} handleLogout={handleLogout} googleSignIn={googleSignIn} />
            <LogoBrand />
            <LogoAddress />
            <Others user={user} handleLogout={handleLogout} googleSignIn={googleSignIn} />
            <CartLogo />
          </div>
          
          {/*portion-3 */}
          <div><MenuOperation user={user} /></div>
        </div>
      </div>


    </>
  );
};

export default Navbar;

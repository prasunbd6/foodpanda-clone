import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Delivery from "./Components/Delivery";
import Dinein from "./Components/DineIn";
import Pandamart from "./Components/PandaMart";
import Shops from "./Components/Shops";
import Pickup from "./Components/PickUp";
import IntersactionObserver from "./Slices/IntersectionObserver";
import { Home } from "./Components/Home";
import { ClientRoute } from "./ProtectedRoute/ClientRoute";

import { useUserAuthContext } from "./Context/AuthContext"
import Authentication from "./Components/Authentication";
import Error from "./Components/Error";



const App = () => {

  const {user}=useUserAuthContext();

  const renderLoginRegisterRoutes = () => {
    if (!user) {
      return (
        <>
        <Route path="/authentication" element={<Authentication />} />
        </>
      )
    } 
  };


  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Section */}
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/observer" element={<IntersactionObserver />} />

        {/* Client Section */}
        {renderLoginRegisterRoutes()}        
        <Route element={<ClientRoute />}>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/dinein" element={<Dinein />} />
          <Route path="/pandamart" element={<Pandamart />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/pickup" element={<Pickup />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;

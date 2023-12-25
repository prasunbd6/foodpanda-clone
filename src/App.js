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
import ClientRoute from "./ProtectedRoute/ClientRoute";
import Error from "./Components/Error"

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Section */}
        <Route path="/" element={<Home />} />
        <Route path="/observer" element={<IntersactionObserver />} />
        <Route path="*" element={<Error />} />

        {/* Client Section */}
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

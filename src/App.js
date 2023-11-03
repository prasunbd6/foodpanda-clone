import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Delivery from "./Components/Delivery";
import Dinein from "./Components/DineIn";
import Pandamart from "./Components/PandaMart";
import Shops from "./Components/Shops";
import Pickup from "./Components/PickUp";


const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Delivery/>} />
        <Route path="/dinein" element={<Dinein/>} />
        <Route path="/pandamart" element={<Pandamart/>} />
        <Route path="/shops" element={<Shops/>} />
        <Route path="/pickup" element={<Pickup/>} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;

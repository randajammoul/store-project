import React, { useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";// Fixed spelling error in 'Products'
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported
import Footer from "./component/Footer/footer";
import { Outlet } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100

    });
    AOS.refresh();
  },[]);

  return (
    <>
      <Navbar />
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

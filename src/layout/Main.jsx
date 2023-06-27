// eslint-disable-next-line no-unused-vars
import React from "react";

import NavigationBar from "../shared/NavigationBar/NavigationBar";
import AOS from "aos";
import Footer from "../shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Main = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div>
         <NavigationBar></NavigationBar>
         <main>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
         </main>
         <footer className="bg-black py-5">
            <Footer></Footer>
         </footer>
      </div>
   );
};

export default Main;

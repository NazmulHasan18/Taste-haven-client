// eslint-disable-next-line no-unused-vars
import React from "react";

import NavigationBar from "../shared/NavigationBar/NavigationBar";

import Footer from "../shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = () => {
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

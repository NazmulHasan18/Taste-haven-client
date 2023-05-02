// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "../pages/home/Home/Home";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Banner from "../shared/Banner/Banner";
import { Container } from "react-bootstrap";
import Footer from "../shared/Footer/Footer";

const Main = () => {
   return (
      <div>
         <header>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
         </header>
         <main>
            <Container>
               <Home></Home>
            </Container>
         </main>
         <footer className="bg-black py-5">
            <Footer></Footer>
         </footer>
      </div>
   );
};

export default Main;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "../pages/home/Home/Home";
import NavigationBar from "../shared/NavigationBar/NavigationBar";
import Banner from "../shared/Banner/Banner";
import { Container } from "react-bootstrap";

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
      </div>
   );
};

export default Main;

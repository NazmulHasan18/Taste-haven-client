import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";

const About = () => {
   return (
      <div data-aos="fade-up" data-aos-duration="2000">
         <Parallax
            bgImage="https://i.ibb.co/FYLRVLx/fuzzy-restaurant-with-chef-working.jpg"
            bgImageAlt="about us"
            strength={200}
            renderLayer={(percentage) => (
               <div>
                  <div
                     style={{
                        position: "absolute",
                        background: `rgba(83, 83, 83, ${percentage * 1})`,
                        left: "80%",
                        top: "40%",
                        borderRadius: "10px",
                        transform: "translate(-50%,-50%)",
                        width: percentage * 2000,
                        height: percentage * 2000,
                     }}
                  />
               </div>
            )}
         >
            <Container className="d-md-flex  gap-5 align-items-center text-start">
               <img
                  src="https://i.ibb.co/0ZTLPV3/restaurant-kitchen-manager.jpg"
                  alt=""
                  className="m-5 about-img"
                  style={{ width: "50%" }}
               />
               <div className="text-white about-img m-3" style={{ width: "50%" }}>
                  <h2 className="border-bottom border-2 pb-3 mb-3">About Us</h2>
                  <p className="fs-5">
                     Welcome to Taste Haven, where culinary excellence meets exceptional hospitality. Indulge
                     in our tantalizing menu, expertly crafted with the finest ingredients. Immerse yourself
                     in our inviting ambiance and let our friendly staff elevate your dining experience. From
                     traditional favorites to innovative creations, our menu caters to all tastes and
                     preferences. Join us today and embark on a culinary journey that will leave you wanting
                     more. Discover why Taste Haven is the ultimate destination for food enthusiasts.
                  </p>
               </div>
            </Container>
         </Parallax>
      </div>
   );
};

export default About;

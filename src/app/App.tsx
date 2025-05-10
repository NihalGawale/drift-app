import React from "react";
import NavBar from "./components/NavBar/navBar";
import Banner from "./components/Banner/banner";
import SectionOne from "./components/Sections/SectionOne";
import SectoinTwo from "./components/Sections/SectoinTwo";
import SectionThree from "./components/Sections/SectionThree";
import SectionFour from "./components/Sections/SectionFour";
import SectionFive from "./components/Sections/SectionFive";
import SectionSix from "./components/Sections/SectionSix";
import CustomerTestimonial from "./components/CustomerTestimonial/CustomerTestimonial";
import CTASection from "./components/CTA/ctaSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SectionOne />
      <SectoinTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <CustomerTestimonial />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

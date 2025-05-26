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
import ProductSection from "./components/Products/ProductSection";
import AboutUs from "./components/AboutUs/aboutUs";
import CoreValues from "./components/CoreValues/coreValues";
import FAQ from "./components/FAQ/faq";

function App() {
  return (
    <div className="w-full relative flex flex-col justify-center ">
      <NavBar />
      <Banner />
      <ProductSection />
      <AboutUs />
      <CoreValues />
      <CustomerTestimonial />
      <CTASection />
      <ContactSection />
      <FAQ />
      <Footer />
      {/*  <SectionOne />
      <SectoinTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
       */}
    </div>
  );
}

export default App;

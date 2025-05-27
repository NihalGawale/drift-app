import React from "react";
import NavBar from "./components/NavBar/navBar";
import Banner from "./components/Banner/banner";
import CustomerTestimonial from "./components/CustomerTestimonial/CustomerTestimonial";
import CTASection from "./components/CTA/ctaSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import ProductSection from "./components/Products/ProductSection";
import AboutUs from "./components/AboutUs/aboutUs";
import CoreValues from "./components/CoreValues/coreValues";
import FAQ from "./components/FAQ/faq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;

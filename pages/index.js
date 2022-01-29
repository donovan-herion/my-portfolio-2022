import Head from "next/head";
// import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import ToggleLanguage from "../components/ToggleLanguage";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
export default function Home() {
  const [english, setEnglish] = useState(false);
  return (
    <>
      {/* <ContactForm english={english} /> */}
      <Landing english={english} />
      <ToggleLanguage english={english} setEnglish={setEnglish} />
      <Projects english={english} />
      <Contact english={english} />
      <Footer />
    </>
  );
}

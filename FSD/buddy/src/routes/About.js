import React from 'react'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroimg="https://images.unsplash.com/photo-1635352723068-ffb3b922397f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    title="ABOUT"
    buttontext=""
    
    btnclass="hide"
    />
    </>
   
  )
}

export default About;

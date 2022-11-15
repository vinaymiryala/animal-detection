import React from 'react'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

function Service() {
  return (
   <>
   <Navbar/>
    <Hero
   cName="hero-mid"
    heroimg="https://plus.unsplash.com/premium_photo-1661726637770-fefe253c10e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
    title="SERVICE"
    buttontext=""
    
    btnclass="hide"
    />
   </>
  )
}

export default Service

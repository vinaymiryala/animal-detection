import React from 'react'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroimg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
    title="YOUR JOURNEY IS NEVER ENDING"
    text="Chose Your Favourite Destination"
    buttontext="Travel Plan"
    url="/"
    btnclass="show"
    />
    </>
  )
}

export default Home

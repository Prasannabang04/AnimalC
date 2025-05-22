import React from 'react'
import Navbar from '../components/Navbar'
import Rescue from '../components/Rescue'
import Footer from '../components/Footer'


function Rescues() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
        <Rescue/>
    </div>
    <Footer/>
    </>
  )
}

export default Rescues
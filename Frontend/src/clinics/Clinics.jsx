import React from 'react'
import Navbar from '../components/Navbar'
import Clinic from '../components/Clinic'
import Footer from '../components/Footer'

function Clinics() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Clinic/>
    </div>

    <Footer/>
    </>
  )
}

export default Clinics
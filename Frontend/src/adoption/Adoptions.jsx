import React from 'react'
import Navbar from '../components/Navbar'
import Adoption from '../components/Adoption'
import Footer from '../components/Footer'

function Adoptions() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Adoption/>
    </div>

    <Footer/>
    </>
  )
}

export default Adoptions
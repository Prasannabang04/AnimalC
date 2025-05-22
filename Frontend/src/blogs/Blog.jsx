import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bloges from '../components/Bloges';

function Blog() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Bloges/>
    </div>
    <Footer/>
    </>
  )
}

export default Blog
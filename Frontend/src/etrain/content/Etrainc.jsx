// Import React and required assets
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Etrainc = () => {
    return (
       <>
       <Navbar/>
       <div className="bg-gray-100 mt-24 min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">E_Training Cats</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#videos" className="hover:underline">Videos</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-blue-500 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Our E_Training Page</h2>
                    <p className="text-lg">Teach your Cat or kitties basic skill and teach them corect way.</p>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">About Us</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our E_training specializes in delivering high-quality educational content to help their pet to achieve Basic Knowleage How to behave.
                    </p>
                </div>
            </section>

            {/* Videos Section */}
            <section id="videos" className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">E_Training Videos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Video 1 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/yM3n2mWZqUU?si=XqMA6H2y8x70iOEF&amp;controls=0&amp" // Replace with your YouTube video URL
                                title="Training Video 1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-800">Train Any cat</h4>
                                <p className="text-gray-600">Basic to teach all Cats.</p>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/Uu-hRtkaVLc?si=050zXwwS10xbuNun&amp;controls=0&amp" // Replace with your YouTube video URL
                                title="Training Video 2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-800">Basic Sign Language for Cats</h4>
                                <p className="text-gray-600">Make them understand you sign Language.</p>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/EKe0otXH3Ck?si=GcasWBuw_3-z5huT&amp;controls=0&amp" // Replace with your YouTube video URL
                                title="Training Video 3"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-800">For Kittens</h4>
                                <p className="text-gray-600">First 7 Things to Teach new puppies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">For more information, please get in touch:</p>
                    <form className="grid grid-cols-1 gap-4">
                        <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded-md" />
                        <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 rounded-md" />
                        <textarea placeholder="Your Message" className="border border-gray-300 p-2 rounded-md" rows="4"></textarea>
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Send</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Training Center. All rights reserved.</p>
                </div>
            </footer>
        </div>
       <Footer/>
       </>
    );
};

export default Etrainc;

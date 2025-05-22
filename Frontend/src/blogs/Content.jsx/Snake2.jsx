// Import React and required assets
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Snake2 = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen mt-24 p-4">
                <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Blog Header Section */}
                    <div className="relative">
                        <img
                            src="https://i.imgur.com/CFDcV6N.jpeg" // Replace with your image URL
                            alt="Blog Header"
                            className="w-full h-[500px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4">
                                "Indian Rat Snake: The Farmer’s Silent Ally"
                            </h1>
                        </div>
                    </div>

                    {/* Blog Content Section */}
                    <div className="p-6">
                        <p className="text-sm text-gray-500 mb-4">
                            By <span className="font-bold">Omkar Pawar</span> | Date: 12th November 2024
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Passion for Snake Rescues</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Living in Karad, Maharashtra, I’ve been fortunate to grow up amidst lush fields and dense forests, where nature’s wonders are a part of daily life. Among these wonders, snakes have always fascinated me. What began as curiosity turned into a profound passion: rescuing these often-misunderstood creatures. Each rescue deepens my understanding of their behavior and reinforces their vital role in our ecosystem.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Recently, I had the privilege of rescuing an Indian rat snake (*Ptyas mucosa*), a species renowned for its speed, agility, and indispensable contributions to agriculture. Affectionately dubbed the "rat controller," this non-venomous snake is a farmer’s silent ally, quietly safeguarding crops by preying on destructive rodents.
                        </p>
                        <img
                            src="https://i.imgur.com/CQqBXKU.jpeg" // Replace with your image URL
                            alt="Blog Header"
                            className="w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg mt-6 mb-6 object-cover"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Indian Rat Snake</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Indian rat snake is one of the most common and widespread snake species in India. Despite its large size, which can sometimes intimidate people, it is entirely non-venomous and harmless to humans. Its true significance lies in its role as a natural pest controller, feeding primarily on rodents.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            An Indian rat snake’s appetite is impressive: it can consume 3 to 4 rats in a week. This dietary habit significantly curtails rodent populations, mitigating crop damage and reducing the spread of diseases caused by rats. By keeping pests in check, these snakes not only support food security but also diminish the reliance on chemical pesticides, promoting sustainable farming practices.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            One of the greatest challenges in snake conservation is dispelling the myths and misconceptions that surround them. Many people mistakenly believe that all snakes are venomous and dangerous, leading to unwarranted fear and harm. Such myths not only threaten snake populations but also disrupt the ecological balance they help maintain.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Through my rescues and educational efforts, I strive to change these perceptions. Teaching people how to identify non-venomous species like the Indian rat snake and understanding their ecological importance is the first step toward coexistence. By fostering awareness, we can replace fear with respect and protect these vital creatures.
                        </p>
                    </div>

                    {/* Blog Footer Section */}
                    <div className="p-6 border-t border-gray-200">
                        <p className="text-gray-500">
                            Tags: <span className="text-indigo-600 font-medium">#Snakes</span>,{' '}
                            <span className="text-indigo-600 font-medium">#Rescue</span>,{' '}
                            <span className="text-indigo-600 font-medium">#Snuggle Sanctuary</span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Snake2;

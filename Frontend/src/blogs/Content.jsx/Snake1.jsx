// Import React and required assets
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Snake1 = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen mt-24 p-4">
                <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Blog Header Section */}
                    <div className="relative">
                        <img
                            src="https://i.imgur.com/4OHxbq9.jpeg" // Replace with your image URL
                            alt="Blog Header"
                            className="w-full h-[500px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4">
                                Snakes: Guardians of Nature, Not Monsters to Fear
                            </h1>
                        </div>
                    </div>

                    {/* Blog Content Section */}
                    <div className="p-6">
                        <p className="text-sm text-gray-500 mb-4">
                            By <span className="font-bold">Omkar Pawar</span> | Date: 10th November 2024
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            The Beauty of Snake Rescues: My Journey from Fear to Fascination
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In the heart of Karad, a picturesque village in Maharashtra, I spent my childhood surrounded by fields, forests, and the untamed beauty of nature. Yet, amidst this serene backdrop, there was one element of wildlife that always filled me with a mix of awe and dread—snakes. Stories about snakes, often exaggerated and steeped in superstition, were a staple of my upbringing. Like many others, I grew up believing they were creatures to be feared and avoided.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This perception began to change during my college vacations, when curiosity led me to explore the world of snake rescue. What started as a simple hobby quickly became a passion, revealing to me the beauty and importance of these misunderstood creatures. Over time, I realized that snake rescue wasn’t just about saving an animal—it was about breaking down the barriers of fear and ignorance that separate humans from these vital guardians of the ecosystem.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            One rescue, in particular, stands out in my memory—a common trinket snake. Sleek, non-venomous, and adorned with striking patterns, this snake was a marvel of nature’s artistry. Carefully handling it during the rescue, I was struck by its elegance and grace. Later, as I released it back into its natural habitat, I felt an overwhelming sense of fulfillment. That experience wasn’t just about saving a life; it was a moment of connection, a reminder of our shared responsibility to protect the natural world.
                        </p>
                        <img
                            src="https://i.imgur.com/VdbTcfy.jpeg" // Replace with your image URL
                            alt="Common Trinket Snake"
                            className="w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg mt-6 mb-6 object-cover"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Misconceptions About Snakes</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Snakes have long been the subject of myths and misconceptions, often portrayed as dangerous, aggressive, and malevolent creatures. However, the truth is far from this depiction. Of the roughly 300 species of snakes found in India, only a small fraction—such as the cobra, krait, Russell’s viper, and saw-scaled viper—are venomous and potentially harmful to humans. The vast majority, including species like the common trinket snake, are harmless and pose no threat.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Despite this, fear and ignorance lead to tragic consequences. Many people kill snakes on sight, unaware of the essential role these creatures play in maintaining ecological balance. Snakes are nature’s pest controllers, preying on rodents that could otherwise overrun fields and spread diseases. By keeping rodent populations in check, they indirectly support agricultural health and food security.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Beyond their practical contributions, snakes are a vital part of the food chain. They serve as both predators and prey, contributing to the intricate web of life. Losing them would disrupt this balance, leading to unforeseen ecological consequences.
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

export default Snake1;

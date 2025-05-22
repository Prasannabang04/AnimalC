import React from 'react';
import Footer from './Footer';

function Blogs() {
  return (
    <>
      <div className="mt-32">
        {/* Banner Section */}
        <div className="relative">
          <img
            src="https://i.imgur.com/WfqBG5n.jpeg"
            className="w-full h-96 object-cover"
            alt="Banner"
          />
          <div className="bg-opacity-30 flex font-serif items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Welcome to the Blog</h1>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex flex-wrap justify-center mt-8">
          <div className="card shadow-sm rounded-lg overflow-hidden py-6 mb-4 max-w-sm m-4"
           style={{ backgroundImage: "url('https://i.pinimg.com/736x/f6/ed/a6/f6eda6e04d15f877ee3db71a83f0b934.jpg')" }}>
            <div className="p-4">
              <h5 className="card-title text-xl font-semibold">Snakes: Guardians of Nature, Not Monsters to Fear
              </h5>
              <p className="card-text mt-2 text-gray-600">
              The Beauty of Snake Rescues: My Journey from Fear to Fascination</p>
              <a
                href="/sb1"
                className="btn bg-blue-500 text-white px-4 py-4 mt-4 inline-block rounded hover:bg-blue-600"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="card shadow-lg rounded-lg overflow-hidden  py-6 mb-4  max-w-sm m-4"
          style={{ backgroundImage: "url('https://i.pinimg.com/736x/c8/f8/e1/c8f8e1244e880c4cd912c61ae180fe5a.jpg')" }}>
            <div className="p-4">

              <h5 className="card-title text-xl font-semibold">Indian Rat Snake: The Farmer’s Silent Ally</h5>
              <p className="card-text mt-2 text-gray-800">
              My Passion for Snake Rescues
              </p>
              <a
                href="/sb2"
                className="btn bg-blue-500 text-white px-4 py-4 mt-4 inline-block rounded hover:bg-blue-600"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Blogs;

import React from 'react'
import ban01 from "../../public/ban01.png";

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-28 mt-14">
      <div className="space-y-12">
      <h1 className="text-4xl font-bold cursor-pointer">A Small <a href="/about">Click</a>, A <span className="text-purple-500">Big Difference</span></h1>
        <h1>
            <p className="text-xl">
            Welcome to <span className="text-2xl font-bold text-purple-500">Snuggle Senctuary</span>, where we provide a safe haven for homeless and rescued animals, helping them find loving homes. Whether you’re adopting the animal, volunteering in our camp, or donating the funds, food, meds to the organisation, your support makes a big difference. Join us in giving these animals a second chance and a happy life!
            </p>
        </h1>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
      </div>
      <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={ban01} className="w-81 h-81" alt="" />
        </div>
        
    </div>
    </>
  )
}

export default Banner
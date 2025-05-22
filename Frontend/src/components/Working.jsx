import React from 'react';

function Working() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 my-10">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif text-stone-500">
            Emotional Appeal
          </h1>
        </div>

        {/* First Hero Section */}
        <div
          className="mt-8 hero min-h-[50vh] md:min-h-[70vh] lg:min-h-screen rounded-md"
          style={{
            backgroundImage: "url(https://i.pinimg.com/736x/6a/ac/42/6aac42df543c51f1f18148b0cc3ff54f.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="text-neutral-content px-6 sm:px-8 md:px-12 py-10 md:py-16 lg:py-20 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Welcome to Snuggle Sanctuary
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white text-justify leading-relaxed">
              Where Healing Hearts and Paws Find Their Forever Home
              At Snuggle Sanctuary, we are more than just a dog adoption service—we are a place of hope, healing, and second chances. Our mission is to rescue, rehabilitate, and rehome dogs that have faced hardship, offering them a fresh start with the promise of unconditional love. Every dog that comes through our doors has a unique story—stories of courage, resilience, and survival—but they all share one thing in common: they deserve a life filled with happiness, care, and warmth.
            </p>
          </div>
        </div>

        {/* Second Hero Section */}
        <div
          className="mt-8 hero min-h-[50vh] md:min-h-[70vh] lg:min-h-screen rounded-md"
          style={{
            backgroundImage: "url(https://i.pinimg.com/736x/63/f4/a0/63f4a05af30d6e3a23a100cfe4191e98.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-neutral-content px-6 sm:px-8 md:px-12 py-10 md:py-16 lg:py-20 space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              At Snuggle Sanctuary, we understand that adopting a dog isn’t just about bringing them into your home—it’s about ensuring they are healthy, happy, and ready to thrive. That’s why we work closely with top-tier veterinary clinics to provide comprehensive care for every dog in our program.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              <strong>Adopt, and Save a Life:</strong> When you adopt from Snuggle Sanctuary, you’re not just getting a pet—you’re welcoming a new family member who will be eternally grateful for the chance at a new life.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              By choosing adoption, you’re making a powerful choice to change a life forever. You're not just offering a safe place to sleep and food to eat; you're offering hope, joy, and a future filled with love.
            </p>
            <button className="btn btn-primary">
              <a href="/about" className="text-white">Know more about us</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;

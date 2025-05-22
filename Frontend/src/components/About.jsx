// import React from 'react'

// function About() {
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row mt-28 font-bold text-2xl text-purple-500 cursor-pointer items-center justify-center text-center">
//         <h1 className="text-2xl font-semibold md:text-4xl">About Us</h1>
//       </div>
//       <div className="my-2">
//         <p className=" text-justify md:mx-[42px] m-8">
//           Welcome to <span className="font-bold text-purple-500 text-2xl">Snuggle Century</span>, your go-to online resource dedicated to ensuring the health and happiness of your beloved animals. We believe every animal deserves a loving home and proper care, and our mission is to empower owners with the knowledge and resources needed to nurture their furry, feathered, or scaly companions.
//           In addition to valuable information, Snuggle Century fosters a vibrant community of animal lovers. Connect with fellow owners to share experiences, ask questions, and build lasting friendships. We also offer resources for emergency assistance, ensuring you can quickly access local veterinarians and services when needed.
//           At Snuggle Century, we understand that animals are more than just pets—they're family. Join us on this journey to create a happier, healthier world for our animals, and together, let's ensure that every creature receives the love and care they truly deserve.
//         </p>
//       </div>
//       <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 p-10">
//           <h1 className="cursor-default text-4xl font-bold">What We Provide</h1>
//           <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Adopt a Friend for Life | Snuggle Sanctuary</h1>
//           <p className="cursor-default mt-4">
//             Adopting a pet means gaining a loyal friend and giving an animal a second chance at a loving home. Many animals at Snuggle Sanctuary are seeking their forever families, and by adopting, you’re not just changing their lives—you’re also making space for another pet in need.
//           </p>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Browse Available Animals</div>
//             <div className="collapse-content">
//               <p>Explore our list of adoptable animals online. Each pet’s profile includes details about their temperament, age, health, and more. You can filter by species, size, or specific needs to find your perfect match.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Submit an Application</div>
//             <div className="collapse-content">
//               <p>Once you’ve found a pet you’re interested in, fill out the online adoption application. Tell us a bit about yourself, your home environment, and how you plan to care for your new companion.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Meet Your Future Pet</div>
//             <div className="collapse-content">
//               <p>If your application is approved, we’ll arrange a meet-and-greet session at our shelter or through a video call, depending on your location. This is your chance to bond with your potential pet and ask any questions.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Home Check & Final Approval</div>
//             <div className="collapse-content">
//               <p>A quick home visit (in-person or virtual) helps ensure your environment is safe and suitable for your new pet. Once everything is set, we’ll finalize the adoption.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Take Your New Friend Home</div>
//             <div className="collapse-content">
//               <p>Welcome your new family member! We’ll provide you with a starter kit, including food, toys, and a guide to help your pet adjust to their new home.</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 p-10">
//           <img src="https://img.freepik.com/free-photo/cute-brown-dog-standing-ground-with-chain_181624-61761.jpg?ga=GA1.1.1601783258.1725478357&semt=ais_hybrid" className="px-24 py-24 w-82 h-82 scale-125" alt="" />
//         </div>
//       </div>

//       <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 p-10">
//           <img src="https://img.freepik.com/free-photo/lovely-dog-posing-garden_23-2147997377.jpg?ga=GA1.1.1601783258.1725478357&semt=ais_hybrid" className="px-24 py-24 w-82 h-82 scale-125" alt="" />
//         </div>

//         <div className="w-full md:w-1/2 p-10">
//           <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Donate a Pet | Snuggle Sanctuary</h1>
//           <p className="cursor-default mt-4 text-justify">
//             When You Can No Longer Care for Your Pet
//             At Snuggle Sanctuary, we understand that life circumstances can change, and sometimes, it's no longer possible to care for a beloved pet. Whether it’s due to relocation, financial challenges, or health concerns, we are here to help ensure that your pet finds a loving new home.

//           </p>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Why Donate Your Pet to Us?</div>
//             <div className="collapse-content">
//               <p className="py-2">Donating your pet to Snuggle Sanctuary means giving them the best chance at finding a new family. We are a dedicated and compassionate team that focuses on the well-being of every animal in our care. Here’s how we help:</p>

//               <p className="py-2"><span className="font-bold text-1xl">Safe & Comfortable Transition:</span> We ensure that all animals receive the care and attention they need during the transition, including vet checks, food, and shelter.</p>

//               <p className="py-2"><span className="font-bold text-1xl">Experienced Placement:</span> With our extensive adoption network, we work to match your pet with a loving and suitable new family.</p>

//               <p className="py-2"><span className="font-bold text-1xl">Peace of Mind:</span> Know that your pet will be treated with kindness, and they will never be abandoned. We will keep you updated on the progress and adoption process.
//                 The Donation Process</p>
//               <p className="py-2">Donating your pet to Snuggle Sanctuary is designed to be straightforward, respectful, and supportive:</p>


//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Submit a Donation Request</div>
//             <div className="collapse-content">
//               <p>Fill out our online donation form with details about your pet. We’ll ask for information about their age, breed, temperament, health, and any special needs they may have.
//               </p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Pet Assessment</div>
//             <div className="collapse-content">
//               <p>After reviewing your request, we’ll schedule a time to meet your pet, either at our shelter or through a home visit. This assessment helps us understand their behavior and medical needs.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Transitioning Your Pet</div>
//             <div className="collapse-content">
//               <p>If your pet is accepted into the sanctuary, we’ll arrange for their transfer to our facility. We ensure a smooth and comfortable transition, with minimal stress for your pet.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Ongoing Care & Placement</div>
//             <div className="collapse-content">
//               <p>Once in our care, your pet will receive medical attention, including vaccinations, if needed, and will be listed for adoption. We’ll work diligently to find them a perfect forever home.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">What Happens After Donation?</div>
//             <div className="collapse-content">
//               <p>Once your pet is with us, we:</p>
//               <li>Conduct a Full Health Check: Each animal is examined by our veterinary team to address any immediate health concerns.</li>
//               <li>Start Socialization and Training: Our staff ensures that your pet is well-socialized and ready to meet potential adopters.</li>
//               <li>List for Adoption: We promote your pet on our website and through our adoption network, ensuring they find a loving, permanent home as soon as possible.</li>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 p-10">
//           <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Rescue an Animal in Need | Snuggle Sanctuary</h1>
//           <p className="cursor-default mt-4">
//             <li>When Animals Need Urgent Help</li>
//             At Snuggle Sanctuary, we are committed to rescuing animals in dangerous or neglected situations. Whether it’s an abandoned pet, a stray in distress, or an animal suffering from abuse or neglect, we step in to ensure they get the care, safety, and love they deserve.
//           </p>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">How We Rescue Animals</div>
//             <div className="collapse-content">
//               <p>Our rescue team is experienced in handling a variety of situations where animals need immediate intervention. We work closely with local authorities and animal control to provide swift assistance. Our goal is to ensure the safety and well-being of every animal that comes into our care.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Types of Rescue Cases We Handle</div>
//             <div className="collapse-content">
//               <li>Strays and Abandoned Pets: Animals left behind or lost with no one to care for them.</li>
//               <li>Abuse or Neglect: Pets suffering from physical abuse, starvation, or improper living conditions.</li>
//               <li>Injured Animals: Animals hit by vehicles, attacked by other animals, or suffering from untreated illnesses.</li>
//               <li>Emergency Situations: Natural disasters or urgent events where animals are displaced or in danger.</li>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">What Happens After Rescue?</div>
//             <div className="collapse-content">
//               <p>Once the animal is safely rescued, we follow a dedicated care process to ensure their well-being</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Immediate Medical Care</div>
//             <div className="collapse-content">
//               <p>Every rescued animal is examined by a veterinarian for injuries, illness, or any signs of trauma. We provide treatment and rehabilitation as needed.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Emotional Recovery & Socialization</div>
//             <div className="collapse-content">
//               <p>Our team works with rescued animals to help them regain trust and feel safe again, especially those who have been abused or neglected.</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 p-10">
//           <img src="https://img.freepik.com/premium-photo/portrait-dog_802928-9.jpg?ga=GA1.1.1601783258.1725478357&semt=ais_hybrid" className="sclae-125 px-24 py-24 w-81 h-81" alt="" />
//         </div>
//       </div>
//       <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 p-10">
//           <img src="https://img.freepik.com/free-photo/gold-bengal-cat-black-background_155003-10562.jpg?ga=GA1.1.1601783258.1725478357&semt=ais_hybrid" className="sclae-125 px-24 py-24 w-81 h-81" alt="" />
//         </div>

//         <div className="w-full md:w-1/2 p-10">
//           <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Online Animal Training | Snuggle Sanctuary</h1>
//           <p className="cursor-default mt-4 text-justify">
//             <li>Train Your Pet from the Comfort of Home</li>
//             At Snuggle Sanctuary, we offer online animal training programs designed to help you train your pet from the comfort of your home. With our expert trainers and interactive tools—including live sessions and training videos—you can guide your pet through the learning process, ensuring they develop into well-behaved and happy companions.
//           </p>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Why Choose Online Training?</div>
//             <div className="collapse-content">
//               <p className="py-2">Online training offers you and your pet the flexibility and support needed for success:

//                 <li>Convenient Access: Train at a time that suits your schedule.</li>
//                 <li>Step-by-Step Guidance: Follow along with detailed video tutorials and live coaching.</li>
//                 <li>Personalized Support: Get tailored advice from certified trainers, even from a distance.</li>
//                 <li>Comfortable Environment: Train in your pet’s familiar surroundings for less stress.</li>
//                 Our Online Training Programs
//                 We offer a variety of training programs, each featuring live virtual sessions, training videos, and personalized feedback. You’ll have access to a comprehensive library of instructional videos that you can rewatch at any time, making training easy and flexible.
//               </p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Basic Obedience Training</div>
//             <div className="collapse-content">
//               <p>Learn essential commands to build a strong foundation for your pet’s behavior. This course covers:
//                 <li>Sit</li>
//                 <li>Stay</li>
//                 <li>Come</li>
//                 <li>Walk on a leash</li>
//                 <li>Proper household manners</li>
//                 Included:
//                 Live Training Sessions: Interactive lessons with a certified trainer.
//                 <li>Video Tutorials: Access our video library with easy-to-follow demonstrations of each command.</li>
//                 <li>Puppy Training</li>
//                 Start your puppy off on the right paw with our puppy training program. We focus on:
//                 <ul>
//                   <li>Potty training</li>
//                   <li>Crate training</li>
//                   <li>Socialization</li>
//                   <li>Basic commands</li>
//                 </ul>
//               </p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Pet Assessment</div>
//             <div className="collapse-content">
//               <p>After reviewing your request, we’ll schedule a time to meet your pet, either at our shelter or through a home visit. This assessment helps us understand their behavior and medical needs.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Transitioning Your Pet</div>
//             <div className="collapse-content">
//               <p>If your pet is accepted into the sanctuary, we’ll arrange for their transfer to our facility. We ensure a smooth and comfortable transition, with minimal stress for your pet.</p>
//             </div>
//           </div>
//           <div tabIndex={0} className="collapse bg-base-200 mt-6">
//             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Ongoing Care & Placement</div>
//             <div className="collapse-content">
//               <p>Once in our care, your pet will receive medical attention, including vaccinations, if needed, and will be listed for adoption. We’ll work diligently to find them a perfect forever home.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default About

import React from 'react'

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row mt-28 font-bold text-2xl text-purple-500 cursor-pointer items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">About Us</h1>
      </div>
      <div className="my-2">
        <p className="text-justify md:mx-[42px] mx-8">
          Welcome to <span className="font-bold text-purple-500 text-2xl">Snuggle Century</span>, your go-to online resource dedicated to ensuring the health and happiness of your beloved animals. We believe every animal deserves a loving home and proper care, and our mission is to empower owners with the knowledge and resources needed to nurture their furry, feathered, or scaly companions.
          In addition to valuable information, Snuggle Century fosters a vibrant community of animal lovers. Connect with fellow owners to share experiences, ask questions, and build lasting friendships. We also offer resources for emergency assistance, ensuring you can quickly access local veterinarians and services when needed.
          At Snuggle Century, we understand that animals are more than just pets—they're family. Join us on this journey to create a happier, healthier world for our animals, and together, let's ensure that every creature receives the love and care they truly deserve.
        </p>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10">
          <h1 className="cursor-default text-4xl font-bold">What We Provide</h1>
          <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Adopt a Friend for Life | Snuggle Sanctuary</h1>
          <p className="cursor-default mt-4">
            Adopting a pet means gaining a loyal friend and giving an animal a second chance at a loving home. Many animals at Snuggle Sanctuary are seeking their forever families, and by adopting, you’re not just changing their lives—you’re also making space for another pet in need.
          </p>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Browse Available Animals</div>
            <div className="collapse-content">
              <p>Explore our list of adoptable animals online. Each pet’s profile includes details about their temperament, age, health, and more. You can filter by species, size, or specific needs to find your perfect match.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Submit an Application</div>
            <div className="collapse-content">
              <p>Once you’ve found a pet you’re interested in, fill out the online adoption application. Tell us a bit about yourself, your home environment, and how you plan to care for your new companion.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Meet Your Future Pet</div>
            <div className="collapse-content">
              <p>If your application is approved, we’ll arrange a meet-and-greet session at our shelter or through a video call, depending on your location. This is your chance to bond with your potential pet and ask any questions.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Home Check & Final Approval</div>
            <div className="collapse-content">
              <p>A quick home visit (in-person or virtual) helps ensure your environment is safe and suitable for your new pet. Once everything is set, we’ll finalize the adoption.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Take Your New Friend Home</div>
            <div className="collapse-content">
              <p>Welcome your new family member! We’ll provide you with a starter kit, including food, toys, and a guide to help your pet adjust to their new home.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <img src="https://img.freepik.com/premium-photo/close-up-portrait-german-shepherd-dog-black-background_1009902-83688.jpg" className="w-full h-auto rounded-lg shadow-lg" alt="" />
        </div>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10">
          <img src="https://inkanddrop.com/cdn/shop/products/1090-printonly-785362_800x.jpg?v=1698927855" className="w-full h-auto rounded-lg shadow-lg" alt="" />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Donate a Pet | Snuggle Sanctuary</h1>
          <p className="cursor-default mt-4 text-justify">
            When You Can No Longer Care for Your Pet
            At Snuggle Sanctuary, we understand that life circumstances can change, and sometimes, it's no longer possible to care for a beloved pet. Whether it’s due to relocation, financial challenges, or health concerns, we are here to help ensure that your pet finds a loving new home.
          </p>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Why Donate Your Pet to Us?</div>
            <div className="collapse-content">
              <p className="py-2">Donating your pet to Snuggle Sanctuary means giving them the best chance at finding a new family. We are a dedicated and compassionate team that focuses on the well-being of every animal in our care. Here’s how we help:</p>
              <p className="py-2"><span className="font-bold text-1xl">Safe & Comfortable Transition:</span> We ensure that all animals receive the care and attention they need during the transition, including vet checks, food, and shelter.</p>
              <p className="py-2"><span className="font-bold text-1xl">Experienced Placement:</span> With our extensive adoption network, we work to match your pet with a loving and suitable new family.</p>
              <p className="py-2"><span className="font-bold text-1xl">Peace of Mind:</span> Know that your pet will be treated with kindness, and they will never be abandoned. We will keep you updated on the progress and adoption process.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Submit a Donation Request</div>
            <div className="collapse-content">
              <p>Fill out our online donation form with details about your pet. We’ll ask for information about their age, breed, temperament, health, and any special needs they may have.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
             <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Pet Assessment</div>
             <div className="collapse-content">
               <p>After reviewing your request, we’ll schedule a time to meet your pet, either at our shelter or through a home visit. This assessment helps us understand their behavior and medical needs.</p>
             </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Transitioning Your Pet</div>
            <div className="collapse-content">
              <p>If your pet is accepted into the sanctuary, we’ll arrange for their transfer to our facility. We ensure a smooth and comfortable transition, with minimal stress for your pet.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Ongoing Care & Placement</div>
            <div className="collapse-content">
              <p>Once in our care, your pet will receive medical attention, including vaccinations, if needed, and will be listed for adoption. We’ll work diligently to find them a perfect forever home.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">What Happens After Donation?</div>
            <div className="collapse-content">
              <p>Once your pet is with us, we:</p>
              <li>Conduct a Full Health Check: Each animal is examined by our veterinary team to address any immediate health concerns.</li>
              <li>Start Socialization and Training: Our staff ensures that your pet is well-socialized and ready to meet potential adopters.</li>
              <li>List for Adoption: We promote your pet on our website and through our adoption network, ensuring they find a loving, permanent home as soon as possible.</li>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10">
          <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Rescue an Animal in Need | Snuggle Sanctuary</h1>
          <p className="cursor-default mt-4">
            <li>When Animals Need Urgent Help</li>
            At Snuggle Sanctuary, we are committed to rescuing animals in dangerous or neglected situations. Whether it’s an abandoned pet, a stray in distress, or an animal suffering from abuse or neglect, we step in to ensure they get the care, safety, and love they deserve.
          </p>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">How We Rescue Animals</div>
            <div className="collapse-content">
              <p>Our rescue team is experienced in handling a variety of situations where animals need immediate intervention. We work closely with local authorities and animal control to provide swift assistance. Our goal is to ensure the safety and well-being of every animal that comes into our care.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Types of Rescue Cases We Handle</div>
            <div className="collapse-content">
              <li>Strays and Abandoned Pets: Animals left behind or lost with no one to care for them.</li>
              <li>Abuse or Neglect: Pets suffering from physical abuse, starvation, or improper living conditions.</li>
              <li>Injured Animals: Animals hit by vehicles, attacked by other animals, or suffering from untreated illnesses.</li>
              <li>Emergency Situations: Natural disasters or urgent events where animals are displaced or in danger.</li>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">What Happens After Rescue?</div>
            <div className="collapse-content">
              <p>Once the animal is safely rescued, we follow a dedicated care process to ensure their well-being</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Immediate Medical Care</div>
            <div className="collapse-content">
              <p>Every rescued animal is examined by a veterinarian for injuries, illness, or any signs of trauma. We provide treatment and rehabilitation as needed.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Emotional Recovery & Socialization</div>
            <div className="collapse-content">
              <p>Our team works with rescued animals to help them regain trust and feel safe again, especially those who have been abused or neglected.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <img src="https://img.freepik.com/premium-photo/portrait-dog_802928-9.jpg?ga=GA1.1.1601783258.1725478357&semt=ais_hybrid"className="w-full h-auto rounded-lg shadow-lg" alt="" />
        </div>
      </div>
     
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10">
          <img src="https://img.freepik.com/free-photo/gold-bengal-cat-black-background_155003-10562.jpg?ga=GA1.1.1601783258.1725478357&semt=ais_hybrid" className="w-full h-auto rounded-lg shadow-lg" alt="" />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h1 className="cursor-default text-3xl font-serif mt-5 text-cyan-400 to stroke-neutral-600">Online Animal Training | Snuggle Sanctuary</h1>
          <p className="cursor-default mt-4 text-justify">
            <li>Train Your Pet from the Comfort of Home</li>
            At Snuggle Sanctuary, we offer online animal training programs designed to help you train your pet from the comfort of your home. With our expert trainers and interactive tools—including live sessions and training videos—you can guide your pet through the learning process, ensuring they develop into well-behaved and happy companions.
          </p>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Why Choose Online Training?</div>
            <div className="collapse-content">
              <p className="py-2">Online training offers you and your pet the flexibility and support needed for success:

                <li>Convenient Access: Train at a time that suits your schedule.</li>
                <li>Step-by-Step Guidance: Follow along with detailed video tutorials and live coaching.</li>
                <li>Personalized Support: Get tailored advice from certified trainers, even from a distance.</li>
                <li>Comfortable Environment: Train in your pet’s familiar surroundings for less stress.</li>
                Our Online Training Programs
                We offer a variety of training programs, each featuring live virtual sessions, training videos, and personalized feedback. You’ll have access to a comprehensive library of instructional videos that you can rewatch at any time, making training easy and flexible.
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Basic Obedience Training</div>
            <div className="collapse-content">
              <p>Learn essential commands to build a strong foundation for your pet’s behavior. This course covers:
                <li>Sit</li>
                <li>Stay</li>
                <li>Come</li>
                <li>Walk on a leash</li>
                <li>Proper household manners</li>
                Included:
                Live Training Sessions: Interactive lessons with a certified trainer.
                <li>Video Tutorials: Access our video library with easy-to-follow demonstrations of each command.</li>
                <li>Puppy Training</li>
                Start your puppy off on the right paw with our puppy training program. We focus on:
                <ul>
                  <li>Potty training</li>
                  <li>Crate training</li>
                  <li>Socialization</li>
                  <li>Basic commands</li>
                </ul>
              </p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Pet Assessment</div>
            <div className="collapse-content">
              <p>After reviewing your request, we’ll schedule a time to meet your pet, either at our shelter or through a home visit. This assessment helps us understand their behavior and medical needs.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Transitioning Your Pet</div>
            <div className="collapse-content">
              <p>If your pet is accepted into the sanctuary, we’ll arrange for their transfer to our facility. We ensure a smooth and comfortable transition, with minimal stress for your pet.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse bg-base-200 mt-6">
            <div className="collapse-title text-3xl text-cyan-300 font-serif hover:bg-sky-700">Ongoing Care & Placement</div>
            <div className="collapse-content">
              <p>Once in our care, your pet will receive medical attention, including vaccinations, if needed, and will be listed for adoption. We’ll work diligently to find them a perfect forever home.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About;


// import React from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       Name: data.Name,
//       State: data.State,
//       City: data.City,
//       PhoneNumber: data.PhoneNumber,
//       Email: data.Email,
//       Password: data.Password,
//     };
    
//     try {
//       const res = await axios.post("http://localhost:4002/user/Signup", userInfo);
//       console.log(res, data);
//       if (res.data) {
//         alert("Signup successful");
//       }
//       localStorage.setItem("users",JSON.stringify(res.data.user));
//     } catch (err) {
//      if(err.response){
//         console.log(err);
//         alert("Error:"+err.response.data.message);

//      }
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div id="my_modal_4">
//         <div className="modal-box ml-[31px]">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Close button */}
//             <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Signup</h3>

//             {/* Name */}
//             <div className="mt-4 space-y-2">
//               <span>Name</span>
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("Name", { required: "Name is required" })}
//               />
//               {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message}</p>}
//             </div>

//             {/* State */}
//             <div className="mt-4 space-y-2">
//               <span>State</span>
//               <br />
//               <select
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("State", { required: "State is required" })}
//               >
//                 <option value="">Select your state</option>
//                 <option value="Andhra Pradesh">Andhra Pradesh</option>
//                 <option value="Bihar">Bihar</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Karnataka">Karnataka</option>
//                 <option value="Maharashtra">Maharashtra</option>
//                 <option value="Tamil Nadu">Tamil Nadu</option>
//                 <option value="Uttar Pradesh">Uttar Pradesh</option>
//                 {/* Add more states as needed */}
//               </select>
//               {errors.State && <p className="text-red-500 text-sm">{errors.State.message}</p>}
//             </div>

//             {/* City */}
//             <div className="mt-4 space-y-2">
//               <span>City</span>
//               <br />
//               <select
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("City", { required: "City is required" })}
//               >
//                 <option value="">Select your city</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Bangalore">Bangalore</option>
//                 <option value="Chennai">Chennai</option>
//                 <option value="Hyderabad">Hyderabad</option>
//                 <option value="Patna">Patna</option>
//                 <option value="Pune">Pune</option>
//                 <option value="Lucknow">Lucknow</option>
//                 {/* Add more cities as needed */}
//               </select>
//               {errors.City && <p className="text-red-500 text-sm">{errors.City.message}</p>}
//             </div>

//             {/* Phone Number */}
//             <div className="mt-4 space-y-2">
//               <span>Phone Number</span>
//               <br />
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("PhoneNumber", { required: "Phone number is required" })}
//               />
//               {errors.PhoneNumber && <p className="text-red-500 text-sm">{errors.PhoneNumber.message}</p>}
//             </div>

//             {/* Email */}
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("Email", { required: "Email is required" })}
//               />
//               {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
//             </div>

//             {/* Password */}
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("Password", { required: "Password is required" })}
//               />
//               {errors.Password && <p className="text-red-500 text-sm">{errors.Password.message}</p>}
//             </div>

//             {/* Button */}
//             <div className="flex justify-around mt-4">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Sign Up
//               </button>
//               <p>
//                 Have an account?{" "}
//                 <button
//                   onClick={() => document.getElementById("my_modal_3").showModal()}
//                   className="underline text-blue-500 cursor-pointer"
//                 >
//                   Login
//                 </button>{" "}
//                 <Login />
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

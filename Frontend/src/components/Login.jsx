import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
    const { loginWithRedirect, isAuthenticated, isLoading, user, logout } = useAuth0();

    console.log("Authenticated:", isAuthenticated, user);
    console.log("Loading:", isLoading);

    return (
        <div className="navbar-end space-x-14">
            {isAuthenticated && 
                <h3 className="text-center">{user.name}</h3>}
            {
                isAuthenticated ? (
                    <button onClick={(e) => logout()}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 transition duration-300 ease-in-out transform hover:scale-105">
                        Logout
                        </button>
                ) : (
                    <button
                        onClick={() => loginWithRedirect()}
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Log In
                    </button>
                )
            }
        </div>
    );
};

export default Login;

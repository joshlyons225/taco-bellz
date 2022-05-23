// import files & dependencies
import React from "react";
import { Link } from "react-scroll";
import Logo1 from "../assets/images/campeon.png";

const Signup = () => {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen signup mx-auto my-auto">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <img className="mx-auto" src={Logo1} alt="logo" />
            <h1 className="mb-8 text-3xl text-center text-rose-500">SIGN UP</h1>
            <form id="signup-form">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email-signup"
                placeholder="Email"
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username-signup"
                placeholder="Username"
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password-signup"
                placeholder="Password"
              />
              <button
                type="submit"
                className="w-full text-center py-3 border-rose-500 text-rose-500 font-medium text-xs leading-tight uppercase rounded hover:bg-rose-500  hover:text-white focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            <Link
              to="loginup"
              smooth={true}
              duration={500}
              className="text-grey-500"
            >
              Already Have An Account? Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

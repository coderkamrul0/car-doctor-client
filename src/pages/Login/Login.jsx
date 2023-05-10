/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../assets/images/login/login.svg";
import google from '../../assets/images/login/google.png'
import facebook from '../../assets/images/login/facebook.png'
import linkdine from '../../assets/images/login/linkdine.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid md:grid-cols-2 w-4/5 mx-auto my-20 items-center gap-7">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div className="border border-slate-200  mx-auto p-5 md:p-20">
            <h3 className="text-center text-3xl font-bold pb-10">Login</h3>
          <form>
            <div className="mb-7">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="email"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-7">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="password"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button className="w-full bg-[#FF3811] p-2 rounded-xl text-white font-bold mb-5" type="submit" >Sign In</button>
          </form>
          <div className="">
            <p className="text-center mb-3">Or sign in with</p>
            <div className="flex justify-center gap-3">
                <button className="bg-slate-200 rounded-full p-1">
                <img className="w-6 h-6" src={facebook} alt="" />
                </button >
                <button className="bg-slate-200 rounded-full p-1">
                <img className="w-6 h-6" src={linkdine} alt="" />
                </button>
                <button className="bg-slate-200 rounded-full p-1">
                <img className="w-6 h-6" src={google} alt="" />
                </button>
            </div>
          </div>
          <p className="text-center mt-5 font-semibold"> Don't have an account? <span className="text-[#ff3811]">
                <Link to='/register'>
                Sign up</Link>
            </span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

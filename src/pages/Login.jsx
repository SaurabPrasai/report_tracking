import React from "react";
import img from '../assets/logo.jpg'

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center  ">
         <div className="flex flex-col justify-center w-[30%]">
         <img src={img} alt="" className="h-52 w-52 mx-auto" />
          <form className="flex flex-col gap-4 ">
                <input type="text" name="" id="" placeholder="Username" className="border border-black rounded-xl p-2 text-xl"/>
                <input type="password" name="" id=""  placeholder="Password" className="border border-black rounded-xl p-2 text-xl"/>
                <button className="border border-black rounded-xl p-2 text-xl bg-blue-700 text-white">Login</button>
          </form>
         </div>
    </div>
  );
};

export default Login;

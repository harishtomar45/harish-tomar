import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
// import Card from "../component/Card";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 bg-zinc-900 min-h-screen">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            My hobby projects, most of them are Reactjs apps deployed to Vercel.
          </p>
        </div>
        <div className="w-full h-px my-12 bg-zinc-800"></div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 pb-12">
          <div className="grid grid-cols-1 gap-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 p-4 md:p-8">
            <Link to={"https://mr-paratha-app.vercel.app/"}>
              {" "}
              <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer">
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">
                  Mr. Paratha
                </span>
              </h2>
            </Link>
            <p className="z-20  text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
              Paratah app where you can order paratha's for you.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 gap-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 p-4 md:p-8">
            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">portfolio</span>
            </h2>
            <p className="z-20  text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea neque sequi nisi distinctio praesentium non ratione earum 
            </p>
          </div> */}

          <div className="grid grid-cols-1 gap-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 p-4 md:p-8">
          <Link to={"https://tranding-coin-app.vercel.app"}>  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">
                Crypto Coin
              </span>
            </h2>
            </Link>
            <p className="z-20  text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
              you can see crypto coin's and see also detials about single coin
              and you add to cart and remove to cart.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 gap-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 p-4 md:p-8">
            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display cursor-pointer">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-transparent bg-clip-text">portfolio</span>
            </h2>
            <p className="z-20  text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea neque sequi nisi distinctio praesentium non ratione earum 
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

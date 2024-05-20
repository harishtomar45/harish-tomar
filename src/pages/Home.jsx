import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         <div className=" h-screen bg-black text-white  text-center grid items-center py-8 ">
        <div className="text-slate-500 text-base font-mono">
          <Link to={"/projects"}>
          <button className='duration-200 text-zinc-400 hover:text-zinc-100'>Project</button>
          </Link>
          <Link to={"/contact"}>
          <button className="mx-5 duration-200 text-zinc-400 hover:text-zinc-100">Contact</button>
          </Link>
          <button className="border-dashed border-2 border-slate-500 p-1.5 rounded duration-200 text-zinc-400 hover:text-zinc-100 ">
            Try yourself
          </button>
        </div>
        <h1 className="md:text-8xl font-bold font-sans text-5xl ">harish tomar</h1>
        <p className="text-slate-500 text-sm">
          Hi, my name is Harish tomar. 👨‍💻👩‍🍼👦👶🍵🍺🤘
          <br />
          {/* I'm building  at client IO and MindManager <br /> */}
          {/* <p className="text-slate-500 text-xs">In last 90 days on GitHub I merged 10 PRs, pushed 10 commits in public
          repositories.</p> */}
        </p>
      </div>
    </div>
  )
}

export default Home
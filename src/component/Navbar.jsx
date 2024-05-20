import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 bg-zinc-900'>
    <Link to={"/"}>
    <svg className="h-8 w-8 text-slate-300"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="9" y2="16" />  <line x1="5" y1="12" x2="9" y2="8" /></svg>
    </Link>

       <div className="text-slate-300 text-base font-mono">
       <Link to={"/projects"}>
          <button>Project</button>
          </Link>
          <Link to={"/contact"}>
          <button className="mx-5">Contact</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
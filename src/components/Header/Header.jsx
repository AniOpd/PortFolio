import React,{useState,useEffect} from 'react'

function Header() {

  return (
   <>
   <div className="navbar  bg-cyan-800 text-white max-w-full sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="bt btn btn-ghost lg:hidden" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-black">
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About Me</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href='/contact'>Contact Me</a></li>
      <li><a href="/Skills">Skills</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-xl hover:bg-cyan-800">Anish</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-11 uppercase">
    <li><a href='/' className='hover:bg-cyan-500'>Home</a></li>
      <li><a href='/about' className='hover:bg-cyan-500'>About Me</a></li>
      <li><a href="/Skills" className='hover:bg-cyan-500'>Skills</a></li>
      <li><a href="/projects"className='hover:bg-cyan-500'>Projects</a></li>
      <li><a href='/contact' className='hover:bg-cyan-500'>Contact Me</a></li>
    </ul>
  </div>
</div>
   </>
  )
}

export default Header

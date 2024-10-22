'use client'

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


type userProps = {
  user?:{
    name?:string | null | undefined;
    email?: string | null | undefined;
    image ?: string | null | undefined;
  }
}

const Nav = ({session}: {session : userProps | null}) => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div>
    <div className="navbar-start hidden lg:flex gap-10 items-center">
        <Link href='/'><h1 className=" text-md font-extrabold">Maerad</h1></Link>
        <Link href='/all'><h1 className="text-md font-bold">All</h1></Link>
        <Link href='/apparel'><h1 className="text-md font-bold">Apparel</h1></Link>
        <Link href='/accessories'><h1 className="text-md font-bold">Accessories</h1></Link>
</div>
    
    </div>
    
  </div>
  <div className="flex-none gap-5 navbar-end hidden lg:flex">
  <div className="form-control">
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered w-24 md:w-auto"
    />
  </div>
  {
    session ?.user?(
      <div className="dropdown dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost"
    >
      <div className="w-10 rounded-full">
        
        <Image 
          src={session?.user?.image}
          width={80}
          height={80}
          className="rounded-full"
          alt="user"
          />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      <li>
       
          Profile
        
      </li>
      <li>Settings</li>
      <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}> <li>Logout</li></button>
     
    </ul>
  </div>
    ):(
      <Link href='/login'><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/> </g> </svg></Link>
    )
  }
  
  
  <Link href='/cart'> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart3 h-6 w-6" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg></Link>
  
 
</div>
</div>
        </div>
    );
};

export default Nav;
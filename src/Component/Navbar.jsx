// import { useState } from "react";

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";


const Navbar = () => {
  const {user,loading,logout}= useContext(AuthContext)
    const [theme,setTheme] = useState("light")

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const item = localStorage.getItem("theme");
        
            document.querySelector("html").setAttribute("data-theme",item);
        
            },[theme])  


    const handleTheme = e => {
        if (e.target.checked) {
            setTheme("synthwave")
        }else{
            setTheme("light")
        }
      
    }
   
    

    
    const navlink = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          
            <li className="">
            <NavLink to="/addCraftItem">Add Craft Item</NavLink>
          </li>
          
          <li>
            <NavLink to="/allArtCraft">All Art & Craft Item</NavLink>
          </li>
          
            
            
              <li className="">
              <NavLink to="/myCraft">My Art & Craft List</NavLink>
            </li>
            

            {/* <li>
              <NavLink to="/logIn">LogIn</NavLink>
            </li> */}

            {/* <li>
              <NavLink to="/register">Registration</NavLink>
            </li> */}
          
    
         
        </>
    )
    return loading ? (
      <div className="flex items-center justify-center w-full h-[100vh] text-gray-100 ">
      <div>
        <h1 className="text-xl md:text-7xl font-bold flex items-center">
          L
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="animate-spin"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z" />
          </svg>{" "}
          ading . . .
        </h1>
      </div>
    </div>
     ) : (
        <div className="navbar bg-slate-800 fixed top-0 shadow-lg  z-[4] ">
        <div className="navbar-start   text-white ">
          <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          
            <ul tabIndex={0}  className="menu text-white  py-4 menu-sm dropdown-content mt-3 z-[2]  p-2 shadow   rounded-box w-52">
              
              {navlink}
            </ul>
          </div>
          
          <Link to="/" className="btn btn-ghost hidden text-4xl  md:block "><span className="text-secondary">Creative</span> Crafts</Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 text-zinc-50">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">

            {/*  */}
            <label onChangeCapture={handleTheme} className="flex text-white cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
            {/*  */}
            {user ? (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                
                <a id="clickable"><img src={user?.photoURL || <p>user</p>} alt="" /></a>
                <Tooltip anchorSelect="#clickable" clickable>
                <button> {user?.displayName || "not found"}</button>
                <div className="mt-2 rounded-md">
                <button onClick={logout} className="btn btn-sm bg-white">LogOut</button>
                </div>

                </Tooltip>
              </div>
            </label>
            {/*  */}
          
          </div>
        ) : (
          <Link to="/logIn">
            <button className="btn btn-sm bg-white text-stone-800 ml-2 mr-2">Login</button>
          </Link>
          

        )}
        {
          !user && <Link to="/register">
          <button className="btn btn-sm bg-white text-stone-800">Register</button>
        </Link>
        }
        {/* {
          user && <button onClick={logout} className="btn btn-sm bg-white">LogOut</button>
        } */}
        </div>
      </div>
    );
};

export default Navbar;




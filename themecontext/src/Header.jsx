import React, { useContext, useState } from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { Themecontext } from './context/ThemeContext';



const Header = () => {
    
    const {flag,handleToggleTheme}=useContext(Themecontext)
    
    
    
  return (
    <div>
        <div className="main" style={{
            display:"flex",
            justifyContent:"space-around",
            backgroundColor: flag ? "black" : "white" ,
            color: flag ? "white" : "black",
            }}>
            <h2 className="logo">Logo</h2>
            <div className="menu" style={{
            display:"flex",
            width:"75%",
            justifyContent:"space-around",
            alignItems:"center"}}>
                <div>Home</div>
                <div>About</div>
                <div>Privacy</div>
                <div>Service</div>
                <div>Contact</div>
            </div>
            <div className="icon" style={{marginTop:"25px",fontSize:"20px"}}>
                {
                    flag?(<IoSunnySharp  onClick={handleToggleTheme}/>):(<IoMoonSharp  onClick={handleToggleTheme}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Header
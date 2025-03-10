import React, { useContext } from 'react'
import { Themecontext } from './context/ThemeContext'


const Footer = () => {
    const {flag,handleToggleTheme}=useContext(Themecontext)
   
  return (
    <div>
        <h4 style={{backgroundColor:flag?"black":"white",
        color: flag?"white":"black",
        textAlign:"center",width:"60%",marginLeft:"280px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
    </div>
  )
}

export default Footer
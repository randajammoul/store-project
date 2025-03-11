import React ,{ useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
export default()=>{
    const [theme,setTheme]=useState(
        localStorage.getItem("theme") ?  localStorage.getItem("theme") :"light"
      )
      const element= document.documentElement;
      useEffect(()=>{
        if(theme ==="dark"){
          element.classList.add("dark")
          localStorage.setItem("theme","dark")
    
        }
        else{
          element.classList.remove("dark")
          localStorage.setItem("theme","light")
        }
    
      },[theme])
    return(<>
    <div className="gap-1 flex mt-2"> 

       <MdLightMode onClick={()=>{
            setTheme(theme ==="dark" ? "light" :"dark")
        }}  className="cursor-pointer translation-all duration-200 text-2xl text-white dark:text-black" />   
    </div>
    </>)
}
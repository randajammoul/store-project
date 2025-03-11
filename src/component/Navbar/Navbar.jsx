import React from "react";
import logo from "../../assets/logo2.png";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import DarkMode from "../DarkMode";
import { FaCaretDown } from "react-icons/fa";
const menu=[{
  id:"1",
  link:"/",
  name:"Home"
},{
  id:"2",
  link:"/Products",
  name:"Products"
},{
  id:"3",
  link:"/TopProducts",
  name:"TopProducts"
},{
  id:"4",
  link:"/Banner",
  name:"Banner",
}]
const DropdownMenu=[{
  id:"1",
  link:"#",
  name:"Home"
},{
  id:"2",
  link:"#",
  name:"TopRated"
},{
  id:"3",
  link:"#",
  name:"MenWear"
},{
  id:"4",
  link:"#",
  name:"KidsWears",
},{
  id:"5",
  link:"#",
  name:"Electronic"
}]
export default()=>{
 
    return(<>
      <div className="fixed z-10 w-full">
      <div className="shadow-md bg-white dark:bg-gray-500 dark:text-white duration-200 relative  z-40">
          {/* .....uppernavbar..... */}
          <div className="bg-primary/40 py-2">
            <div className="container flex justify-between items-center">
                    <div>
                    <a href="#" className="font-bold text-1xl sm:text-1xl flex">
                    <img src={logo} alt="logo" className="w-[45px]"/>
                    <span className="mt-4 text-[10px] sm:text-[15px]">
                      shopsy
                    </span>
                    </a>
                    </div>
                    {/* .....search and orderbutton....... */}
                    <div className="flex gap-1">
                        <div className="relative group">
                            <input type="search" placeholder="search" className="w-[90px] sm:w-[100px]
                             group-hover:w-[150px] transition-all cursor-pointer duration-300 rounded-full 
                             border border-gray-400 px-2 py-2 focus:outline-none focus:border-1 focus:border-primary"/>
                            <IoSearch className="text-gray-300 group-hover:text-primary absolute top-1/2 
                            -translate-y-1/2 right-3" />
                         </div>
                         
                    {/* .....order button....... */}
                        <button onClick={()=>{
                          alert('there isn’t found any order')
                        }} className="bg-gradient-to-r from-primary to-secondary transition-all 
                          duration-300 px-3 py-2 rounded-full text-white group flex items-center gap-1">
                          <span className="group-hover:block hidden transition-all duration-200">
                            order
                          </span>
                          <LuShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                        </button>
                       {/* dark/light mode button */}
                         <div>
                           <DarkMode/>
                         </div>
                    </div>
                   
                </div>
          </div>
            {/* .......lowernavbar..... */}
            <div className="flex justify-center dark:bg-gray-800">
              <ul className=" flex items-center gap-1">
                {
                  menu.map((data)=>{
                    return(<>
                    <li>
                      <a className="inline-block text-[8px] sm:text-[13px] md:text-[15px] px-2 hover:text-primary transition-all duration-200" href={data.link}>{data.name}</a>
                    </li>
                    </>)
                  })
                }
                {/* .......dropdownitem..... */}
                <li className="relative group inline-block">
                  <a href="" className="flex  text-[8px] sm:text-[13px] md:text-[15px] items-center gap-1 py-2 hover:text-primary">
                       Trendingprodectus
                       <span>
                        <FaCaretDown/>
                       </span>
                  </a>
                  <div className="absolute hidden group-hover:block z-[9999] border shadow-md text-black bg-white">
                    <ul>
                      {
                        DropdownMenu.map((data)=>{
                          return(<>
                            <li className="inline-block px-3 py-1  hover:bg-primary/90 transition-all duration-200 rounded-full"> 
                                <a href={data.link} className="inline-block rounded-full w-full">{data.name}</a>
                              </li>
                          </>)
                        })
                      }
                    </ul>
                  </div>
                </li>
                 
              </ul>
            </div>
          
      </div>
      </div>
    </>)
}   
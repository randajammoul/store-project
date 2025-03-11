import React from "react";
import img1 from "../../assets/shirt1.jpg";
import img2 from "../../assets/shirt2.jpg";
import img3 from "../../assets/shirt3.jpg";
import img4 from "../../assets/shirt4.jpg";
import { FaStar } from "react-icons/fa";

const TopProductsdata=[{
    id:"1",
    img:img1,
    title:"Causul wear",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique '
},{
    id:"2",
    img:img2,
    title:"Printed shirt",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique ' 
},{
    id:"3",
    img:img3,
    title:"Woman shirt",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique '
},{
    id:"4",
    img:img4,
    title:"man shirt",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique '
}]
export default()=>{
    return(<>
      
     <div className="bg-gray-100  p-5 dark:bg-gray-950 dark:text-white">
        <div className="container ">
        
             {/* headersection */}
             <div data-aos="fade-up"
              data-aos-duration="500"
               data-aos-delay="200" className="text-left mx-auto">
                <p 
                className="text-sm text-primary p-5">
                    Top Rated Prodctus for you 
                </p>
                <h1 className="text-3xl font-blod">
                  Best Products
                </h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
                    facere laborum voluptatem optio vitae quo
                </p>
            </div>
             {/* bodysection */}
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
                 place-items-center gap-5">
                
                  {
                    TopProductsdata.map((e)=>{
                        return(<>
                        <div
                         data-aos="zoom-in"
                         data-aos-delay="200" key={e.id} className="mt-20 rounded-2xl bg-white dark:bg-gray-800  hover:bg-black/80
                            hover:text-white hover:cursor-pointer duration-300 shadow-xl group max-w-[300px] ">
    
                            {/* image section  */}
                           <div className="h-[100px]">
                             <img  className="max-w-[140px] rounded-2xl mx-auto -translate-y-11 group-hover:scale-105 duration-300 " src={e.img} alt="photo" /> 
                           </div>
                           {/* details section */}
                           <div className="p-4 text-center">
                            {/* star rating */}
                            <div className="w-full flex justify-center items-center gap-1">
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/> 
                                <FaStar className="text-yellow-500"/>  
                                <FaStar className="text-yellow-500"/>  
                            </div>
                            <h1 className="text-xl font-bold">
                               {e.title}
                            </h1>
                             <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                {e.description}
                             </p>
                            <div className="flex mt-2 mb-2">
                            {/* <button className="bg-gradient-to-r from-primary to-secondary transition-all hover:scale-120
                             duration-300 px-4 py-1 rounded-full text-white group flex items-center gap-1 m-auto">
                                order Now
                            </button> */}
                         
                            </div>
                           </div>
                        </div>
                        </>)
                    })
                  }
             </div>
        </div>
     </div>
    </>)
}

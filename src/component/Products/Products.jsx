import React from "react";
import img1 from "../../assets/img-woman1.jpg";
import img2 from "../../assets/img-woman2.jpg";
import img3 from "../../assets/img-woman3.jpg";
import img4 from "../../assets/img-woman4.jpg";
import img5 from "../../assets/img-woman5.jpg";
import { FaStar } from "react-icons/fa";
const productsData =[{
    id:1,
    img:img1,
    title:"Woman Ethnic",
    rating:5.0,
    color:"white",
    aosdelay:"0"
},{
    id:2,
    img:img2,
    title:"Woman Westren",
    rating:4.5,
    color:"red",
    aosdelay:"200"
},{
    id:3,
    img:img3,
    title:"Woman Goggles",
    rating:4.7,
    color:"brown",
    aosdelay:"400"
},{
    id:4,
    img:img4,
    title:"Printed T-shirt",
    rating:4.4,
    color:"yellow",
    aosdelay:"600"
},{
    id:5,
    img:img5,
    title:"Fashion T-shirt",
    rating:4.5,
    color:"pink",
    aosdelay:"800"
}]
export default()=>{
    return(<>
       <div className="bg-gray-100  dark:bg-gray-950 dark:text-white">
         <div className="container">
            {/* headerSection */}
            <div data-aos="fade-up"
              data-aos-duration="500"
               data-aos-delay="200" className="text-center max-w-[600px] mx-auto ">
                <p 
                className="text-sm text-primary p-10">
                    Top Selling Prodctus for you 
                </p>
                <h1 className="text-3xl font-blod">
                    Products
                </h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
                     facere laborum voluptatem optio vitae quo
                </p>
            </div>
            {/* bodySection */}
            <div>
                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                  lg:grid-cols-5 place-items-center gap-5" >
                {/* card section */}
                    {
                      productsData.map((e)=>{
                        return(<>
                          <div
                          data-aos="fade-up"
                          data-aos-delay={e.aosdelay}
                           key={e.id} >
                             <img src={e.img} alt="photo" className="h-[220px] w-[220px] object-cover rounded-md"/>
                             <div>
                                <h3 className="font-semibold"> 
                                    {e.title}
                                </h3>
                                <p className="text-gray-400">
                                    {e.color}
                                </p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    <span>
                                       {e.rating}
                                    </span>
                                </div>
                             </div>
                          </div>
                        </>)
                      })
                    }
                 </div>
            </div>
         </div>
       </div>
    </>)
}
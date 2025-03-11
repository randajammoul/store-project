import React from "react";
import imagefooter from "../../assets/footer.jpg";
import logo from "../../assets/logo2.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
const backfooter ={
  backgroundImage:`url(${imagefooter})`,
  backgroundPostion:"bottom",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  width:'100%',
  height:"100%"
}
const dataLink=[{
    id:"1",
    title:"Home",
    to:"/#"
},{
    id:"2",
    title:"About",
    to:"/about" 
},{
    id:"3",
     title:"Contact",
    to:"/contact"
},{
    id:"4",
    title:"blog",
    to:"/blog"
},{
}]
export default (()=>{
    return(<>
       <div style={backfooter} className="text-white">
        <div className="container">
            <div className="grid md:grid-cols-3 pt-5 ">
               {/* company details */}
               <div>
                <div className="flex">
                   <img src={logo} alt="photo" className="w-[70px]" /> 
                    <h1 className="text-2xl font-medium mt-5">
                        shopsy
                    </h1>
                </div>
                <p className="mx-2 text-gray-200 hover:text-primary cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corporis!
                </p>
               </div>
                {/* footer links */}
                 <div className="grid grid-cols-1 sm:grid-cols-3  col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl sm:text-left font-bold text-justify mb-3">
                                Important links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                   dataLink.map((e)=>{
                                    return(<>
                                    <li className="hover:text-primary cursor-pointer" key={e.id}>
                                        <a href={e.to}>{e.title}</a>
                                    </li>
                                    </>)
                                   }) 
                                }
                            </ul>
                        </div>
                    </div>
                <div>
            
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl sm:text-left font-bold text-justify mb-3">
                                Important links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                   dataLink.map((e)=>{
                                    return(<>
                                    <li className="hover:text-primary cursor-pointer" key={e.id}>
                                        <a href={e.to}>{e.title}</a>
                                    </li>
                                    </>)
                                   }) 
                                }
                            </ul>
                        </div>
                    
                 </div>
                    <div className="py-8 px-4">
                            
                     
                        <div className="flex items-center gap-2 mt-3">
                            <FaLocationArrow/>
                            <p className="hover:text-primary cursor-pointer">
                                UAE ,DUBAI ,AL SHARQA
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                            <FaMobileAlt/>
                            <p className="hover:text-primary cursor-pointer">
                               +971 244789652
                            </p>
                        </div>
                        <div className="flex gap-2 mt-3 mx-2">
                            <a href="https://www.facebook.com">
                                <FaFacebook className="text-xl"/>
                            </a>
                            <a href="https://www.instagram.com">
                                <FaInstagram className="text-xl"/>
                            </a>
                            <a href="https://www.linkedin.com">
                                <FaLinkedin className="text-xl"/>
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
           
        </div>
       </div>
    </>)
})
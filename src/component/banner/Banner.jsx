import React from "react";
import imageBanner from "../../assets/img-woman4.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodChain, GiFoodTruck } from "react-icons/gi";
export default ()=>{
    return(<>
      <div className="flex justify-center items-center min-h-[550px] py-12  dark:bg-gray-950 dark:text-white">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
               {/* image section */}
                <div>
                <img className=" mt-8 max-w-[400px] h-[400px] w-full mx-auto drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] dark:drop-shadow-[10px_10px_12px_rgba(0,0,0,0)]"  src={imageBanner} alt="photo" />
                </div>
              {/* details section */}
                <div className="mx-auto">
                   <h1 className=" text-2xl sm:text-4xl font-bold">
                       winter sale upto 50% off
                   </h1>
                   <p className="text-sm text-gray-500 tracking-wide leading-5 mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nostrum voluptatum ipsum id possimus, 
                    ipsa, corrupti, veniam itaque libero pariatur quos.
                   </p>
                   <div className="mt-3">
                     <div data-aos="fade-up"
                     data-aos-duration="500"
                       data-aos-delay="200" className="flex items-center gap-1 p-1">
                        <GrSecure className="text-4xl h-12 w-12 p-4 rounded-full bg-violet-100 dark:bg-violet-200 " />
                        <p>
                            Quality products
                        </p>
                     </div>
                     <div data-aos="fade-up"
                      data-aos-duration="500"
                       data-aos-delay="300" className="flex items-center gap-1 p-1">
                        <IoFastFood className="text-4xl h-12 w-12 p-4 rounded-full bg-green-100 dark:bg-green-400 " />
                        <p>
                          Fast Delivery
                        </p>
                     </div>
                     <div data-aos="fade-up"
                       data-aos-duration="500"
                       data-aos-delay="400" className="flex items-center gap-1 p-1">
                        <GiFoodTruck className="text-4xl h-12 w-12 p-4 rounded-full bg-orange-100 dark:bg-orange-300 " />
                        <p>
                           Easy Payment method
                        </p>
                     </div>
                     <div data-aos="fade-up"
                       data-aos-duration="500"
                       data-aos-delay="500" className="flex items-center gap-1 p-1">
                        <GiFoodChain className="text-4xl h-12 w-12 p-4 rounded-full bg-yellow-100 dark:bg-yellow-200 " />
                        <p>
                          Get Offers
                        </p>
                     </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>)
}
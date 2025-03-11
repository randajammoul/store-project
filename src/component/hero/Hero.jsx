import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/man.png";
import image2 from "../../assets/woman.png";
import image3 from "../../assets/sale.png";
const imagelist=[{
    id:"1",
    img:image1,
    title:"Up to 50% off on all Men's wear",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique '
},{
    id:"2",
    img:image2,
    title:"Up to 50% off on all woman's wear",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique ' 
},{
    id:"3",
    img:image3,
    title:"Up to 50% off on all sale wear",
    description:'lorem his life will forever be changed dolar site amet consectetur adipiscing elite ,sed do eiusumod tempor incididunt ut labore et dolare magna alique '
}]
const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay:true,
    autoplaySpeed:4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
export default ()=>{

    return(<>
      <div className="relative overflow-hidden min-h-[550px]
      sm:min-h-[650px] bg-gray-100 flex justify-center items-center
       dark:bg-gray-950 dark:text-white  duration-200 ">
          {/* .......baground...... */}
          <div className="h-[560px] w-[560px] bg-primary/40
          absolute -top-3/4 right-0  rounded-3xl rotate-45 ">
          </div>
          {/* .......hero section...... */}
          <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {
                imagelist.map((e)=>{
                    return(<>
                        <div>
                 <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* ......text-section...... */}
                    <div  data-aos="zoom-in"
                      data-aos-duration="500"className="relative mt-10 sm:text-center order-2 sm:order-1 text-center"> 
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">{e.title}</h1>
                        <p>
                       {e.description}
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary group hover:scale-125 mt-5 transition-all px-2 py-2
                             duration-200 rounded-full text-white">
                                orderNow
                            </button>
                       </div>
                    </div>
                    {/* imagesection */}
                    <div data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-once= "true"
                     className="order-1 sm:order-2 ">
                        <div className="relative z-10">
                            <img src={e.img} alt="imageman"
                            className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] object-contain mx-auto " />
                        </div>
                    </div>
                    
                 </div>
              </div>
                    </>)
                })
            }
        
              </Slider>
          </div>
      </div>
    
    </>)
}
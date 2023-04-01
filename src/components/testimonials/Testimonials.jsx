import React, { useEffect } from "react";
import "./testimonials.css";
import { data } from "./data";
import Swiper, { Navigation, Pagination, SwiperSlide } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      
      speed: 400,
      
      slidesPerView: 1,
      spaceBetween: 50,
      // initialSlide: 1,
      
      
      // Optional parameters
      direction: "horizontal",
      loop: true,
  
      // If we need pagination
      pagination: {
        clickable:true,
        el: ".swiper-pagination",
      },
  
      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
  
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    


    });

    swiper.on("slideChange", function () {
      swiper.pagination.update();
    
    });
  
    return () => {
      swiper.destroy(true, true);
    }
    
    
  },[])
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="swiper container testimonials__container">
        <div className="swiper-wrapper">
          {data.map((item, index) => {
            return (
              <div key={item.id} className="swiper-slide testimonials">
                <div className="client__avatar">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <h5 className="client__name">{item.name}</h5>
                <small className="client__review">{item.review}</small>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>

    

        <div className="swiper-scrollbar"></div>
      </div>
    </section>
  );
}

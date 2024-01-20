import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide,useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import "./Slide.css"


export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SlideButtons/>
        <SwiperSlide className='photo-slide'><img src="./r1.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./r3.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./r5.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./r6.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./contact.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./value.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./img9.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./r4.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="./r2.png" alt="image" className='slide-image' /></SwiperSlide>
      </Swiper>
    </>
  );
}

const SlideButtons=()=>{
  const swiper=useSwiper();
  return(
      <div className="s-buttons">
          <button className='s-button' onClick={()=>swiper.slidePrev()}>&lt;</button>
          <button className='s-button' onClick={()=>swiper.slideNext()}>&gt;</button>
      </div>
  )
}
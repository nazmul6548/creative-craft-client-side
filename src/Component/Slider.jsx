import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className=''>
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/XZ2CcN2/pexels-cottonbro-5137818.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Lamp working 1</h6>
          <p>Lampworking is a type of glasswork in which a torch or lamp is used to melt the glass. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/XFMpvQY/pexels-pixabay-161043.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Glass Dying</h6>
          <p>Coloring glass with food coloring is faster and less expensive; however, it should </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/4Jttpdf/artem-beliaikin-T368-H1-Xvi9-I-unsplash.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'> Wooden jewellery</h6>
          <p> We are famed for our handmade wooden jewellery and have been designing </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8rrqw2q/pexels-laarkstudio-8187054.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Table Design</h6>
          <p>f you entertain guests often, get a modern center table design that is spill-resistant and durable </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/c1mhCRz/pexels-castorlystock-3951835.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Card Making</h6>
          <p>This charming greeting card brings the whimsy of an enchanted garden to life! </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Hh0PJwV/pexels-imagescosy-9315027.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Scrapbooking</h6>
          <p>Scrapbooking is a method of preserving, presenting, and arranging personal and family history </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/bgY4hGM/pexels-cottonbro-5190683.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'> Paper Quilling & origami
</h6>
          <p>Origami is the art of paper folding into decorative shapes and figures. Whereas Quilling is the art </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/4PHBc7K/pexels-pavel-danilyuk-7674575.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Painting</h6>
          <p>Painting is an important form of visual art, bringing in elements such as drawing, composition! </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/p0bqGKY/pexels-evie-shaffer-1259279-2395249.jpg" />
          <div className='text-center bg-white p-6 shadow-md text-black'>
          <h6 className='font-bold p-2'>Flower with paper</h6>
          <p>A comprehensive collection of all of our paper flower tutorials for crepe paper flowers, paper plants! </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
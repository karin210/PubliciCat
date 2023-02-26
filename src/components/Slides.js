import '../styles/slides.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      loop={true}
      autoplay={true}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img alt='Activaciones Empresariales' src='https://corporacionimagen.com/wp-content/uploads/2019/09/05-09-Partido-Guatemala-vs-Anguila-265.jpg'/><span>Activaciones Empresariales</span>
      </SwiperSlide>
      <SwiperSlide>
        <img alt='Audio' src='https://images.unsplash.com/photo-1528724747537-1634153aa3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        <span>Audio PRO</span></SwiperSlide>
      <SwiperSlide>
        <img alt='Marketing' src='https://images.unsplash.com/photo-1598826867442-9ef9e2527b1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
        <span>Marketing</span>
      </SwiperSlide>
    </Swiper>
  );
};
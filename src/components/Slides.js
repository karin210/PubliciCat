import '../styles/slides.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      loop={true}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='https://corporacionimagen.com/wp-content/uploads/2019/09/05-09-Partido-Guatemala-vs-Anguila-265.jpg'/>
      </SwiperSlide>
      <SwiperSlide><img src='https://www.softzone.es/app/uploads-softzone.es/2021/08/sonido-windows.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/></SwiperSlide>
      <SwiperSlide><img src='https://images.unsplash.com/photo-1598826867442-9ef9e2527b1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/></SwiperSlide>
    </Swiper>
  );
};
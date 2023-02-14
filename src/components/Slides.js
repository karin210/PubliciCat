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
      <SwiperSlide><img src='https://scontent.fmlm4-1.fna.fbcdn.net/v/t31.18172-8/14543790_874661719331013_8906457848622013803_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=f_sWj9ghmLkAX840CDJ&_nc_ht=scontent.fmlm4-1.fna&oh=00_AfDY70wKSuJiqsDCtJDdNUeBfxgHdTieiZb0_JTj6p-95Q&oe=63FE4812'/>
      </SwiperSlide>
      <SwiperSlide><img src='https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://www.shutterstock.com/image-illustration/triangle-solid-black-golden-illustration-260nw-1862937556.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://images5.alphacoders.com/112/1123013.jpg'/></SwiperSlide>
    </Swiper>
  );
};
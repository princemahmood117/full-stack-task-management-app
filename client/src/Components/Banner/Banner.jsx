
import slider1 from "../../assets/burger.png";
import slider2 from "../../assets/chicken-fry.png";
import slider3 from "../../assets/curry.png";
import slider4 from "../../assets/cutlet.png";
import slider5 from "../../assets/salad.png";
import slider6 from "../../assets/soup.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (

    <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="slider3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="slider4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="slider5" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider6} alt="slider6" />
        </SwiperSlide>
       
      </Swiper>
  );
};

export default Banner;

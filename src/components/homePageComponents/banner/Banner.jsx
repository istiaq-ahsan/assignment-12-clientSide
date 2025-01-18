// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/dumbleton-hall.jpg";
import image2 from "../../../assets/front-view-cheerful.jpg";
import image3 from "../../../assets/groom-putting-ring.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
  return (
    <>
      <div className="h-[70vh]">
        <Swiper
          style={{ height: "100%" }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect="fade" // Enable fade effect
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={image3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

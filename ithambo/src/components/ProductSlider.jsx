import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductSlider = () => {
  const testData = [
    {
      name: "Lamp",
      price: 620,
      description: "Metallic accent copper lamp.",
      img: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      name: "Smart Watch",
      price: 5300,
      description:
        " a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. ",
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      name: "Smart Watch",
      price: 5300,
      description:
        " a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. ",
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {testData.map((item) => (
        <SwiperSlide>
          <div className="slide">
            <div className= "inner">
            <img src={item.img} />
            <div className= "product-description">
              <h3>{item.name}</h3>
              <p>R {item.price}</p>
              <p>{item.description}</p>
            </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;

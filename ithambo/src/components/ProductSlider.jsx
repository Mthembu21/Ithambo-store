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
      name: "L",
      price: 250,
      description: "Hair cutter machine.",
      img: "https://media.takealot.com/covers_images/2795640b524e49e7ba0ec8382b41c976/s-zoom.file",
    },
    {
      name: "two pin light bulbs",
      price: 200,
      description:
        " Two pin light bulbs for vw cars. ",
      img: "data:image/jpeg;base64,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",
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

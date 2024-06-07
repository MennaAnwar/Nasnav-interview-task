import React, { Component } from "react";
import arrow360 from "../../images/360.svg";
import "./Swiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

class ImgSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: props.imgs[0],
    };
  }

  handleImageClick = (image) => {
    this.setState({ activeImage: image });
  };

  render() {
    const { imgs } = this.props;
    const { activeImage } = this.state;

    // Filter out the active image from the carousel images
    const carouselImages = imgs.filter((img) => img !== activeImage);

    return (
      <>
        <div className="d-flex justify-content-center active">
          <img src={activeImage} alt="active-img" />
          <img src={arrow360} alt="360" className="arrow-360" />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-3"
        >
          {carouselImages.map((el, idx) => (
            <SwiperSlide>
              <img
                className="product-img"
                src={el}
                alt={`img-${idx}`}
                key={idx}
                onClick={() => this.handleImageClick(el)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}

export default ImgSwiper;

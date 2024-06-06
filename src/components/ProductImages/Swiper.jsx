import React, { Component } from "react";
import Carousel from "@jjunyjjuny/react-carousel";
import arrow360 from "../../images/360.svg";
import "./Swiper.scss";

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: props.imgs[0], // Set the first image as the initial active image
    };
  }

  handleImageClick = (image) => {
    this.setState({ activeImage: image });
  };

  render() {
    const { imgs } = this.props;
    const { activeImage } = this.state;

    return (
      <>
        <div className="d-flex justify-content-center active my-3">
          <img src={activeImage} alt="active-img" />
          <img src={arrow360} alt="360" className="arrow-360" />
        </div>
        <Carousel itemCountPerPanel={4}>
          {imgs.map((el, idx) => (
            <img
              className="product-img"
              src={el}
              alt={`img-${idx}`}
              key={idx}
              onClick={() => this.handleImageClick(el)}
            />
          ))}
        </Carousel>
      </>
    );
  }
}

export default Swiper;

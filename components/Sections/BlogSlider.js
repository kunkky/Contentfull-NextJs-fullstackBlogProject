import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function BlogSlider({ blogs }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {blogs.map((items) => (
          <div className="relative h-[400px] w-full">
            <Image
              src={`https:${items?.fields?.featureImage?.fields?.file?.url}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BlogSlider;

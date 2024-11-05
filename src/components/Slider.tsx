import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderComponentProps {
    photos?: string[];
    altText?: string;
    children?: React.ReactNode;
    slidesToShow?: number;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
                                                             photos,
                                                             altText = "slide image",
                                                             children,
                                                             slidesToShow = 1
                                                         }) => {
    const settings = {
        gap: 40,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Slider {...settings} className={children ? "info-slider" : "photo-slider"} dots={!children}>
            {children ? children : (photos?.map((photo, index) => (
                    <div key={index}>
                        <img src={photo} alt={`${altText} ${index + 1}`}/>
                    </div>
                ))
            )}
        </Slider>
    );
};

export default SliderComponent;

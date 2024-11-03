// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//
// const NextArrow = ({ onClick }) => (
//     <div
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10"
//         onClick={onClick}
//     >
//         <FontAwesomeIcon icon={faChevronRight} />
//     </div>
// );
//
// const PrevArrow = ({ onClick }) => (
//     <div
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10"
//         onClick={onClick}
//     >
//         <FontAwesomeIcon icon={faChevronLeft} />
//     </div>
// );
//
// const CustomDots = ({ dots, activeIndex }) => (
//     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {dots.map((dot, index) => (
//             <div
//                 key={index}
//                 className={`w-3 h-3 rounded-full cursor-pointer ${activeIndex === index ? 'bg-white' : 'bg-gray-400'}`}
//                 onClick={dot.props.onClick}
//             />
//         ))}
//     </div>
// );
//
// const ProjectSlider = ({ project, title }) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         appendDots: (dots) => <CustomDots dots={dots} activeIndex={settings.initialSlide} />,
//         customPaging: (i) => <div className="dot" /> // For custom dots styling
//     };
//
//     return (
//         <Slider {...settings} className="relative w-1/2">
//             <div>
//                 <img src={project.image} alt={title} className="w-full h-auto" />
//             </div>
//             <div>
//                 <img src={project.image} alt={title} className="w-full h-auto" />
//             </div>
//         </Slider>
//     );
// };
//
// export default ProjectSlider;

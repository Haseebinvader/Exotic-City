import { Carousel, CarouselItem } from "react-bootstrap";
import image1 from '../assets/jpeg/banner.jpg';
import image2 from '../assets/jpeg/banner2.jpg';
import image3 from '../assets/jpeg/banner3.jpg';
import image4 from '../assets/jpeg/banner4.jpg';
import image5 from '../assets/jpeg/banner5.jpg';
import image6 from '../assets/jpeg/banner6.jpg';
import image7 from '../assets/jpeg/banner7.jpg';
import image8 from '../assets/jpeg/banner8.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [image5, image1, image2, image3, image4, image6, image7, image8];

const ImageCarousel = () => {
    return (
        <Carousel
            autoPlay
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible
        >
            {images.map((image, index) => (
                <CarouselItem key={index}>
                    <img src={image} alt={`Image ${index}`} style={{ height: '40rem', width: '100%' }} />
                </CarouselItem>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;

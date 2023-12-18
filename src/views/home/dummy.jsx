// import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem, Carousel } from 'react-bootstrap';
import banner1 from '../../assets/jpeg/banner.jpg';
import banner2 from '../../assets/jpeg/banner2.jpg';
import banner3 from '../../assets/jpeg/banner3.jpg';
import banner4 from '../../assets/jpeg/banner4.jpg';
import banner5 from '../../assets/jpeg/banner5.jpg';
const images = [banner1, banner2, banner3, banner4, banner5]
function UncontrolledExample() {
    return (
        <Carousel autoPlay animation="slide" indicators={false} navButtonsAlwaysVisible>
            {images.map((item, index) => (
                <CarouselItem key={index}>
                    <img src={item} alt="123" />
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default UncontrolledExample;
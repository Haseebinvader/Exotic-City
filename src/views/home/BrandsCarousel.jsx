import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

// Import your brand images
import brand1 from '../../assets/brands/africa.jpg';
import brand2 from '../../assets/brands/care.jpg';
import brand3 from '../../assets/brands/chez.jpg';
import brand4 from '../../assets/brands/congo.jpg';
import brand5 from '../../assets/brands/desi.jpg';
import brand6 from '../../assets/brands/exotic.jpg';
import brand7 from '../../assets/brands/mr.jpg';
import brand8 from '../../assets/brands/nuts.jpg';
import brand9 from '../../assets/brands/royal.jpg';
import brand10 from '../../assets/brands/thai.jpg';
import brand11 from '../../assets/brands/utouch.jpg';
import brand12 from '../../assets/brands/village.jpg';
import './style.css'

// Array of dummy image URLs
const dummyImages = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12
];

const BrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 8, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10, // Autoplay speed in milliseconds
  };

  return (
    <>
      <div style={{ maxWidth: '95%', margin: '0 auto', height: '10rem' }} >
        <Slider {...settings}>
          {dummyImages.map((image, index) => (
            <Box key={index} textAlign="center">
              <img className="hover-zoom"  src={image} alt={`Brand ${index}`} style={{ maxWidth: '100%', cursor: 'pointer',transition: 'transform 0.2s', }} />
            </Box>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BrandCarousel;

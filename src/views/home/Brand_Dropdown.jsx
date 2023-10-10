import { Grid } from "@mui/material";
import brand1 from '../../assets/brands/africa.jpg'
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

const items = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand6 },
    { image: brand7 },
    { image: brand8 },
    { image: brand9 },
    { image: brand10 },
    { image: brand11 },
    { image: brand12 },
];

const Brand_Dropdown = () => {
    return (
        <div>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left', height: '10rem', width: '100%' }}>
                {items.slice(0, 6).map((item, index) => (
                    <Grid item key={index}>
                        <img src={item.image} alt={`Brand ${index + 1}`} style={{ width: '100px', height: '100px' }} />
                    </Grid>
                ))}
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'left', height: '10rem', width: '100%' }}>
                {items.slice(6, 12).map((item, index) => (
                    <Grid item key={index}>
                        <img src={item.image} alt={`Brand ${index + 7}`} style={{ width: '100px', height: '100px' }} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Brand_Dropdown;

import { Box, Grid, Typography } from "@mui/material";
// import Image from '../assets/png/mrexotic.png';
import Image from '../../assets/png/mrexotic.png'
import background from '../../assets/png/background.jpg'
const Promo = () => {
    const containerStyle = {
        position: "relative",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
    };

    const overlayStyle = {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        filter: "blur(1px)",
        opacity: 1,
    };


    return (
        <Grid container style={containerStyle}>
            <Box style={overlayStyle}></Box>
            <Grid item justifyContent="space-evenly" alignItems="center" textAlign="center" position="relative" display="flex" gap="15rem">
                <Box>
                    <Typography sx={{ fontSize: '4rem', width: '40rem', textAlign: 'center' , fontWeight: '600' }} >
                        Discover Our Exclusive Brands!
                    </Typography>
                </Box>
                <Box><img src={Image} alt="" /></Box>
            </Grid>
        </Grid>
    );
};

export default Promo;

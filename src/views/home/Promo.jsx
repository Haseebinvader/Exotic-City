import { Box, Grid, Typography } from "@mui/material";
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
        opacity: 1,
        backgroundColor: "black",
    };

    return (
        <Grid container style={containerStyle}>
            <Box style={overlayStyle}></Box>
            <Grid item alignItems="center" textAlign="center" position="relative" display="flex"
                sx={{
                    flexDirection: { xs: 'column', md: 'row', lg: 'row' }, gap: '2rem', justifyContent: "space-evenly",
                    alignItems: "center", textAlign: "center", position: "relative", display: "flex",
                    "& img": { width: { xs: '80%', md: 'auto', lg: 'auto' }, height: 'auto', maxWidth: '100%', maxHeight: '100%', },
                    "& .text-box": { width: { xs: '80%', md: '30rem', lg: '30rem' } },
                }} >
                <Box className="text-box">
                    <Typography sx={{ fontSize: '3rem', width: '100%', textAlign: 'center', fontWeight: '600' }}> Discover Our Exclusive Brands!</Typography>
                </Box>
                <Box> <img src={Image} alt="" /> </Box>
            </Grid>
        </Grid>
    );
};

export default Promo;

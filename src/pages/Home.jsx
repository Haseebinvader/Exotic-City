import { Box } from "@mui/material"
import Nav_Header from "../components/Nav_Header"
import Nav_Search from "../components/Nav_Search"
import Headline from "../components/Headline"
import Products from "../components/Products"
import Banner from "../components/Banner"
import BrandCarousel from "../components/BrandsCarousel"

const Home = () => {
    return (
        <>
            <Headline />
            <Box sx={{ height: '8rem' }}>  <Nav_Header />  <Nav_Search /> </Box>
            <Box sx={{ mt: '2rem' }}> <Banner />  </Box>
            <Box sx={{ backgroundColor: '#193460', mt: '2px' }}> <Products /> </Box>
            <Box> <BrandCarousel/> </Box>
        </>
    )
}

export default Home
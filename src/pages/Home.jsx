import { Box } from "@mui/material"
import Nav_Header from "../components/Nav_Header"
import Nav_Search from "../components/Nav_Search"
import Headline from "../components/Headline"
import Products from "../components/Products"

const Home = () => {
    return (
        <>
            <Box sx={{ color: '#fff', backgroundColor: '#193460', height: '8rem' }}>
                <Nav_Header />
                <Nav_Search />
            </Box>
            <Box pt='8px'>
                <Headline />
            </Box>
            <Box sx={{backgroundColor: '#193460'}}>
                <Products />
            </Box>
        </>
    )
}

export default Home
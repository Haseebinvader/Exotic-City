/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import Headline from "../views/home/Headline"
import Nav_Header from "../views/home/Nav_Header"
import Nav_Search from "../views/home/Nav_Search"
import Footer from "../views/home/Footer"

const Layout = ({ children }) => {
    return (
        <Box>
            <Headline />
            <Nav_Header />
            <Nav_Search />
            {children}
            <Footer />
        </Box>
    )
}

export default Layout
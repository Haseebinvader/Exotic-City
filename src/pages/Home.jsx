import Headline from '../views/home/Headline'
import Nav_Header from '../views/home/Nav_Header'
import Nav_Search from '../views/home/Nav_Search'
import Banner from '../views/home/Banner'
import Products from '../views/home/Products'
import BrandCarousel from '../views/home/BrandsCarousel'
import Promo from '../views/home/Promo'
import Footer from '../views/home/Footer'
const Home = () => {
    return (
        <>
            <Headline />
            <Nav_Header />
            <Nav_Search />
            <Banner />
            <Products />
            <BrandCarousel />
            <Promo />
            <Footer />
        </>
    )
}

export default Home
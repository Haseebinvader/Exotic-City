import Banner from '../views/home/Banner'
import Products from '../views/home/Products'
import BrandCarousel from '../views/home/BrandsCarousel'
import Promo from '../views/home/Promo'
import Services from '../views/home/Services'
const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Products />
            <BrandCarousel />
            <Promo />
        </>
    )
}

export default Home
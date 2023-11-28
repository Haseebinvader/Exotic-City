import Banner from '../views/home/Banner'
import Products from '../views/home/Products'
import BrandCarousel from '../views/home/BrandsCarousel'
import Promo from '../views/home/Promo'
import Services from '../views/home/Services'
import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const usenavigate = useNavigate()
    useEffect(() => {
        let userId = sessionStorage.getItem('useriD');
        if (userId === '' || userId === null) {
            usenavigate('/Login')
        }
    }, [])
    return (
        <Fragment>
            <Banner />
            <Services />
            <Products />
            <BrandCarousel />
            <Promo />
        </Fragment>
    )
}

export default Home
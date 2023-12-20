import { Home, About, Contact, Legal, Login, Services, Items, ProductDescription, Cart } from "../Pages";

const AllRoutes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Contact', component: Contact },
    { path: '/Legal', component: Legal },
    { path: '/Login', component: Login },
    { path: '/Services', component: Services },
    { path: '/Products/:category', component: Items },
    { path: '/ProductsDescription/:id', component: ProductDescription },
    { path: '/Cart', component: Cart }
]

export { AllRoutes }
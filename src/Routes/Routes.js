import { Home, About, Contact, Legal, Login, Services, Items, ItemsDescription, Cart } from "../Pages";

const AllRoutes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Contact', component: Contact },
    { path: '/Legal', component: Legal },
    { path: '/Login', component: Login },
    { path: '/Services', component: Services },
    { path: '/Products/:category', component: Items },
    { path: '/ItemsDescription', component: ItemsDescription },
    { path: '/Cart', component: Cart }
]

export { AllRoutes }
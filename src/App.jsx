import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Food from "./pages/Product_Pages/Food"
import Cosmetics from "./pages/Product_Pages/Cosmetics"
import Hair from "./pages/Product_Pages/Hair"

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Drinks" element={<Food />} />
            <Route path="/Cosmetics" element={<Cosmetics />} />
            <Route path="/Hair" element={<Hair />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  )
}

export default App

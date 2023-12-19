import { Suspense, createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "./Routes/Routes";
import './App.css';
export const Context = createContext();
function App() {

  //    States
  const [counts, setCounts] = useState({});
  const [data, setData] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(parseInt(localStorage.getItem('itemsPerPage'), 10) || 10);
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage'), 10) || 1);


  return (
    <Context.Provider value={[counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices]}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <ToastContainer />
            <Routes>
              {AllRoutes.map((item, index) => (
                <Route path={item.path} element={<item.component />} key={index} exact={true} />
              ))}
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

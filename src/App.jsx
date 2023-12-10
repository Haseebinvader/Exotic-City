/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Products from "./pages/Product_Pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product_Description from "./pages/Product_Pages/Product_Description";
import Login from "./pages/Login";
import RequestQuote from "./pages/RequestQuote";
import './App.css';
import LegalNotice from "./pages/LegalNotice";
import { ToastContainer } from "react-toastify";
import axios from "axios";
export const Context = createContext();
function App() {
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhLyIsImlhdCI6MTcwMjIwMjE4MywibmJmIjoxNzAyMjAyMTgzLCJleHAiOjE3MDIyMDYwODMsImFpbyI6IkUyVmdZRWcreWFyU1p1WEFlckZsRXVQR2pMVGxBQT09IiwiYXBwaWQiOiJhODM5MWI5Yy00NTgzLTQ2YzMtYTQ0OS1hMGRlNmUxOTkxNjEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83Yzg4NWZhNi04NTcxLTRjNzYtOWUyOC04ZTUxNzQ0Y2Y1N2EvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI1ZmNkNzk2Yy1kNWE0LTRiYzAtOWRkMS02YmQyMmZhNWFlZjUiLCJyaCI6IjAuQVF3QXBsLUlmSEdGZGt5ZUtJNVJkRXoxZWozdmJabHNzMU5CaGdlbV9Ud0J1SjhNQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiNWZjZDc5NmMtZDVhNC00YmMwLTlkZDEtNmJkMjJmYTVhZWY1IiwidGlkIjoiN2M4ODVmYTYtODU3MS00Yzc2LTllMjgtOGU1MTc0NGNmNTdhIiwidXRpIjoiWVFjVDFteEN5VWlzREFmemV5d3RBQSIsInZlciI6IjEuMCJ9.RqMQ6wtUhapiPh522ez3riYXWiyBbkd5eNhAv7ni7FnI3DYwSWPfV75WBhdwDCq0MgtxjgO85k83u9_6n3DP5qeF1f-9aCe7dBgi0tuXUBkaucKCo74P1PIu7O-6cYtX4p3tm9UMqNwyOxNIvM-ZpsI5gBpvIkbWjv-UpAaEV4Pio9CeY5u0Hd750NGoFnWmCh_HA1O6dn4AoyFbrW2169tPp4gWRbdTvqrA1w5CBzQAdMJcrQOXaCQl8rD4mgOQ7WmIv8_edyp-NG_JMYLuEUGIPZX14DsUe30y7FmZC_7PEUp_xjCxCWVY5demZB0dWl9pMaNwY-TiKa8bY7eogw';

  //    States
  const [counts, setCounts] = useState({});
  const [data, setData] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(parseInt(localStorage.getItem('itemsPerPage'), 10) || 10);
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage'), 10) || 1);
  const [pricePerPage, setPricePerPage] = useState(itemsPerPage * 50);

  // API CALLS
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.businesscentral.dynamics.com/v2.0/7c885fa6-8571-4c76-9e28-8e51744cf57a/Sandbox1/ODataV4/Company(%27My%20Company%27)/ItemApi?$top=${itemsPerPage}&$skip=${(currentPage - 1) * itemsPerPage}`, {
          headers: { "Authorization": `Bearer ${accessToken}` },
        });
        setData(res.data.value);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    setCounts((prevCounts) => {
      const initialCounts = {};
      data.forEach((_, index) => { initialCounts[index] = prevCounts[index] || 0; });
      return initialCounts;
    });
    if (currentPage === 1) { fetchData(); }
  }, [currentPage, itemsPerPage, accessToken]);



  // Price API
  useEffect(() => {
    const fetchPrices = async () => {
      try {

        const response = await fetch(`https://api.businesscentral.dynamics.com/v2.0/Sandbox1/api/bctech/demo/v2.0/Companies(f03f6225-081c-ec11-bb77-000d3abcd65f)/SalesPrice?$top=${pricePerPage}&$skip=${(currentPage - 1) * itemsPerPage}`, {
          headers: { "Authorization": `Bearer ${accessToken}` },
        });

        const data = await response.json();
        console.log('Fetched prices:', data.value);
        setPrices(data.value);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, [currentPage, accessToken, itemsPerPage]);
  return (
    <Context.Provider value={
      [counts, setCounts, data, setData, loading, setLoading, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, prices, setPrices]
    }>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products/:category" element={<Products />} />
              <Route path="/ProductDescription" element={<Product_Description />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Requestaquote" element={<RequestQuote />} />
              <Route path="/Legalnotice" element={<LegalNotice />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

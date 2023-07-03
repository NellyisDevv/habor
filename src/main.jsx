import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop/Shop'
import ProductDetail from './pages/Shop/ProductDetail'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Layout from './components/Layout/Layout'
import HostLayout from './components/Layout/HostLayout'
import Products from './pages/Host/Products/ProductsListed'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductsListed from './pages/Host/Products/ProductsListed'
import ProductsListedDetail from './pages/Host/Products/ProductDetails/ProductsListedDetail'
import SellerDetail from './pages/Host/Products/ProductDetails/SellerDetail'
import SellerPricing from './pages/Host/Products/ProductDetails/SellerPricing'
import SellerPhotos from './pages/Host/Products/ProductDetails/SellerPhotos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/:id' element={<ProductDetail />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<Cart />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='products' element={<ProductsListed />} />
            <Route path='products/:id' element={<ProductsListedDetail />}>
              <Route index element={<SellerDetail />} />
              <Route path='pricing' element={<SellerPricing />} />
              <Route path='photos' element={<SellerPhotos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products, { loader as productsLoader } from './pages/Products/Products'
import ProductDetail, {
  loader as productDetailLoader,
} from './pages/Products/ProductDetail'
import Dashboard, { loader as dashboardLoader } from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostProducts, {
  loader as hostProductsLoader,
} from './pages/Host/HostProducts'
import HostProductDetail, {
  loader as hostProductDetailLoader,
} from './pages/Host/HostProductDetail'
import HostProductInfo from './pages/Host/HostProductInfo'
import HostProductPricing from './pages/Host/HostProductPricing'
import HostProductPhotos from './pages/Host/HostProductPhotos'
import NotFound from './pages/NotFound'
import Login, {
  loader as loginLoader,
  action as loginAction,
} from './pages/Login'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Error from './components/Error'
import Cart from './pages/Cart'
import '../index.css'
import AuthRequired from './components/AuthRequired'
localStorage.removeItem('loggedin')

// import '../server'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path='cart' element={<Cart />} />
      <Route
        path='shop'
        element={<Products />}
        errorElement={<Error />}
        loader={productsLoader}
      />
      <Route
        path='shop/:id'
        errorElement={<Error />}
        element={<ProductDetail />}
        loader={productDetailLoader}
      />

      <Route element={<AuthRequired />}>
        <Route path='host' element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            errorElement={<Error />}
            loader={dashboardLoader}
          />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route
            path='products'
            element={<HostProducts />}
            errorElement={<Error />}
            loader={hostProductsLoader}
          />
          <Route
            path='products/:id'
            errorElement={<Error />}
            element={<HostProductDetail />}
            loader={hostProductDetailLoader}
          >
            <Route index element={<HostProductInfo />} />
            <Route path='pricing' element={<HostProductPricing />} />
            <Route path='photos' element={<HostProductPhotos />} />
          </Route>
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

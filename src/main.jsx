import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop, { loader as shopPageLoader } from './pages/Shop/Shop'
import ProductDetail, {
  loader as productDetailLoader,
} from './pages/Shop/ProductDetail'
import Dashboard, {
  loader as dashboardPageLoader,
} from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Layout from './components/Layout/Layout'
import HostLayout from './components/Layout/HostLayout'
import Products from './pages/Host/Products/ProductsListed'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductsListed, {
  loader as productsListedLoader,
} from './pages/Host/Products/ProductsListed'
import ProductsListedLayout, {
  loader as productsListedLayoutLoader,
} from './components/Layout/ProductsListedLayout'
import SellerDetail from './pages/Host/Products/ProductDetails/SellerDetail'
import SellerPricing from './pages/Host/Products/ProductDetails/SellerPricing'
import SellerPhotos from './pages/Host/Products/ProductDetails/SellerPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='shop' element={<Shop />} loader={shopPageLoader} />
      <Route path='login' element={<Login />} />
      <Route path='cart' element={<Cart />} />

      <Route
        path='shop/:id'
        element={<ProductDetail />}
        loader={productDetailLoader}
      />

      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={dashboardPageLoader} />
        <Route
          path='income'
          element={<Income />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path='products'
          element={<ProductsListed />}
          loader={productsListedLoader}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async () => {
            return null
          }}
        />

        <Route
          path='products/:id'
          element={<ProductsListedLayout />}
          loader={productsListedLayoutLoader}
        >
          <Route
            index
            element={<SellerDetail />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path='pricing'
            element={<SellerPricing />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path='photos'
            element={<SellerPhotos />}
            loader={async () => {
              return null
            }}
          />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

export const Context = React.createContext()

function App() {
  const [cartItems, setCartItems] = React.useState([
    // {
    //   id: '1',
    //   name: 'Bulldog Mens Skincare and Grooming Body Wash, Peppermint and Eucalyptus, 16.9 Fluid Ounce',
    //   shortName: 'Bulldog Mens Body Wash',
    //   price: `7.40`,
    //   description: ` Minty and invigorating, this is the ultimate post-gym body wash. This refreshing treat is not at all drying yet will leave you feeling as clean as a whistle. Pop one of these in your gym bag and keep it in your bathroom after a sweaty commute home from work (we've even tested it on hair in case you've forgotten your shampoo!). `,
    //   imageUrl: 'https://m.media-amazon.com/images/I/61Zolb7mjNL._SL1500_.jpg',
    //   type: 'skincare',
    //   hostId: '123',
    //   bestSeller: true,
    // },
  ])

  return (
    <Context.Provider value={[cartItems, setCartItems]}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

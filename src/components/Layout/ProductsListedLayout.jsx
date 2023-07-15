import React from 'react'
import productsList from '../../data/productsList'
import { useParams, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../../device'
import { getHostProducts } from '../../../api'

const ProductContainer = styled.div`
  /* padding: 0em 0.9em; */
  /* background-color: lightgreen; */
  min-height: 64vh;
  padding: 1em 0em;

  @media ${device.sm} {
    font-size: 1rem;
    margin: 0em 0em;
    background-color: white;
  }
`

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.8em;
  padding: 1em 0.9em;
  max-width: 500px;

  /* background-color: lightblue; */

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 0.9rem;
  }

  img {
    width: 10em;
    height: 10em;
    object-fit: contain;
    /* background-color: lightseagreen; */
  }

  button {
    padding: 0.3em 0.5em;
    font-size: 0.9rem;
    border: none;
    background-color: lightslategray;
    color: white;
  }
`

const Button = styled.div`
  padding: 0.3em 0.5em;
  font-size: 0.9rem;
  border: none;

  ${props =>
    props.scents &&
    css`
      background-color: lightslategrey;
      color: white;
      font-weight: 500;
    `}

  ${props =>
    props.skincare &&
    css`
      background-color: lightcoral;
      color: white;
      font-weight: 500;
    `}
    
  ${props =>
    props.wearables &&
    css`
      background-color: lightsalmon;
      color: white;
      font-weight: 500;
    `}
`

const ProductKeyInfo = styled.div`
  /* background-color: lightcoral; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  gap: 0.4em;
`

const ProductNavigation = styled.div`
  /* background-color: lightcyan; */
  display: flex;
  padding: 1em 1em;
  gap: 1em;
  font-size: 0.8rem;

  h2 {
    font-weight: 400;
  }
`

const LinkItem = styled(NavLink)`
  color: black;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }

  @media ${device.sm} {
    font-size: 1.1rem;
  }
`

const BackToProducts = styled.div`
  padding: 1em 0.8em;
`

export function loader({ params }) {
  return getHostProducts(params.id)
}

function ProductsListedLayout() {
  // const [product, setProduct] = React.useState(null)
  const product = useLoaderData()

  // const params = useParams()
  // const { id } = useParams()
  // const paramId = Number(params.id)

  // const mappedProduct = productsList.map(product =>
  //   product.id === paramId
  //     ? React.useEffect(() => {
  //         setProduct(product)
  //       }, [paramId])
  //     : null
  // )

  // console.log(product)

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'black',
  }

  return (
    <ProductContainer>
      {product ? (
        <div>
          <BackToProducts>
            <LinkItem to={`..`} relative='path'>
              ← Back to all products
            </LinkItem>
          </BackToProducts>
          <ProductDetail>
            <img src={product.imageUrl} alt='' />
            <ProductKeyInfo>
              {product.type === 'scents' ? (
                <Button scents>{product.type}</Button>
              ) : product.type === 'skincare' ? (
                <Button skincare>{product.type}</Button>
              ) : product.type === 'wearables' ? (
                <Button wearables>{product.type}</Button>
              ) : (
                <div>
                  <h1>No Button Found!</h1>
                </div>
              )}
              <h1>{product.shortName}</h1>
              <h2>${product.price}</h2>
            </ProductKeyInfo>
          </ProductDetail>
          <ProductNavigation>
            <LinkItem
              to={`.`}
              style={({ isActive }) => (isActive ? activeStyles : null)}
              end
            >
              Details
            </LinkItem>
            <LinkItem
              // /host/products/${paramId}/ are already assumed by the parent routes
              to={`pricing`}
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </LinkItem>
            <LinkItem
              to={`photos`}
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </LinkItem>
          </ProductNavigation>
          {/* <Outlet context={[product, setProduct]} /> */}
          <Outlet context={[product]} />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </ProductContainer>
  )
}

export default ProductsListedLayout

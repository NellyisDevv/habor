import React from 'react'
import productsList from '../../../../data/productsList'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../../../../device'

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

const BackToVans = styled.div`
  padding: 1em 0.8em;
`

function ProductsListedDetail() {
  const [product, setProduct] = React.useState(null)

  const params = useParams()
  const paramId = Number(params.id)

  const mappedProduct = productsList.map(product =>
    product.id === paramId
      ? React.useEffect(() => {
          setProduct(product)
        }, [paramId])
      : null
  )

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
          <BackToVans>
            <LinkItem to={`/host/products`}>← Back to all products</LinkItem>
          </BackToVans>
          <ProductDetail>
            <img src={product.image} alt='' />
            <ProductKeyInfo>
              {product.type === 'Scents' ? (
                <Button scents>{product.type}</Button>
              ) : product.type === 'Skincare' ? (
                <Button skincare>{product.type}</Button>
              ) : product.type === 'Wearables' ? (
                <Button wearables>{product.type}</Button>
              ) : (
                <div>
                  <h1>No Button Found!</h1>
                </div>
              )}
              <h1>{product.name}</h1>
              <h2>${product.price}</h2>
            </ProductKeyInfo>
          </ProductDetail>
          <ProductNavigation>
            <LinkItem
              to={`/host/products/${paramId}`}
              style={({ isActive }) => (isActive ? activeStyles : null)}
              end
            >
              Details
            </LinkItem>
            <LinkItem
              to={`/host/products/${paramId}/pricing`}
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </LinkItem>
            <LinkItem
              to={`/host/products/${paramId}/photos`}
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </LinkItem>
          </ProductNavigation>
          <Outlet />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </ProductContainer>
  )
}

export default ProductsListedDetail

import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostProducts } from '../../../api'
import styled from 'styled-components'
import device from '../../../device'
import { requireAuth } from '../../../utils'

const DashContainer = styled.div`
  margin: auto;
  font-family: 'poppins', sans-serif;
  min-height: 64vh;
`

const ListedProducts = styled.div`
  padding: 1em 0.9em;
`

const ListedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;

  h4 {
    font-size: 1.5rem;
  }

  @media ${device.sm} {
    h4 {
      font-size: 1.7rem;
    }
  }
`

const Products = styled(Link)`
  padding: 1.2em;
  padding-right: 1.3em;
  color: black;
  text-decoration: none;

  h6 {
    font-weight: 400;
    font-size: 0.8rem;
  }
`

const ProductInfo = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  margin-bottom: 0.8em;
  width: 95%;
  margin: auto;

  @media ${device.sm} {
    width: 100%;
    margin-bottom: 0em;
  }
`

const ProductImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 3em;
  width: 3em;
  border-radius: 0.4em;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media ${device.sm} {
    height: 5em;
    width: 5em;
    padding: 0.5em;
  }
`

const ProductDetail = styled.div``

export async function loader() {
  await requireAuth()
  return getHostProducts()
}

function HostProducts() {
  const products = useLoaderData()

  const listedProductsElements = products.map((product, index) => (
    <Products key={index} to={`${product.id}`}>
      <ProductInfo>
        <ProductImg>
          <img src={product.imageUrl} alt='' />
        </ProductImg>
        <ProductDetail>
          <h5>{product.shortName}</h5>
          <p>${product.price}</p>
        </ProductDetail>
      </ProductInfo>
    </Products>
  ))

  return (
    <DashContainer>
      <ListedProducts>
        <ListedContainer>
          <h4>Your listed products</h4>
        </ListedContainer>
        {listedProductsElements}
      </ListedProducts>
    </DashContainer>
  )
}

export default HostProducts

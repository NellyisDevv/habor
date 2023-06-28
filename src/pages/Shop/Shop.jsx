import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../../device'
import { Link } from 'react-router-dom'
import '/server'
import Product from '../../components/Product'

const ProductContainer = styled.div`
  font-family: 'poppins', sans-serif;
`

const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  gap: 3em;
  /* background-color: lightgreen; */
  padding: 1em;
  margin-top: 3em;
  margin-bottom: 4em;
`

const Explore = styled.div`
  /* background-color: lightgoldenrodyellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5em;

  h2 {
    margin-bottom: 0.2em;
    padding-right: 1em;
    padding-left: 0.5em;
    font-weight: 500;
  }
`

const ButtonContainer = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
`

const Button = styled(Link)`
  text-decoration: none;
  border: none;
  color: white;
  padding: 0.5em;
  font-size: 0.9rem;
  border-radius: 0.05em;
  cursor: pointer;

  ${props =>
    props.skin &&
    css`
      background-color: lightcoral;
    `}

  ${props =>
    props.scent &&
    css`
      background-color: lightslategrey;
    `}

    ${props =>
    props.wear &&
    css`
      background-color: lightsalmon;
    `}
`

const P = styled(Link)`
  color: #4d4d4d;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
`

function Shop() {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products`)
      let data = await res.json()
      setProducts(data.products)
    }

    fetchData()
  }, [])

  const mappedProducts = products.map(product => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      imageUrl={product.imageUrl}
    />
  ))

  return (
    <ProductContainer>
      <Explore>
        <h2>Explore our product options</h2>
        <ButtonContainer>
          <Button skin>Skincare</Button>
          <Button scent>Scents</Button>
          <Button wear>Wearables</Button>
          <P>Clear filters</P>
        </ButtonContainer>
      </Explore>
      <Products>{mappedProducts}</Products>
    </ProductContainer>
  )
}

export default Shop

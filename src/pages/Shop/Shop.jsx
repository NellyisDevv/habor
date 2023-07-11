import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../../device'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import '/server'
import Product from '../../components/Product'
import { getProducts } from '../../../api'

const ProductContainer = styled.div`
  font-family: 'poppins', sans-serif;
`

const Products = styled.div`
  display: grid;
  justify-items: center;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  gap: 2em;
  padding: 1em;
  margin-top: 3em;
  margin-bottom: 4em;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Explore = styled.div`
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

const Button = styled.button`
  text-decoration: none;
  border: none;
  color: white;
  padding: 0.5em;
  font-size: 0.9rem;
  border-radius: 0.05em;
  cursor: pointer;
  transition: 400ms all cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.skin &&
    css`
      background-color: lightcoral;

      &:hover {
        transform: scale(1.1);
      }
    `}

  ${props =>
    props.scent &&
    css`
      background-color: lightslategrey;

      &:hover {
        transform: scale(1.1);
      }
    `}

    ${props =>
    props.wear &&
    css`
      background-color: lightsalmon;

      &:hover {
        transform: scale(1.1);
      }
    `}
`

// switched from link to button
const P = styled.button`
  border: none;
  color: #4d4d4d;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
`

const LinkBtn = styled(Link)`
  text-decoration: none;
  background-color: lightcoral;
  border: none;
  color: white;
  padding: 0.5em;
  font-size: 0.9rem;
  border-radius: 0.05em;
  cursor: pointer;
  transition: 400ms all cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`

export function loader() {
  // throw new Error('Broken!')
  // const data = await getProducts()
  // return data
  return getProducts()
}

export default function Shop() {
  // const [products, setProducts] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  // const [loading, setLoading] = React.useState(false)

  const typeFilter = searchParams.get('type')
  const products = useLoaderData()

  // console.log(searchParams.toString())
  // console.log(searchParams.get('type'))
  // console.log(data)

  // React.useEffect(() => {
  //   async function loadProducts() {
  //     setLoading(true)
  //     const data = await getProducts()
  //     setProducts(data)
  //     setLoading(false)
  //   }

  //   loadProducts()
  // }, [])

  const displayedProducts = typeFilter
    ? products.filter(product => product.type.toLowerCase() === typeFilter)
    : products

  // Slower React code when doing it this way, instead code out the product component.
  const mappedProducts = displayedProducts.map(product => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      imageUrl={product.imageUrl}
      typeFilter={searchParams}
      filter={typeFilter}
    />
  ))

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)

    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }

    // console.log(sp.toString())
    return `?${sp.toString()}`
  }

  // if (loading) {
  //   return (
  //     <LoadingState>
  //       <h1>Loading...</h1>
  //     </LoadingState>
  //   )
  // }

  return (
    <ProductContainer>
      <Explore>
        <h2>Explore our product options</h2>
        <ButtonContainer>
          {/* <Button onClick={() => setSearchParams({ type: 'skincare' })} skin>
            to='?type=skincare'
            Skincare
          </Button> */}
          <LinkBtn to={genNewSearchParamString('type', 'skincare')}>
            Skincare
          </LinkBtn>
          <Button onClick={() => setSearchParams({ type: 'scents' })} scent>
            {/* to='?type=scents' */}
            Scents
          </Button>
          <Button onClick={() => setSearchParams({ type: 'wearables' })} wear>
            Wearables
          </Button>
          {typeFilter && (
            <P onClick={() => setSearchParams({})}>Clear filters</P>
          )}{' '}
          {/* to='.' */}
        </ButtonContainer>
      </Explore>
      <Products>{mappedProducts}</Products>
    </ProductContainer>
  )
}

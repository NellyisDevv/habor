import React from 'react'
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom'
import { getProducts } from '../../../api'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../../device'
import Product from '../../components/Product'
import { SpinnerCircularFixed } from 'spinners-react'

const ProductContainer = styled.div`
  font-family: 'poppins', sans-serif;
`

const ProductsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: baseline;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  gap: 2em;
  padding: 1em;
  margin-top: 3em;
  margin-bottom: 4em;
  min-height: 50vh;

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
  align-items: left;
  padding: 2em 0em;

  h2 {
    margin-bottom: 0.2em;
    padding-right: 1em;
    padding-left: 0.5em;
    font-weight: 500;
  }

  @media ${device.sm} {
    align-items: center;
    padding: 3em 4em;
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
  background-color: white;
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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68vh;
`

export function loader() {
  return defer({ products: getProducts() })
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const dataPromise = useLoaderData()

  const typeFilter = searchParams.get('type')

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

  function renderProductElements(products) {
    const displayedProducts = typeFilter
      ? products.filter(product => product.type.toLowerCase() === typeFilter)
      : products

    const productElements = displayedProducts.map(product => (
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

    return (
      <>
        <ProductsContainer>{productElements}</ProductsContainer>
      </>
    )
  }

  return (
    <ProductContainer>
      <Explore>
        <h2>Explore our product options</h2>
        <ButtonContainer>
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
          {typeFilter ? (
            <P onClick={() => setSearchParams({})}>Clear filters</P>
          ) : null}
        </ButtonContainer>
      </Explore>
      <React.Suspense
        fallback={
          <Loading>
            <SpinnerCircularFixed size={100} thickness={150} color='#456828' />
          </Loading>
        }
      >
        <Await resolve={dataPromise.products}>{renderProductElements}</Await>
      </React.Suspense>
    </ProductContainer>
  )
}

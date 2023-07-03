import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../device'
import vansList from '../../data/vansList'
import productsList from '../../data/productsList'
import topProducts from '../../data/topProducts'

const DashContainer = styled.div`
  /* background-color: #7fbd7f; */
  margin: auto;
  font-family: 'poppins', sans-serif;
  min-height: 64vh;

  @media ${device.sm} {
    /* padding: 2em 4em; */
    /* background-color: lightgoldenrodyellow; */
  }
`

const TotalIncome = styled.div`
  /* background-color: lightgrey; */
  background-color: #a3c9a3;
  position: relative;
  padding: 0em 0.9em;

  @media ${device.sm} {
    font-size: 1rem;
    margin: 0em 0em;
    background-color: white;
  }
`

const One = styled.div`
  /* background-color: lightpink; */
  padding: 1em 0em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;

  h2 {
    font-size: 2.25rem;
  }

  h4 {
    font-size: 2rem;
  }
`

const Detail = styled.div`
  /* background-color: lightblue; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.6em;
`

const Review = styled.div`
  background-color: #82c082;
  padding: 2em 0.9em;
  display: flex;
  align-items: center;
  gap: 1em;
  position: relative;

  h4 {
    font-size: 1.2rem;
  }

  @media ${device.sm} {
    background-color: white;
  }
`

const Rate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
`

const ListedProducts = styled.div`
  /* background-color: lightblue; */
  padding: 2em 0.9em;
`

const ListedContainer = styled.div`
  /* background-color: lightgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
`

const Products = styled(Link)`
  /* background-color: lightgreen; */
  padding: 1.2em;
  padding-right: 1.3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  /* background-color: lightblue; */
`

const ProductImg = styled.div`
  /* background-color: lightblue; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 3em;
  width: 3em;
  /* padding: 0.5em; */

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const ProductDetail = styled.div`
  /* background-color: lightcoral; */
  max-width: 150px;

  @media ${device.sm} {
    max-width: 500px;
  }
`

const mappedProducts = topProducts.map((van, index) => (
  <Products key={index} to={`products/${van.id}`}>
    <ProductInfo>
      <ProductImg>
        <img src={van.image} alt='' />
      </ProductImg>
      <ProductDetail>
        <h5>{van.name}</h5>
        <p>${van.price}</p>
      </ProductDetail>
    </ProductInfo>
    <h6>Edit</h6>
  </Products>
))

function Dashboard() {
  return (
    <DashContainer>
      <TotalIncome>
        <One>
          <h2>Welcome</h2>
          <p>Income last 30 days</p>
          <h4>$2,260</h4>
          <Detail>Detials</Detail>
        </One>
      </TotalIncome>
      <Review>
        <h4>Review score</h4>
        <Rate>
          <img src='/images/star.svg' alt='' />
          <p>5.0/5</p>
        </Rate>
        <Detail>Detials</Detail>
      </Review>
      <ListedProducts>
        <ListedContainer>
          <h4>Best selling products</h4>
          <p>View all</p>
        </ListedContainer>
        {mappedProducts}
      </ListedProducts>
      <Outlet />
    </DashContainer>
  )
}

export default Dashboard

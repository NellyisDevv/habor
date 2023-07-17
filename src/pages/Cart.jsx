import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { Link, useLoaderData } from 'react-router-dom'
import device from '../../device'
import { getProducts } from '../../api'

const CartComponent = styled.div`
  min-height: 67vh;
`

const CartContainer = styled.div`
  font-family: 'poppins', sans-serif;
  padding: 75.9062px 0.8em;
  display: grid;
  gap: 1em;
  justify-items: baseline;
  /* background-color: lightcoral; */

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }

  @media ${device.sm} {
    padding: 151.523px 10em;
  }
`

const CartItems = styled.div`
  /* background-color: #7fbd7f; */
  margin: auto;
  font-family: 'poppins', sans-serif;

  @media ${device.sm} {
    padding: 2em 4em;
    /* background-color: lightgoldenrodyellow; */
  }
`

const CartItem = styled.div`
  /* background-color: lightcyan; */
  display: flex;

  img {
    height: 7em;
    width: 7em;
    object-fit: contain;
  }
`

const Button = styled(Link)`
  background-color: #456828;
  color: white;
  text-decoration: none;
  border: none;
  padding: 1.2em 2.004em;
  cursor: pointer;
`

function Cart() {
  return (
    <CartComponent>
      <CartContainer>
        <h1>Shopping Cart</h1>
        <p>You have nothing in your shopping cart.</p>
        <Button to='/shop'>Continue Shopping</Button>
      </CartContainer>
    </CartComponent>
  )
}

export default Cart

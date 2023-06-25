import React from 'react'
import styled from 'styled-components'
import device from '../../device'
import Burger from './Burger'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Container = styled.section`
  color: black;
  padding: 2em 2em 0em 2em;
  font-family: 'poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8em;
  /* max-width: 1800px;
  margin: auto; */
  @media ${device.sm} {
    padding: 2.8em 4em 0em 4em;
  }
`

const HeaderContainer = styled.div``

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;

  p {
    font-size: 1.1rem;
    font-weight: 300;
  }
`

const CartImage = styled.img`
  width: 2.2em;
`

const Login = styled(Link)`
  display: none;
  text-decoration: none;
  margin-right: 1.3em;
  color: black;
  font-size: 1.1rem;

  @media ${device.md} {
    display: block;
  }
`

const H1 = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.md} {
    padding-right: 1.2em;
  }
`

const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function Nav() {
  return (
    <Container>
      <Burger />
      <HeaderContainer>
        <H1 to='/'>Habor</H1>
      </HeaderContainer>
      <CartContainer>
        <Login to='/login'>Login</Login>
        <Cart>
          <CartImage src='/cart-black.svg' />
          <p>0</p>
        </Cart>
      </CartContainer>
    </Container>
  )
}

export default Nav

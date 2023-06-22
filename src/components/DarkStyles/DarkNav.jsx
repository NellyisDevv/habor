import React from 'react'
import styled from 'styled-components'
import device from '../../../device'
import DarkBurger from './DarkBurger'
import Burger from '../Burger'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Container = styled.section`
  padding: 2em;
  font-family: 'poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8em;
  /* max-width: 1800px;
  margin: auto; */
  @media ${device.sm} {
    padding: 2.8em 5em 0em 5em;
  }
`

const HeaderContainer = styled.div``

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;

  p {
    color: black;
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
`

function DarkNav() {
  return (
    <Container>
      <DarkBurger />
      <HeaderContainer>
        <H1 to='/'>Habor</H1>
      </HeaderContainer>
      <CartContainer>
        <Login to='/login'>Login</Login>
        <CartImage src='/cart-black.svg' />
        <p>0</p>
      </CartContainer>
    </Container>
  )
}

export default DarkNav

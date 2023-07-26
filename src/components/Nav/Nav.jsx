import React from 'react'
import styled from 'styled-components'
import device from '../../../device'
import Burger from './Burger'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const Container = styled.section`
  color: black;
  padding: 2em 1em 0em 1em;
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

const Login = styled(NavLink)`
  display: none;
  text-decoration: none;
  margin-right: 1.3em;
  color: black;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }

  @media ${device.md} {
    display: block;
  }
`

const H1 = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.lg} {
    padding-right: 1.2em;
  }
`

const Cart = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`

function Nav() {
  const activeStyles = {
    color: 'black',
    textDecoration: 'underline',
    fontWeight: 600,
  }

  return (
    <Container>
      <Burger />
      <HeaderContainer>
        <H1 to='/'>Minazia</H1>
      </HeaderContainer>
      <CartContainer>
        {/* <Login
          to='login'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Login
        </Login> */}
        <Cart to='cart'>
          <CartImage src='/images/cart-black.svg' />
          <p>0</p>
        </Cart>
      </CartContainer>
    </Container>
  )
}

export default Nav

import React from 'react'
import styled from 'styled-components'
import device from '../../device'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from '../components/Nav'

const HomeContainer = styled.div`
  font-family: 'poppins', sans-serif;
`

const HomeNavigation = styled.div`
  min-height: 40vh;
  background-image: url('https://images.pexels.com/photos/17211586/pexels-photo-17211586/free-photo-of-photographer-standing-on-street-under-green-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  margin-top: 2em;
`

const Hero = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 2em;
`

const Button = styled(Link)`
  background-color: white;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.8em;
  border: none;
  width: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1em;

  @media ${device.sm} {
    font-size: 1.2rem;
  }
`

const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;

  @media ${device.sm} {
    font-size: 3.5rem;
  }
`

function Shop() {
  return (
    <HomeContainer>
      <HomeNavigation>
        <Hero>
          <H2>Shop</H2>
        </Hero>
      </HomeNavigation>
    </HomeContainer>
  )
}

export default Shop

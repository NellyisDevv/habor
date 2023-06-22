import React from 'react'
import styled from 'styled-components'
import device from '../../device'
import Burger from './Burger'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import SimpleImageSlider from 'react-simple-image-slider'
import '../index.css'

const images = [
  {
    url: 'https://images.pexels.com/photos/17211586/pexels-photo-17211586/free-photo-of-photographer-standing-on-street-under-green-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    url: '  https://images.pexels.com/photos/17211589/pexels-photo-17211589/free-photo-of-photographer-on-street-under-green-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    url: 'https://images.pexels.com/photos/17211588/pexels-photo-17211588/free-photo-of-bicycle-parked-under-green-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]

const HomeContainer = styled.div`
  font-family: 'poppins', sans-serif;
`

const Hero = styled.div`
  min-height: 80vh;
  background-image: url('https://images.pexels.com/photos/17211586/pexels-photo-17211586/free-photo-of-photographer-standing-on-street-under-green-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 97%;
  margin: auto;
  margin-top: 2em;
`

// const Hero = styled.div`
//   height: 20vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   gap: 2em;
// `

const Button = styled(Link)`
  background-color: white;
  color: black;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.8em;
  border: none;
  width: 7em;
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

const SliderContainer = styled.div`
  height: 53vh;
`

function Home() {
  return (
    <HomeContainer>
      <Nav />
      {/* <Hero>
        <H2>Luxary Perfection</H2>
        <Button to='/shop'>Shop Now</Button>
      </Hero> */}
      <SliderContainer>
        <SimpleImageSlider
          width={'100vw'}
          height={'80vh'}
          images={images}
          showBullets={true}
          showNavs={true}
          navSize={25}
          navMargin={5}
          style={{
            margin: '0 auto',
            marginTop: '2em',
            objectFit: 'cover',
          }}
        />
      </SliderContainer>
    </HomeContainer>
  )
}

export default Home

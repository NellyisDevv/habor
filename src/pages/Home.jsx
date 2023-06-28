import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../device'
import { Link } from 'react-router-dom'
import productData from '../data/productData'

const HomeContainer = styled.div`
  font-family: 'poppins', sans-serif;
  margin: auto;
`

const HomeNavigation = styled.div`
  min-height: 93vh;
  width: 100%;
  background-image: url('https://images.pexels.com/photos/17211586/pexels-photo-17211586/free-photo-of-photographer-standing-on-street-under-green-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  margin-top: 2em;

  ${props =>
    props.second &&
    css`
      background-image: url('https://images.pexels.com/photos/17211588/pexels-photo-17211588/free-photo-of-bicycle-parked-under-green-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      background-color: #328d35;
      color: white;
      font-weight: 500;
    `}
`

const Hero = styled.div`
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 2em;
`

const BtnContainer = styled.div`
  width: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5em;

  @media ${device.md} {
    width: 30em;
  }
`

const Button = styled(Link)`
  text-align: center;
  background-color: #3f3f3f;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.8em;
  border: none;
  width: 8em;
  border-radius: 0.05em;

  ${props =>
    props.coral &&
    css`
      background-color: #456828;
      color: white;
      font-weight: 500;
    `}

  @media ${device.md} {
    font-size: 1.2rem;
  }
`

const H2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;

  @media ${device.md} {
    font-size: 3.5rem;
  }
`

const MobileBreak = styled.br`
  @media ${device.sm} {
    display: none;
  }
`

const SectionOneContainer = styled.div`
  min-height: 63vh;
  /* max-width: 1400px;
  margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
  padding: 3em 2em 3em 2em;

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.6em;
  }

  @media ${device.md} {
    h2 {
      font-size: 2.3rem;
    }
  }
`

const SectionOne = styled.div`
  text-align: center;
`

const SectionTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4em;
  /* background-color: lightblue; */
  /* width: 50%; */

  img {
    height: 30vh;
  }

  @media ${device.md} {
    gap: 10em;

    img {
      height: 24vh;
    }
  }

  @media ${device.md} {
  }
`

const mappedProducts = productData.map((product, index) => (
  <img key={index} src={product.img} alt={product.alt} />
))

function Home() {
  return (
    <HomeContainer>
      <HomeNavigation>
        <Hero>
          <H2>
            Luxary <MobileBreak /> Perfected
          </H2>
          <BtnContainer>
            <Button coral to='/shop'>
              Shop Now
            </Button>
            <Button to='/about'>Learn More</Button>
          </BtnContainer>
        </Hero>
      </HomeNavigation>
      <SectionOneContainer>
        <SectionOne>
          <h2>Only the Highest Quality Products</h2>
          <p>
            In fact, we manifacture all of them ourselves at our own facility
          </p>
        </SectionOne>
        <SectionTwo>{mappedProducts}</SectionTwo>
        <Button coral>Shop Now</Button>
      </SectionOneContainer>
      <HomeNavigation second></HomeNavigation>
    </HomeContainer>
  )
}

export default Home

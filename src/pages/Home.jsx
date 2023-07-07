import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../device'
import { Link } from 'react-router-dom'
import productData from '../data/productData'
import userReviews from '../data/userReviews'

const HomeContainer = styled.div`
  font-family: 'poppins', sans-serif;
  margin: auto;
`

const HomeNavigation = styled.div`
  min-height: 90vh;
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

const MidNavigation = styled.div`
  /* background-color: lightblue; */
  min-height: 40em;
  max-width: 1500px;
  /* width: 90%;
  max-width: 310px; */
  margin: auto;
  display: grid;
  gap: 1em;
  width: 100%;
  /* background-color: lightsalmon; */
  color: white;
  /* max-width: 1150px; */
  padding: 1em;

  @media ${device.sm} {
    min-height: 30em;
    grid-template-columns: 1fr 1fr;
    /* min-width: 800px; */
  }
`

const ScentsContainer = styled(Link)`
  color: white;
  text-decoration: none;
  height: 30em;
  display: flex;
  justify-content: baseline;
  align-items: end;
  background-position: center;
  background-size: cover;
  padding: 1.5em;
  background-image: url('https://images.pexels.com/photos/6794168/pexels-photo-6794168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  transition: 400ms all cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  @media ${device.sm} {
    height: 40em;
    grid-column: span 2;
  }
`

const SkincareContainer = styled(Link)`
  color: white;
  text-decoration: none;
  height: 30em;
  display: flex;
  justify-content: baseline;
  align-items: end;
  background-position: center;
  background-size: cover;
  padding: 1.5em;
  background-image: url('https://images.pexels.com/photos/4210373/pexels-photo-4210373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  transition: 400ms all cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  @media ${device.sm} {
    height: 40em;
  }
`

const WearablesContainer = styled(Link)`
  color: white;
  text-decoration: none;
  height: 30em;
  display: flex;
  justify-content: baseline;
  align-items: end;
  background-position: center;
  background-size: cover;
  padding: 1.5em;
  background-image: url('https://images.pexels.com/photos/17211584/pexels-photo-17211584/free-photo-of-city-landscape-fashion-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  transition: 400ms all cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  @media ${device.sm} {
    height: 40em;
  }
`

const Wearables = styled.div`
  /* background-color: lightcoral; */

  h2 {
    font-size: 1.9rem;
    margin-bottom: 0.25em;
  }

  button {
    border: none;
    /* max-width: 200px; */
    padding: 0.4em 1em;
    font-size: 1rem;
    background-color: #456828;
    color: white;
    cursor: pointer;
  }
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
  background-color: #456828;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.8em;
  width: 8em;
  border-radius: 0.05em;
  transition: 400ms all cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.coral &&
    css`
      background-color: transparent;
      color: white;
      border: 1px solid white;
      font-weight: 500;

      &:hover {
        background-color: white;
        color: black;
      }
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
  min-height: 60vh;
  /* max-width: 1400px;
  margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
  padding: 3em 2em 2em 2em;

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
    height: 12em;
  }

  @media ${device.md} {
    padding-right: 2em;
    gap: 10em;

    img {
      height: 14em;
    }
  }

  @media ${device.lg} {
    img {
      height: 16em;
    }
  }
`

const BlogSubscribe = styled.div`
  min-height: 20vh;
  /* background-color: lightblue; */
  padding: 1em;
  text-align: center;
  display: flex;
  gap: 1.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4em;
  margin-top: 2em;

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  @media ${device.md} {
    h4 {
      font-size: 2.3rem;
    }
  }
`

const BlogContainer = styled.div`
  display: grid;
  gap: 1em;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 3em;
  grid-template-columns: repeat(2, 1fr);
  /* background-color: lightblue; */

  @media ${device.md} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3em;
  }
`

const BlogImage = styled.div`
  min-height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    object-fit: cover;
  }

  @media ${device.md} {
    min-height: 300px;
  }
`

const UserReviews = styled.div`
  display: grid;
  /* background-color: lightblue; */
  max-width: 1200px;
  gap: 1em;
  row-gap: 4em;
  margin: 2em auto;

  @media ${device.md} {
    margin: 5em auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    margin: 5em auto;
    grid-template-columns: repeat(3, 1fr);
  }
`

const UserReview = styled.div`
  width: 90%;
  /* background-color: lightsalmon; */
  max-width: 350px;
  margin: auto;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px; /* border-radius: 0.6em; */
`

const UserImage = styled.img`
  height: 4em;
  width: 4em;
  border-radius: 50%;
  object-fit: cover;
`

const UserInfo = styled.div`
  /* background-color: lightblue; */
  display: flex;
  padding: 1em;
`

const UserName = styled.div`
  /* background-color: lightgreen; */
  padding: 0.4em;
  white-space: nowrap;

  h3 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.8rem;
    color: #757575;
  }
`

const UserComment = styled.div`
  /* background-color: lightseagreen; */
  padding: 1em;

  h4 {
    margin-bottom: 0.8em;
  }

  p {
    color: #757575;
  }
`

const Stars = styled.div`
  display: flex;
  gap: 0.2em;
  padding: 0em 1em 1.3em 1em;
`

const mappedProducts = productData.map((product, index) => (
  <img key={index} src={product.img} alt={product.alt} />
))

const mappedReviews = userReviews.map((review, index) => (
  <UserReview key={index}>
    <UserInfo>
      <UserImage src={review.image} alt='' />
      <UserName>
        <h3>{review.name}</h3>
        <p>{review.profession}</p>
      </UserName>
    </UserInfo>
    <UserComment>
      <h4>{review.title}</h4>
      <p>{review.review}</p>
    </UserComment>
    <Stars>
      <img src='/images/star.svg' alt='' />
      <img src='/images/star.svg' alt='' />
      <img src='/images/star.svg' alt='' />
      <img src='/images/star.svg' alt='' />
      <img src='/images/star.svg' alt='' />
    </Stars>
  </UserReview>
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
            <Button to='/shop'>Shop Now</Button>
            <Button coral to='/about'>
              Learn More
            </Button>
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
        <Button to='shop'>Shop Now</Button>
      </SectionOneContainer>
      <MidNavigation>
        <WearablesContainer to='shop?type=wearables'>
          <Wearables>
            <h2>Wearables</h2>
            <button>View All</button>
          </Wearables>
        </WearablesContainer>
        <SkincareContainer to='shop?type=skincare'>
          <Wearables>
            <h2>Skincare</h2>
            <button>View All</button>
          </Wearables>
        </SkincareContainer>
        <ScentsContainer to='shop?type=scents'>
          <Wearables>
            <h2>Scents</h2>
            <button>View All</button>
          </Wearables>
        </ScentsContainer>
      </MidNavigation>
      <UserReviews>{mappedReviews}</UserReviews>
      <BlogSubscribe>
        <h4>Love Minazia Products?</h4>
        <p>Sign up with your email address to receive news and updates.</p>
        <Button>Subscribe</Button>
      </BlogSubscribe>
      <BlogContainer>
        <BlogImage>
          <img
            src='https://images.pexels.com/photos/17211655/pexels-photo-17211655/free-photo-of-green-doors-of-building-between-iron-flowerpots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </BlogImage>
        <BlogImage>
          <img
            src='https://images.pexels.com/photos/17211653/pexels-photo-17211653/free-photo-of-facade-of-white-building-with-doors-painted-grey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </BlogImage>
        <BlogImage>
          <img
            src='https://images.pexels.com/photos/16550561/pexels-photo-16550561/free-photo-of-mountain-village-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </BlogImage>
      </BlogContainer>
    </HomeContainer>
  )
}

export default Home

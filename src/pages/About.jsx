import React from 'react'
import device from '../../device'
import styled from 'styled-components'
import Nav from '../components/Nav'

const AboutContainer = styled.div`
  font-family: 'poppins', sans-serif;
  color: black;
`

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 5rem 2.5rem 5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h2 {
    font-size: 33.6176px;
    font-weight: 500;
    margin-bottom: 0.2em;
  }

  p {
    font-size: 1.3rem;
    font-weight: 300;
  }

  @media ${device.lg} {
    padding: 15rem 0rem 15rem 0rem;
  }
`

const Img = styled.div`
  background-image: url('https://images.pexels.com/photos/17213030/pexels-photo-17213030/free-photo-of-city-road-fashion-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

function About() {
  return (
    <AboutContainer>
      <Container>
        <h2>Our Story</h2>
        <p>
          Since 2005, Hester has done more than refine an old tradition. Guided
          by an international palate, we fuse unique pickling techniques from
          around the world to create the most interesting flavors and textures.
        </p>
        <p>
          Hester makes everything in small batches from our home base in New
          York. To achieve optimal flavor, our products age from three weeks to
          four months, making every pickle worth your patience.
        </p>
      </Container>
      <Img></Img>
    </AboutContainer>
  )
}

export default About

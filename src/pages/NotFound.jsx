import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { useParams, Link, useLocation } from 'react-router-dom'
import device from '../../device'
import '/server'

const ErrorContainer = styled.div`
  font-family: 'poppins', sans-serif;
  height: 67vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

const ErrorMessage = styled.div`
  display: grid;
  gap: 1em;
  width: 90%;
  max-width: 390px;
  margin: auto;

  h1 {
    font-size: 1.3rem;
  }

  @media ${device.sm} {
    h1 {
      font-size: 1.8rem;
    }
  }
`

const Button = styled(Link)`
  text-decoration: none;
  text-align: center;
  background-color: #456828;
  border: none;
  color: white;
  padding: 0.7em 1em;
  border-radius: 0.3em;
  font-weight: 500;
  cursor: pointer;
`

function NotFound() {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Button to='/'>Return to home</Button>
      </ErrorMessage>
    </ErrorContainer>
  )
}

export default NotFound

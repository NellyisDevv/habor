import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import device from '../device'
import Burger from './components/Burger'

const Container = styled.section`
  background-color: #989350;
  color: white;
  padding: 2em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8em;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  list-style-type: none;
  gap: 1.5em;
  text-decoration: none;
  text-decoration: none;
`

const HeaderContainer = styled.div``

const ListItem = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  color: white;
  font-weight: 500;
  @media ${device.sm} {
    font-size: 1rem;
  }
`

const ListImage = styled.img`
  height: 1.5em;
`

function App() {
  return (
    <Container>
      <HeaderContainer>
        <h1>Habor</h1>
      </HeaderContainer>
      <Burger />
      {/* <ListContainer>
        <ListItem href=''>Home</ListItem>
        <ListItem href=''>About</ListItem>
        <ListItem href=''>Shop</ListItem>
        <ListItem href=''>
          <ListImage src='/profile-circle.svg' alt='' />
        </ListItem>
      </ListContainer> */}
    </Container>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

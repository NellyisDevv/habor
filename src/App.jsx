import React.{ useState } from 'react'
import { BrowserRoter } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  background-color: brown;
  color: white;
  padding: 3em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

function App() {
  return (
    <Container>
      <h2>Habor</h2>
    </Container>
  )
}

export default App

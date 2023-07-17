import React from 'react'
import { useRouteError } from 'react-router-dom'
import { styled } from 'styled-components'

const ErrorContainer = styled.div`
  font-family: 'poppins', sans-serif;
  height: 68vh;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.2rem;
  }

  pre {
    font-size: 1.2rem;
  }
`

export default function Error() {
  const error = useRouteError()
  console.log(error)

  return (
    <ErrorContainer>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </ErrorContainer>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../device'

const DashContainer = styled.div`
  /* background-color: #7fbd7f; */
  margin: auto;
  font-family: 'poppins', sans-serif;

  @media ${device.sm} {
    padding: 2em 4em;
    /* background-color: lightgoldenrodyellow; */
  }
`

const DashLinks = styled.div`
  /* background-color: darkcyan; */
  display: flex;
  gap: 0.6em;
  padding: 2em 0.8em;

  @media ${device.sm} {
    padding: 2em 0em;
  }
`

const LinkItem = styled(Link)`
  font-size: 0.95rem;
  color: black;
  text-decoration: none;
  font-weight: 400;

  @media ${device.sm} {
    font-size: 1.1rem;
    margin: 0em 0.7em;
  }
`

function DashboardNav() {
  return (
    <DashLinks>
      <LinkItem>Dashboard</LinkItem>
      <LinkItem>Income</LinkItem>
      <LinkItem>Products</LinkItem>
      <LinkItem>Reviews</LinkItem>
    </DashLinks>
  )
}

export default DashboardNav

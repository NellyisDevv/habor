import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../device'
import '../../index.css'

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

const LinkItem = styled(NavLink)`
  color: black;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }

  @media ${device.sm} {
    font-size: 1.1rem;
    margin: 0em 0.7em;
  }
`

function HostLayout() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'black',
  }

  return (
    <DashContainer>
      <DashLinks>
        <LinkItem
          to='/host'
          end
          // className={({ isActive }) => (isActive ? 'my-link' : null)}
          // className='my-link'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </LinkItem>
        <LinkItem
          to='/host/income'
          // className={({ isActive }) => (isActive ? 'my-link' : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </LinkItem>
        <LinkItem
          to='/host/products'
          // className={({ isActive }) => (isActive ? 'my-link' : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Products
        </LinkItem>
        <LinkItem
          to='/host/reviews'
          // className={({ isActive }) => (isActive ? 'my-link' : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </LinkItem>
      </DashLinks>
      <Outlet />
    </DashContainer>
  )
}

export default HostLayout

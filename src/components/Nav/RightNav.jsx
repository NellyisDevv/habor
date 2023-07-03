import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0em;
  z-index: 99;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;

    img {
      width: 2em;
    }
  }
`

const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  margin: 0.5em;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: black;
    position: relative;
    right: 0.6em;
  }
`

const RightNav = ({ open }) => {
  const activeStyles = {
    color: 'black',
    textDecoration: 'underline',
    fontWeight: 600,
  }

  return (
    <Ul open={open}>
      <NavLinks
        to='/about'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        About
      </NavLinks>
      <NavLinks
        to='/shop'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Shop
      </NavLinks>
      <NavLinks
        to='/host'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Host
      </NavLinks>
      <NavLinks
        to='/login'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        {open
          ? // <img className='profile-img' src='/profile-circle-black.svg' alt='' />
            'Login'
          : null}
      </NavLinks>
      {/* <li>Sign In</li>
      <li>Sign Up</li> */}
    </Ul>
  )
}

export default RightNav

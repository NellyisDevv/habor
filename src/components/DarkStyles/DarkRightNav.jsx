import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Ul = styled.ul`
  color: black;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0em;

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

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  margin: 0.5em;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: black;
    position: relative;
    right: 0.6em;
  }
`

const DarkRightNav = ({ open, home }) => {
  return (
    <Ul open={open}>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/host'>Host</NavLink>
      <NavLink to='/sign-in'>
        {open
          ? // <img className='profile-img' src='/profile-circle-black.svg' alt='' />
            'Login'
          : ''}
      </NavLink>

      {/* {homePage ? (
        <NavLink to='/shop'>Shop</NavLink>
      ) : (
        <NavLinkDark to='/shop'>Dont Shop</NavLinkDark>
      )} */}

      {/* <li>Sign In</li>
      <li>Sign Up</li> */}
    </Ul>
  )
}

export default DarkRightNav

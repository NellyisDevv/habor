import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

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

    li {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      color: black;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Host</li>
      <li>About</li>
      <li>Shop</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default RightNav

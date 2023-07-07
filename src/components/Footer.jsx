import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../device'

const FooterContainer = styled.div`
  background-color: #456828;
  color: white;
  min-height: 27vh;
  display: flex;
  align-items: center;
  font-family: 'poppins', sans-serif;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-left: 3em;
  padding: 2em;
`

const Underline = styled.span`
  text-decoration: underline;
`

function Footer() {
  return (
    <FooterContainer>
      <Content>
        <h2>Habor</h2>
        <p>
          123 Demo Street <br /> New York, NY 10000 <br /> (555) 555-5555
        </p>
        <p>
          Made by <Underline>Habor</Underline>
        </p>
      </Content>
    </FooterContainer>
  )
}

export default Footer

import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../device'
import { useParams, NavLink, Outlet, useOutletContext } from 'react-router-dom'

const SellerDetails = styled.div`
  padding: 1em 0.8em;
  max-width: 500px;

  @media ${device.sm} {
    padding: 2em 0.8em;
  }
`

const Details = styled.div`
  display: grid;
  gap: 0.8em;
  padding: 0.5em 0em;
`

function HostProductPricing() {
  const [product, setProduct] = useOutletContext()

  return (
    <SellerDetails>
      <Details>
        <h1>${product.price}</h1>
      </Details>
    </SellerDetails>
  )
}

export default HostProductPricing

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
  gap: 1em;
`

const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`

const Description = styled.div`
  display: inline;
`

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.16rem;
`

const Visibility = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`

function HostProductInfo() {
  const [product, setProduct] = useOutletContext()

  return (
    <SellerDetails>
      {product ? (
        <Details>
          <Name>
            <p>
              <Bold>Name:</Bold> {product.shortName}
            </p>
          </Name>
          <Description>
            <p>
              <Bold>Description:</Bold> {product.description}
            </p>
          </Description>
          <Visibility>
            <h3>Visibility:</h3>
            <p>Public</p>
          </Visibility>
        </Details>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </SellerDetails>
  )
}

export default HostProductInfo

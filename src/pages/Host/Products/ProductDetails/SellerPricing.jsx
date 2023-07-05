import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../../../device'
import { useParams, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import productsList from '../../../../data/productsList'

const SellerDetails = styled.div`
  /* background-color: darkcyan; */
  padding: 1em 0.8em;
  max-width: 500px;

  @media ${device.sm} {
    padding: 2em 0.8em;
  }
`

const Details = styled.div`
  /* background-color: lightgrey; */
  display: grid;
  gap: 0.8em;
  padding: 0.5em 0em;
`

function SellerPricing() {
  const [product, setProduct] = useOutletContext()

  // const [product, setProduct] = React.useState(null)

  // const params = useParams()
  // const paramId = Number(params.id)

  // const mappedProduct = productsList.map(product =>
  //   product.id === paramId
  //     ? React.useEffect(() => {
  //         setProduct(product)
  //       }, [paramId])
  //     : null
  // )

  // console.log(product)

  return (
    <SellerDetails>
      {product ? (
        <Details>
          <h1>${product.price}</h1>
        </Details>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </SellerDetails>
  )
}

export default SellerPricing

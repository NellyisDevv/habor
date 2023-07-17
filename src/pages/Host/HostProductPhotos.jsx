import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../device'
import { useParams, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import productsList from '../../data/productsList'

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
`

const ImageContainer = styled.div`
  /* background-color: lightcoral; */
  width: 6em;
  height: 6em;
  display: flex;
  justify-content: left;
`

function HostProductPhotos() {
  // const [product, setProduct] = React.useState(null)
  const product = useOutletContext()

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

  // console.log(product[0].imageUrl)

  return (
    <SellerDetails>
      {product ? (
        <Details>
          <ImageContainer>
            <img src={product[0].imageUrl} alt='' />
          </ImageContainer>
        </Details>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </SellerDetails>
  )
}

export default HostProductPhotos

import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { Link } from 'react-router-dom'
import device from '../../device'

function Product({ name, price, description, imageUrl, id }) {
  var length = 50
  var myString = name
  var myTruncatedString = myString.substring(0, length)

  const ProductImage = styled.img`
    height: 15em;
    object-fit: contain;
  `

  const ProductContainer = styled(Link)`
    /* background-color: lightblue; */
    display: flex;
    color: black;
    text-decoration: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16em;
    padding: 1em;
    gap: 1em;
    cursor: pointer;
    /* border: 1px solid #8f96a3; */

    h2 {
      font-weight: 500;
      font-size: 1rem;
    }

    @media ${device.sm} {
      width: 18em;
    }
  `

  const ProductInfo = styled.div`
    /* background-color: lightcoral; */
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  `

  const Price = styled.p`
    font-weight: 600;
  `

  return (
    <ProductContainer to={`/shop/${id}`}>
      <ProductImage src={imageUrl} alt='' />
      <ProductInfo>
        {' '}
        <h2>{myTruncatedString}...</h2>
        <Price>${price}</Price>
      </ProductInfo>
    </ProductContainer>
  )
}

export default Product

import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

function AllProducts({ name, price, description, imageUrl, id }) {
  var length = 53
  var myString = name
  var myTruncatedString = myString.substring(0, length)

  const ProductImage = styled.img`
    height: 15em;
    object-fit: contain;
    /* background-color: lightcoral; */
  `

  const ProductContainer = styled.div`
    /* background-color: lightblue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18em;
    padding: 1em;
    gap: 1em;
    cursor: pointer;

    h2 {
      font-weight: 500;
      font-size: 1rem;
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
    <ProductContainer>
      <ProductImage src={imageUrl} alt='' />
      <ProductInfo>
        {' '}
        <h2>{myTruncatedString}...</h2>
        <Price>${price}</Price>
      </ProductInfo>
    </ProductContainer>
  )
}

export default AllProducts

import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import device from '../../../device'
import '/server'

const DetailContainer = styled.div`
  font-family: 'poppins', sans-serif;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductListing = styled.div`
  padding: 3em 1em;
  display: grid;
  align-items: center;
  gap: 0em;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
`

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30em;
  margin: auto;

  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
`

const ProductInfo = styled.div`
  display: grid;
  gap: 1em;
  justify-content: center;
  padding: 1em;
  max-width: 550px;
`

const Button = styled(Link)`
  background-color: #456828;
  color: white;
  padding: 1em;
  text-align: center;
  text-decoration: none;
`

const Input = styled.input`
  border: 1px solid grey;
  padding: 1.5em;
  width: 8em;
  margin-top: 0.6em;
`

const ImagePreview = styled.div`
  height: 100%;
  cursor: pointer;
  display: none;
  padding: 1em;

  img {
    height: 3em;
    width: 3em;
    object-fit: contain;
  }

  @media ${device.lg} {
    display: block;
  }
`

function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products/${params.id}`)
      let data = await res.json()
      setProduct(data.products)
    }

    fetchData()
  }, [params.id])

  return (
    <DetailContainer>
      {product ? (
        <ProductListing>
          <ProductImage>
            <ImagePreview>
              {/* <img src={product.imageUrl} alt='' /> */}
            </ImagePreview>
            <img src={product.imageUrl} alt='' />
          </ProductImage>
          <ProductInfo>
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <form action=''>
              <p>Quantity:</p>
              <Input value={1} min='1' max='10' step='1' type='number' />
            </form>
            <Button>Add To Cart</Button>
          </ProductInfo>
        </ProductListing>
      ) : (
        <h2>Loading...</h2>
      )}
    </DetailContainer>
  )
}

export default ProductDetail

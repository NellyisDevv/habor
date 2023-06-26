import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import '/server'

const DetailContainer = styled.div`
  font-family: 'poppins', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductListing = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: auto;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: lightpink; */
  padding: 0.5em;
  width: 28em;
  margin: auto;
  img {
    width: 100%;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  /* background-color: lightgreen; */
  padding: 1em;
  width: 28em;
  margin: auto;
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

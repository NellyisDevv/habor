import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'
import device from '../../../device'
import '/server'
import { getProducts } from '../../../api'

const DetailContainer = styled.div`
  font-family: 'poppins', sans-serif;
  min-height: 67vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProductListing = styled.div`
  padding: 3em 1em;
  display: grid;
  align-items: center;
  gap: 1em;

  @media ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
  margin: auto;

  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }

  @media ${device.sm} {
    height: 30em;
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

const Return = styled.div`
  /* background-color: lightblue; */
  width: 100%;
  padding: 2em 0.9em;

  @media ${device.sm} {
    padding: 2em 4.5em;
    width: 90%;
  }
`

const ReturnLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export function loader() {
  return getProducts()
}

function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = React.useState(null)
  const location = useLocation()
  const productDetail = useLoaderData()

  const previousFilter = location.state.search

  // console.log(location)

  // optional chaining
  // const search = location.state?.search || ''

  // original method
  // const search = location.state && location.state.search || ''

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/products/${params.id}`)
  //     let data = await res.json()
  //     setProduct(data.products)
  //   }

  //   fetchData()
  // }, [params.id])

  productDetail.map(product =>
    product.id === params.id
      ? React.useEffect(() => {
          setProduct(product)
        }, [params.id])
      : null
  )

  // let filterMessage = ''

  // if (previousFilter === 'type=wearables') {
  //   filterMessage = '← Back to all wearables'
  // } else if (previousFilter === 'type=scents') {
  //   filterMessage = '← Back to all scents'
  // } else if (previousFilter === 'type=skincare') {
  //   filterMessage = '← Back to all skincare'
  // } else {
  //   filterMessage = '← Back to all products'
  // }

  const type = location.state?.type || 'products'

  return (
    <DetailContainer>
      <Return>
        <ReturnLink
          to={previousFilter ? `/shop?${previousFilter}` : '..'}
          relative='path'
        >
          {/* {previousFilter ? '← Back to all products' : 'something'} */}
          {/* {filterMessage} */}← Back to all {type}
        </ReturnLink>
      </Return>
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
            <Button to='/cart'>Add To Cart</Button>
          </ProductInfo>
        </ProductListing>
      ) : (
        <h2>Loading...</h2>
      )}
    </DetailContainer>
  )
}

export default ProductDetail

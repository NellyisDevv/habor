export async function getProducts(id) {
  // This is for the product details page
  const url = id ? `/api/products/${id}` : '/api/products'
  // const res = await fetch(`/api/products`)
  const res = await fetch(url)
  // if response not level 200 or 300 throw this error object
  if (!res.ok) {
    throw {
      message: 'Failed to fetch products',
      statusText: res.statusText,
      status: res.status,
    }
  }
  let data = await res.json()
  return data.products
}

export async function getHostProducts(id) {
  const url = id ? `/api/host/products/${id}` : '/api/host/products'
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: 'Failed to fetch products',
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data.products
}

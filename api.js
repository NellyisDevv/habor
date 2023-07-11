export async function getProducts() {
  const res = await fetch(`/api/products`)
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

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDehgx3YL0YFh1MrbT7-4AFmNEPW3qivCs',
  authDomain: 'minazia-ecom.firebaseapp.com',
  projectId: 'minazia-ecom',
  storageBucket: 'minazia-ecom.appspot.com',
  messagingSenderId: '46859016670',
  appId: '1:46859016670:web:5b052e97ac320d99f3254f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const productsCollectionRef = collection(db, 'products')

export async function getProducts() {
  const q = query(productsCollectionRef, where('hostId', '==', '123'))
  const querySnapshot = await getDocs(productsCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }))
  // console.log(dataArr)
  return dataArr
}

export async function getProduct(id) {
  const docRef = doc(db, 'products', id)
  const productSnapshot = await getDoc(docRef)
  return {
    ...productSnapshot.data(),
    id: productSnapshot.id,
  }
}

// export async function getProducts(id) {
//   // This is for the product details page
//   const url = id ? `/api/products/${id}` : '/api/products'
//   // const res = await fetch(`/api/products`)
//   const res = await fetch(url)
//   // if response not level 200 or 300 throw this error object
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch products',
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.products
// }

export async function getHostProducts() {
  const q = query(productsCollectionRef, where('hostId', '==', '123'))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }))
  // console.log(dataArr)
  return dataArr
}

// export async function getHostProducts(id) {
//   const url = id ? `/api/host/products/${id}` : '/api/host/products'
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch products',
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.products
// }

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  })
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    }
  }

  return data
}

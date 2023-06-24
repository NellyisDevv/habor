import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import device from '../../device'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Product(props) {
  return <img src={props.img} alt={props.alt} />
}

export default Product

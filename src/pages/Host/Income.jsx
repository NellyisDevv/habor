import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../device'

const IncomeContainer = styled.div`
  /* background-color: lightgrey; */
  /* background-color: #a3c9a3; */
  display: grid;
  gap: 1em;
  padding: 0em 1em;
  min-height: 64vh;

  @media ${device.sm} {
    font-size: 1rem;
    margin: 0em 0em;
    background-color: white;
  }
`

const IncomeStats = styled.div`
  display: grid;
  gap: 0.5em;

  h1 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 0.9em;
  }
`

const Bold = styled.span`
  text-decoration: underline;
  font-weight: 600;
`

const Review = styled.div`
  /* background-color: lightcoral; */
  /* padding: 2em 0.9em; */
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  position: relative;
  max-width: 500px;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9em;
  }

  @media ${device.sm} {
    background-color: white;
  }
`

const Transactions = styled.div`
  /* background-color: lightcoral; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;

  h2 {
    font-size: 0.9em;
  }

  p {
    font-size: 0.8em;
  }
`

const IncomeTransactions = styled.div`
  display: grid;
  padding: 1em 0em;
`

export default function Income() {
  return (
    <IncomeContainer>
      <IncomeStats>
        <h1>Income</h1>
        <p>
          Last <Bold>30 days</Bold>
        </p>
        <h3>$2,260</h3>
        <img src='/images/income-stat.svg' alt='' />
      </IncomeStats>
      <IncomeTransactions>
        <Transactions>
          <h2>Your transactions (3)</h2>
          <p>
            Last <Bold>30 days</Bold>
          </p>
        </Transactions>
        <Review>
          <h4>$720</h4>
          <p>1/12/22</p>
          {/* <Detail>Detials</Detail> */}
        </Review>
        <Review>
          <h4>$560</h4>
          <p>10/11/22</p>
          {/* <Detail>Detials</Detail> */}
        </Review>
        <Review>
          <h4>$720</h4>
          <p>23/11/22</p>
          {/* <Detail>Detials</Detail> */}
        </Review>
      </IncomeTransactions>
    </IncomeContainer>
  )
}

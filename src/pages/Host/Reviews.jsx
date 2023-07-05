import React from 'react'
import { css } from 'styled-components'
import styled from 'styled-components'
import device from '../../../device'

const ReviewContainer = styled.div`
  /* background-color: lightgrey; */
  /* background-color: #a3c9a3; */
  display: grid;
  gap: 2em;
  padding: 0em 1em 2em 1em;
  min-height: 64vh;

  @media ${device.sm} {
    font-size: 1rem;
    margin: 0em 0em;
    background-color: white;
  }
`

const ReviewStats = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: baseline;
  /* background-color: lightblue; */
  width: 100%;
  gap: 0.5em;
  max-width: 290px;

  h1 {
    font-size: 1.7rem;
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

const Divider = styled.hr`
  height: 0.1em;
  background-color: #757575;
`

const UserReviewContainer = styled.div`
  /* background-color: lightblue; */
  display: grid;
  gap: 0.8em;
  max-width: 500px;
  /* padding-bottom: 2em; */
`

const StarRating = styled.div`
  display: flex;
  gap: 0.3em;
`

const UserRating = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;

  p {
    color: #757575;
  }
`

const UserReview = styled.div``

function Reviews() {
  return (
    <ReviewContainer>
      <ReviewStats>
        <h1>Your reviews</h1>
        <p>
          last <Bold>30 days</Bold>
        </p>
      </ReviewStats>
      <img src={`/images/review-stat.svg`} alt='' />
      <p>Reviews (2)</p>
      <UserReviewContainer>
        <StarRating>
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
        </StarRating>
        <UserRating>
          <h3>Noah</h3>
          <p>December 1, 2022</p>
        </UserRating>
        <UserReview>
          <p>
            The Northern light candles are amazing, I love the materials they
            use becuase they are very high quality which leads to a much cleaner
            burn!
          </p>
        </UserReview>
        <Divider />
      </UserReviewContainer>
      <UserReviewContainer>
        <StarRating>
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
          <img src='/images/star.svg' alt='' />
        </StarRating>
        <UserRating>
          <h3>Elijah</h3>
          <p>November 23, 2022</p>
        </UserRating>
        <UserReview>
          <p>
            I'm in love with the selection of mens watches they are elegant and
            affordable, I have people ask me all the time where I buy my
            watches!
          </p>
        </UserReview>
        <Divider />
      </UserReviewContainer>
    </ReviewContainer>
  )
}

export default Reviews

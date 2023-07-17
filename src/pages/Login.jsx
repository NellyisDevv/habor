import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { css } from 'styled-components'
import imageUrl from '/images/m-test.png'
import styled from 'styled-components'
import device from '../../device'

const LoginContainer = styled.div`
  font-family: 'poppins', sans-serif;
  /* background-color: lightcoral; */
  padding: 2em 0.8em;
  display: grid;
  gap: 0.8em;
  justify-items: center;
  align-items: center;
  min-height: 67vh;

  @media ${device.md} {
    padding: 2em 4em;
  }
`

const LoginForm = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30em;
  padding: 1em;
  width: 95%;
  max-width: 550px;
  /* max-width: 500px; */
  border-radius: 2em;

  @media ${device.sm} {
    box-shadow: 0 11px 34px 0 rgba(0, 0, 0, 0.2);
  }
`

const FormContent = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 1.3em;
  /* background-color: lightblue; */
  width: 100%;
  max-width: 400px;
  padding: 1em;

  img {
    height: 8em;
  }

  button {
    border: none;
    background-color: #456828;
    color: white;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    width: 100%;
    cursor: pointer;
  }

  p {
    font-size: 0.9rem;
  }
`

const Form = styled.form`
  display: grid;
  justify-items: center;
  align-items: center;
  /* background-color: lightblue; */
  width: 100%;

  input {
    padding: 0.6em;
    /* border-radius: 0.5em; */
    width: 100%;
  }
`

const InputOne = styled.input`
  border: 1px solid #d2d2d7;
  border-top-right-radius: 0.6em;
  border-top-left-radius: 0.6em;
  border-bottom: none;
`

const InputTwo = styled.input`
  border: 1px solid #d2d2d7;
  border-bottom-right-radius: 0.6em;
  border-bottom-left-radius: 0.6em;
  margin-bottom: 1.5em;
`

const Direct = styled.span`
  color: #456828;
  font-weight: 500;
  cursor: pointer;
`

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setLoginFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
  }

  return (
    <LoginContainer>
      <LoginForm>
        <FormContent>
          <img src={imageUrl} alt='Site Logo' />
          <h2>Sign in</h2>
          <p>
            New to Minazia? <Direct>Sign up for free</Direct>
          </p>
          <Form onSubmit={handleSubmit}>
            <InputOne
              name='email'
              value={loginFormData.email}
              onChange={handleChange}
              type='email'
              placeholder='email'
            />
            <InputTwo
              name='password'
              value={loginFormData.password}
              onChange={handleChange}
              type='password'
              placeholder='password'
            />
            <button>Sign in</button>
          </Form>
          <p>
            <Direct>Forgot Minazia Password?</Direct>
          </p>
        </FormContent>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login

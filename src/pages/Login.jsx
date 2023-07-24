import React from 'react'
import {
  NavLink,
  useLoaderData,
  useNavigate,
  useSearchParams,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom'
import { css } from 'styled-components'
import imageUrl from '/images/m-test.png'
import styled from 'styled-components'
import device from '../../device'
import { loginUser } from '../../api'

const LoginContainer = styled.div`
  font-family: 'poppins', sans-serif;
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

    &:disabled {
      background-color: #85a16d;
      cursor: progress;
    }
  }

  p {
    text-align: center;
    font-size: 0.9rem;
  }
`

const UserForm = styled(Form)`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;

  input {
    padding: 0.6em;
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

const Message = styled.div`
  text-align: center;

  p {
    margin-bottom: 0.4em;
  }

  h4 {
    font-weight: 600;
  }
`

const LoginAlert = styled.div`
  background-color: #e8b8b8;
  color: #d65656;
  border: 1px solid #d65656;
  border-radius: 0.4em;
  padding: 0.1em 0em;
`

const ErrorMessage = styled.div`
  h4 {
    color: #d65656;
    margin-top: 0.3em;
    font-size: 1rem;
  }
`

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  try {
    const data = await loginUser({ email, password })
    localStorage.setItem('loggedin', true)
    return redirect('/host')
  } catch (err) {
    return err.message
  }
}

export default function Login() {
  const searchParam = useLoaderData()
  const navigation = useNavigation()
  const error = useActionData()

  return (
    <LoginContainer>
      <LoginForm>
        <FormContent>
          <img src={imageUrl} alt='Site Logo' />
          <h2>Sign in</h2>
          <Message>
            <p>
              New to Minazia? <Direct>Sign up for free</Direct> <br />
            </p>
            {searchParam && (
              <LoginAlert>
                <h4>{searchParam}</h4>
              </LoginAlert>
            )}
            <ErrorMessage>{error && <h4>{error}</h4>}</ErrorMessage>
          </Message>
          <UserForm method='POST' replace>
            <InputOne name='email' type='email' placeholder='email' />
            <InputTwo name='password' type='password' placeholder='password' />
            <button disabled={navigation.state === 'submitting'}>
              {navigation.state === 'submitting' ? 'Signing in' : 'Sign in'}
            </button>
          </UserForm>
          <p>
            <Direct>Forgot Minazia Password?</Direct>
          </p>
          <div>
            <h3>Demo Account</h3>
            <p>email: b@b.com</p>
            <p>password: p123</p>
          </div>
        </FormContent>
      </LoginForm>
    </LoginContainer>
  )
}

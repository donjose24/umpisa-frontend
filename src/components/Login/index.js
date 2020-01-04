import React, {useState, useContext} from 'react';
import { Form, Button } from 'semantic-ui-react'
import { loginService } from '../../services/backend/'
import AppContext from '../../contexts/app';
import { Link } from 'react-router-dom';

const Login = () => {
  if (localStorage.getItem('access_token')) {
    window.location.replace('/account')
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoading } = useContext(AppContext);

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await loginService({
        email,
        password,
      });
      localStorage.setItem('access_token', response.data.access_token)
      window.location.replace('/account')
    } catch(e) {
      alert(e.errors)
    }
    setIsLoading(false)
  }

  return (
    <div>
      <h1> Login </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder="******"value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
      <br/>
      <Link to="/register"> Don't have an account? Register here </Link>
    </div>
  )
}

export default Login;

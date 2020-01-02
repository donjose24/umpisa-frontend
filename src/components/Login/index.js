import React, {useState} from 'react';
import { Form, Button} from 'semantic-ui-react'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    //call api
  }

  return (
    <div>
      <h1> Login </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder="******"value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    </div>
  )
}

export default Login;

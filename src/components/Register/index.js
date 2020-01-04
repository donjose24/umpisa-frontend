import React, {useState, useContext} from 'react';
import { Form, Button } from 'semantic-ui-react'
import AppContext from '../../contexts/app';
import { registrationService } from '../../services/backend/'

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { setIsLoading } = useContext(AppContext);

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      await registrationService({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });

      alert('Registration Successful')
      window.location.replace('/login')
    } catch (e) {
      alert(e.errors)
    }
    setIsLoading(false)
  }

  return (
    <div>
      <h1> Register </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='Juan' value={firstName} onChange={e => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Dela Cruz' value={lastName} onChange={e => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder="******"value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type='submit'>Register</Button>
      </Form>
    </div>
  )
}

export default Register;

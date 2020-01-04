import React, {useState, useContext} from 'react';
import { Form, Button } from 'semantic-ui-react'
import { topupService } from '../../services/backend/'
import AppContext from '../../contexts/app';

const Topup = () => { 
  const [amount, setAmount] = useState("");
  const { setIsLoading } = useContext(AppContext);

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      await topupService({
        amount,
      });
      alert('Topup Successful')
      window.location.replace('/balance')
    } catch(e) {
      alert(e.errors)
    }
    setIsLoading(false)
  }

  return (
    <div>
      <h1> Topup </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Amount</label>
          <input type="number" placeholder='Amount' value={amount} onChange={e => setAmount(parseInt(e.target.value, 10))}/>
        </Form.Field>
        <Button type='submit'>Topup</Button>
      </Form>
      <br/>
    </div>
  )
}

export default Topup;

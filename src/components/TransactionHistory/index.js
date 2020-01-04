import React, { useContext, useState, useEffect } from 'react';
import { transactionService } from '../../services/backend/'
import AppContext from '../../contexts/app';
import { List, Image } from 'semantic-ui-react'

const loadTransactions = async (setIsLoading, setTransactions) => {
  setIsLoading(true)
  const transactions = await transactionService()
  setTransactions(transactions.data)
  console.log(transactions)
  setIsLoading(false)
}
const History = () => { 
  const { setIsLoading } = useContext(AppContext);
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    loadTransactions(setIsLoading, setTransactions)
  }, [setIsLoading, setTransactions])

  const componentsToRender = transactions.map((val, index) => (
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
        <List.Content>
          <List.Header> PHP {val.amount.toFixed(2)} </List.Header>
          <List.Description>
            {new Date(val.created_at).toLocaleString()}
          </List.Description>
        </List.Content>
      </List.Item>
  ));
  console.log(componentsToRender)

  return (
    <div>
      <h1> Transaction History </h1>
      <List relaxed>
        {componentsToRender}
      </List>
    </div>
  )
}


export default History;

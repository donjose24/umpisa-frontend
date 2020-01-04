import React, { useContext, useState, useEffect } from 'react';
import { balanceService } from '../../services/backend/'
import AppContext from '../../contexts/app';


const loadBalance = async (setIsLoading, setBalance) => {
  setIsLoading(true)
  const balance = await balanceService()
  setBalance(balance.data.amount)
  setIsLoading(false)
}
const Balance = () => { 
  const { setIsLoading } = useContext(AppContext);
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    loadBalance(setIsLoading, setBalance)
  }, [setIsLoading, setBalance])
  return (
    <div>
      <h1> Your current balance is: </h1>
      <p>{balance}</p>
    </div>
  )
}

export default Balance;

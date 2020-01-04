import React, { useContext, useState, useEffect } from 'react';
import {userDetailsService} from '../../services/backend/'
import AppContext from '../../contexts/app';


const loadUser = async (setIsLoading, setUser) => {
  setIsLoading(true)
  const user = await userDetailsService()
  setIsLoading(false)
  setUser(user.data)
}
const Topup = () => { 
  const { setIsLoading } = useContext(AppContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    loadUser(setIsLoading, setUser)
  }, [setIsLoading, setUser])
  return (
    <div>
      <h1> Account Details </h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Topup;

import React, {useState} from 'react';
const Topup = () => { 
  if (! localStorage.getItem('access_token')) {
    window.location.replace('/login')
  }

  return (
    <h1>Home</h1>
  )
}

export default Topup;

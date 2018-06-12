import React from 'react';

export default function Register(props){
  return(
    <div className="RegisterForm">
      <label>Namn</label>
      <input type="text"/>
      <label>Mobilnummer</label>
      <input type="text"/>
      <label>Lösenord</label>
      <input type="password"/>
      <button onClick={props.login}>Registrera dig</button>
  </div>
  )
}


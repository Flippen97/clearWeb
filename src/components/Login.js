import React from 'react';

export default function Login(props){
  return(
    <div className="LoginForm">
      <label>Mobilnummer</label>
      <input type="text"/>
      <label>Lösenord</label>
      <input type="password"/>
      <button onClick={props.login}>Logga in</button>

      <p>Har du inget konto? <span onClick={props.register}>Registrera dig här!</span></p>
    </div>
  )
}

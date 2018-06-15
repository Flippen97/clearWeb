import React from 'react';

export default function Login(props){
  return(
    <div className="LoginForm">
      <form>
        <label className="field a-field a-field_a1 page__field">
          <input className="field__input" placeholder="Skriv nummer här..." required />
          <span className="field__label-wrap">
            <span className="field__label">Mobilnummer</span>
          </span>
        </label>
        <label className="field a-field a-field_a1 page__field">
          <input className="field__input" placeholder="Skriv lösenord här..." type="password" required />
          <span className="field__label-wrap">
            <span className="field__label">Lösenord</span>
          </span>
        </label>
        <button onClick={props.login}>Logga in</button>
        <p>Har du inget konto? <span onClick={props.register}>Registrera dig här!</span></p>
      </form>
    </div>
  )
}

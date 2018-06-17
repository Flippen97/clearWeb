import React from 'react';
import Logo from './Logo';

export default function Register(props){
  return(
    <div className="register">
      <Logo/>
      <div className="RegisterForm">
        <form>
          <label className="field a-field a-field_a1 page__field">
            <input className="field__input" placeholder="Skriv ditt namn här..." required />
            <span className="field__label-wrap">
              <span className="field__label">Namn</span>
            </span>
          </label>
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
          <button onClick={props.login}>Registrera dig</button>
        </form>
      </div>
    </div>
  )
}


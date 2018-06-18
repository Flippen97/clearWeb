import React from 'react';

export default function GroupOptions(props){
  return(
  <div className="groupOptions">
    <label className="field a-field a-field_a1 page__field">
      <input className="field__input" placeholder="Skriv gruppnamn här..." required />
      <span className="field__label-wrap">
        <span className="field__label">Gruppnamn</span>
      </span>
    </label>
    <button onClick={props.newGroup}>Lägg till grupp</button>
    <span>kod: {Math.floor((Math.random() * 9999) + 1000)}</span>
    <span></span>
    <label className="field a-field a-field_a1 page__field">
      <input className="field__input" placeholder="Skriv Gruppkod här..." required />
      <span className="field__label-wrap">
        <span className="field__label">Gruppkod</span>
      </span>
    </label>
    <button onClick={props.joinGroup}>Gå med i grupp</button>
  </div>
  )
}
/**
  <div>
          <label>Gruppnamn</label>
          <input type="text"/>
          <span>kod: {Math.floor((Math.random() * 9999) + 1000)}</span>
          <button onClick={props.newGroup}>Lägg till grupp</button>
        </div>

        <div>
          <label>Gruppkod</label>
          <input type="text"/>
          <button onClick={props.joinGroup}>Gå med i grupp</button>
        </div>
 */
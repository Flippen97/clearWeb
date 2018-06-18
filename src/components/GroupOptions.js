import React from 'react';

export default function GroupOptions(props){
  return(
  <div className="groupOptions">
    <nav>
      <button onClick={props.groupNav} className={!props.groupState ? "activeButton" : ""}>Gå med i grupp</button>
      <button onClick={props.groupNav} className={props.groupState ? "activeButton" : ""}>Skapa ny grupp</button>
    </nav>
    {props.groupState &&    
    <React.Fragment>
    <label className="field a-field a-field_a1 page__field">
      <input className="field__input" placeholder="Skriv gruppnamn här..." required />
      <span className="field__label-wrap">
        <span className="field__label">Gruppnamn</span>
      </span>
    </label>
    <button className="groupButton" onClick={props.newGroup}>Lägg till grupp</button>
    <span className="group-code">Din gruppkod är: <span className="bold">{Math.floor((Math.random() * 9999) + 1000)}</span></span>
    </React.Fragment>}
 
    {!props.groupState &&  
    <React.Fragment>
      <label className="field a-field a-field_a1 page__field">
        <input className="field__input" placeholder="Skriv Gruppkod här..." required />
        <span className="field__label-wrap">
          <span className="field__label">Gruppkod</span>
        </span>
      </label>
      <button className="groupButton" onClick={props.joinGroup}>Gå med i grupp</button>
    </React.Fragment>}
   
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
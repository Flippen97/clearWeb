import React from 'react';

export default function GroupOptions(props){
  return(<div>
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
  </div>
  )
}
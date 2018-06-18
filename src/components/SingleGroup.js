import React, {Component}  from 'react';
import img from '../images/swish1.png';

export default class SingleGroup extends Component{
  state = {
    bill: false,
    swish: false,
    clear: false,
    nav: 1,
  }

  handleBill = () => {
    this.setState({bill:true})
  }

  handleSwish = () => {
    if(this.state.swish){
      return this.setState({swish:false, clear: true})
    }
    return this.setState({swish:true})
    
  }

  showPrice = () => {
    this.setState({nav: 1})
  }
  showHistory = () => {
    this.setState({nav: 3})
  }

  showDebt = () => {
    this.setState({nav: 2 })
  }

 render(){
   let view = (
     <div>
       <img onClick={this.handleSwish} src={img} alt="SWISH"/>
     </div>
   );
   if(!this.state.swish){
     view = (
      <div>
        <header className="singlegroupHeader">
          <span onClick={this.props.back} className="singlegroupBack">
            <i className="fa fa-chevron-left" /> Grupper
          </span>
          <span className="singlegroupTitle">Summerburst</span>
          <span></span>
        </header>
      
        <ul>
          <li>Jag  {this.state.clear ? "0" : <span>{!this.state.bill ? "- 300" : "- 150" }</span>}</li>
          <li>Alex {this.state.clear ? "0" : <span>{!this.state.bill ? "300" : "150" }</span>}</li>
        </ul>

        {this.state.nav === 1 && <div>
          <div className="newPurchase">
            <h2>Registrera köp</h2>
            <label className="field a-field a-field_a1 page__field">
              <input className="field__input" placeholder="Skriv vad du köpt här..." required />
              <span className="field__label-wrap">
                <span className="field__label">Vad har du köpt?</span>
              </span>
            </label>
            <label className="field a-field a-field_a1 page__field">
              <input className="field__input" placeholder="Skriv kostnaden här..." required />
              <span className="field__label-wrap">
                <span className="field__label">Hur mycket kostade det?</span>
              </span>
            </label>
            <button onClick={this.handleBill}>Lägg till</button>
          </div>
         
        </div>}

        {this.state.nav === 3 && <div className="history">
          <h2>Historik</h2>
          <ul>
            {this.state.clear && <li>Jag - Betalade av skuld 150:- </li> }
            {this.state.bill && <li>Jag - Lunch 300:-</li>}
            <li>Alex - Skumpa 600:-</li>
            <li>Jag - Betalade av skuld 100:- </li>
            <li>Alex - Upgrade ticets VIP 1200:-</li>
            <li>Jag - Biljetter 1000:-</li>
          </ul>
        </div>}

        {this.state.nav === 2 && <div className="debt">
          <h2>Dina skulder</h2>
         {!this.state.clear && <div className="solveDebt">
            <p>Du är skyldig Alex<span className="bold"> {!this.state.bill ? "300" : "150"} kr </span></p>
            <button onClick={this.handleSwish}>Swisha skuld</button>
          </div>}
          {this.state.clear && <p>Du har inga skulder</p>}
        </div>}
        <nav className="singleNav">
          <button onClick={this.showPrice} className={this.state.nav === 1 ? "activeButton" : ""}>Registrera köp</button>
          <button onClick={this.showDebt} className={this.state.nav === 2 ? "activeButton" : ""}>Skuld</button>
          <button onClick={this.showHistory} className={this.state.nav === 3 ? "activeButton" : ""}>Historik</button>
        </nav>
    </div>
     )
   } 

   return(


    <div className="singlegroup">
      {view}
    </div>
   )
  }
}
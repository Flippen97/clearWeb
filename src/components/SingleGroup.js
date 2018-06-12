import React, {Component}  from 'react';
import img from '../images/swish.png';

export default class SingleGroup extends Component{
  state = {
    bill: false,
    swish: false,
    clear: false,
    history: false,
    pricing: true
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
    this.setState({pricing:true,history:false})
  }
  showHistory = () => {
    this.setState({pricing:false,history:true})
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
      <span onClick={this.props.back}>
      <i className="fa fa-chevron-left" />
    </span>
    <h1>Summerburst</h1>
    <ul>
     <li>Jag  {this.state.clear ? "0" : <span>{!this.state.bill ? "-300" : "-150" }</span>}</li>
      <li>Alex {this.state.clear ? "0" : <span>{!this.state.bill ? "+300" : "+150" }</span>}</li>
    </ul>
    <button onClick={this.showPrice}>Skuld</button><button onClick={this.showHistory}>Historik</button>
    {this.state.pricing && <div><div className="newPurchase">
      <label>Vad har du köpt? </label>
      <input type="text"/>
      <label>Hur mycket kostade det? </label>
      <input type="text"/>
      <button onClick={this.handleBill}>Lägg till</button>
    </div>
    {!this.state.clear && <div className="solveDebt">
      <p>Du är skyldig Alex {!this.state.bill ? "300" : "150"} kr</p>
      <button onClick={this.handleSwish}>Swisha skuld</button>
    </div>}</div>}

    {this.state.history && <div className="history">
      <p>Historik</p>
      <ul>
        {this.state.bill && <li>Jag - Lunch 300:-</li>}
        <li>Alex - Skumpa 600:-</li>
        <li>Jag - Betalade av skuld 100:- </li>
        <li>Alex - Upgrade ticets VIP 1200:-</li>
        <li>Jag - Biljetter 1000:-</li>
      </ul>
    </div>}
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
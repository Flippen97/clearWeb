import React, {Component} from 'react';
import GroupOptions from './GroupOptions';

export default class Homepage extends Component{
  state = {
    newGroup: false,
    newGroupName: false,
    joinedGroupName: false
  }

  handleNewGroup = () => {
    
    if(this.state.newGroup){
      return this.setState({newGroup:false})
    }
    return this.setState({newGroup:true})
    
  }
  
  handleJoinGroup = () => {
    this.setState({joinedGroupName: true})
  }
  createNewGroup = () => {
    this.setState({newGroupName: true})
  }
  render(){
    return(
      <div className="homepage">
        <header>
          <h1>Dina grupper</h1>
          <span onClick={this.handleNewGroup}>
            +
          </span>
        </header>
        {this.state.newGroup && <GroupOptions joinGroup={this.handleJoinGroup} 
                                              newGroup={this.createNewGroup}/>}
        <ul>
          <li>Gröna lund</li>
          <li onClick={this.props.singlegroup}>Summerburst</li>
          <li>Spanien</li>
          {this.state.newGroupName && <li>Ny grupp</li>}
          {this.state.joinedGroupName && <li>Joinad grupp</li>}
        </ul>
      </div>
    )
  }
}
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
        <header className="homepageHeader">
          <span className="homepageBack"><i className="fa fa-chevron-left" /><span>Logout</span></span>
          <span className="homepageTitle">Dina grupper</span>
          <span onClick={this.handleNewGroup} className="newGroup"><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
        </header>
        {this.state.newGroup && <GroupOptions joinGroup={this.handleJoinGroup} 
                                              newGroup={this.createNewGroup}/>}
        <ul>
          <li>Gröna lund <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li onClick={this.props.singlegroup}>Summerburst <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>Spanien <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          {this.state.newGroupName && <li>Ny grupp <i className="fa fa-chevron-right" aria-hidden="true"></i></li>}
          {this.state.joinedGroupName && <li>Joinad grupp <i className="fa fa-chevron-right" aria-hidden="true"></i></li>}
        </ul>
      </div>
    )
  }
}
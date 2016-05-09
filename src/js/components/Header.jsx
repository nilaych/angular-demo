import React from 'react';
import UserDetail from './UserDetail.jsx'

class Header extends React.Component {

  render() {
    return (
      <div>
		<img src={this.props.logo} width='75px' height='75px'/>
		<UserDetail image={this.props.userImage} width='25px' height='25px' name={this.props.userName}/>		
      </div>
    );
  }
}

export default Header;
import React from 'react';
import Header from './js/components/Header.jsx';
import UserDetail from './js/components/UserDetail.jsx';
import SearchPanel from './js/components/SearchPanel.jsx';
import OfficerComboBox from './js/components/OfficerComboBox.jsx';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
	    <Header logo='images/app-logo.png' userImage={this.props.userImage} userName={this.props.userName}/>
		<UserDetail image={this.props.userImage} width='150px' height='150px' name={this.props.userName}/>	
		<SearchPanel/>
      </div>
    );
  }
}

export default Dashboard;
import React from 'react';

class UserDetail extends React.Component {

  render() {
    return (
      <div>
		<div>
			<img src={this.props.image} width={this.props.width} height={this.props.height} alt="User" />
			<p>{this.props.name}</p>
		</div>
	  </div>
    );
  }
}

export default UserDetail;
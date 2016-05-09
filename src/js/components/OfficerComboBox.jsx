import React from 'react';

class OfficerComboBox extends React.Component {

	renderItem() {
		return(
			this.props.chindren.map(function(option) {
			 <option value={option.key}>{option.value}</option>
				})
		);
	}
	
  render() {
    return (
		<div>
			{this.props.title}
			<select name="lob">
				 <option value={this.props.children[0].key}>{this.props.children[0].value}</option>
			</select>			
		</div>
    );
  }
}

export default OfficerComboBox;
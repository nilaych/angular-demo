import React from 'react';
import UserDetail from './UserDetail.jsx';
import OfficerComboBox from './OfficerComboBox.jsx';

class SearchPanel extends React.Component {

  constructor() {
	super();
	this.state={
					"selectedLob": null,
					"lobList": [{
					               "key:":"GWM",
					               "value": "GWM"
								},
								{
								   "key:":"CPC",
								   "value:":"CPC"
								}],
					"officer":  [{
					               "key:":"Officer 1",
					               "value": "Officer 1"
								}],
					"marketDirector": [{
					               "key:":"Market Director 1",
					               "value": "Market Director 1"
								}],
					"regionalDirector": [{
					               "key:":"Regional Director 1",
					               "value": "Regional Director 1"
								}],
					"supervisoryManager": [{
					               "key:":"Supervisory Manager 1",
					               "value": "Supervisory Manager 1"
								}],
					"regionalSupervisoryManager": [{
					               "key:":"Regional Supervisory Manager 1",
					               "value": "Regional Supervisory Manager 1"
								}],
					"selectedOfficer": null,
					"selectedMarketDirector": null,
					"selectedRegionalDirector": null,
					"selectedSupervisoryManager": null,
					"selectedRegionalSupervisoryManager": null,					
			   }
  }

  onSearch() {
	alert('search');
  }

  render() {
    return (
      <div>
	    <OfficerComboBox title='LOB' selected={this.state.selectedLob}>{this.state.lobList}</OfficerComboBox>
		<OfficerComboBox title='Responsible Officer' selected={this.state.selectedOfficer}>{this.state.officer}</OfficerComboBox>
		<OfficerComboBox title='Reg. Supervisory Manager' selected={this.state.selectedRegionalSupervisoryManager}>{this.state.regionalSupervisoryManager}</OfficerComboBox>
		<OfficerComboBox title='Supervisory Manager' selected={this.state.selectedSupervisoryManager}>{this.state.supervisoryManager}</OfficerComboBox>
		<OfficerComboBox title='Market Director' selected={this.state.selectedMarketDirector}>{this.state.marketDirector}</OfficerComboBox>
		<OfficerComboBox title='Regional Director' selected={this.state.selectedRegionalDirector}>{this.state.regionalDirector}</OfficerComboBox>
		<div><button onClick={this.onSearch.bind(this)} selected={this.state.selectedLob}>Search</button></div>
      </div>
    );
  }
}

export default SearchPanel;
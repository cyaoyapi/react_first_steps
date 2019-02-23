import React, { Component } from 'react';

import Table from './Table';

class App extends Component{

	state = {
		people: []
	}

	removePerson = given_index => {
		const { people } = this.state;
		this.setState({
			people:people.filter((person, index) => index !== given_index)
		});
	}

	render(){
		
		return (
			<div className="container">
				<h1>Hello World! I'am learning React.js</h1>
				<h2>List of persons</h2>
				<Table tableData={this.state.people} removeData={this.removePerson} />
			</div>
		);
	}
}

export default App;
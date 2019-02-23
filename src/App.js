import React, { Component } from 'react';

import Table from './Table';
import Form from './Form';

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

	handleSubmit = person => {
		this.setState ({
			people: [...this.state.people, person]
		});
	}

	render(){
		
		return (
			<div className="container">
				<h1>Hello World! I'am learning React.js</h1>
				<h2>List of persons</h2>
				<Table tableData={this.state.people} removeData={this.removePerson} />
				<h2>Add new person</h2>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;
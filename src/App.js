import React, { Component } from 'react';

import Table from './Table';

class App extends Component{

	render(){
		const myFamily = [
			{
				'name': 'Cyrille',
				'job': 'Computer Scientist'
			},
			{
				'name': 'Agnes',
				'job': 'Cosmetologist'
			},
			{
				'name': 'Dabira',
				'job': 'Business Woman'
			},
			{
				'name': 'Akiva',
				'job': 'Man of God'
			},
		]

		return (
			<div className="container">
				<h1>Hello World! I'am learning React.js</h1>
				<h2>My Family</h2>
				<Table tableData={myFamily} />
			</div>
		);
	}
}

export default App;
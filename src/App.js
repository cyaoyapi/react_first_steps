import React, { Component } from 'react';

import Table from './Table';

class App extends Component{

	render(){
		return (
			<div className="container">
				<h1>Hello World! I'am learning React.js</h1>
				<h2>My Family</h2>
				<Table />
			</div>
		);
	}
}

export default App;
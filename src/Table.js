import React, { Component } from 'react';

const TableHeader = function(){
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>Action</th>
			</tr>
		</thead>	
	);
};

const TableBody = props => {
	
	const rows = props.tableData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.removeData(index)}>
						Delete
					</button>
				</td>
			</tr>
		);
	});
	return <tbody>{rows}</tbody>;		
	
};

class Table extends Component{

	render(){

		const { tableData, removeData } = this.props;
		return (
			<table>
				<TableHeader />
				<TableBody tableData={tableData} removeData={removeData} />
			</table>
		);
	}
}

export default Table;
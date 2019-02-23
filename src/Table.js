import React, { Component } from 'react';

class Table extends Component{

	render(){
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Job</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Cyrille</td>
						<td>Computer Scientist</td>
					</tr>
					<tr>
						<td>Agnes</td>
						<td>Cosmetologist</td>
					</tr>
					<tr>
						<td>Dabira</td>
						<td>Business woman</td>
					</tr>
					<tr>
						<td>Akiva</td>
						<td>Man of God</td>
					</tr>				
				</tbody>			
			</table>
		);
	}
}

export default Table;
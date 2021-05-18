import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class search extends Component {
	state = { query: { position: '', location: '' } };
	handleSearchInput = (e) => {
		e.preventDefault();
		this.setState({
			query: {
				...this.state.query,
				[e.currentTarget.name]: e.currentTarget.value,
			},
		});
	};
	//   triggersSearch = (e) => {
	//     if (e.key === "Enter") {
	//       this.props.searchJobs(this.state.query);
	//     }
	//   };
	render() {
		return (
			<div>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Position</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter email"
							value={this.state.query.position}
							onChange={(e) => this.handleSearchInput(e)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Location</Form.Label>
						<Form.Control
							type="text"
							placeholder="Password"
							value={this.state.query.location}
							onChange={(e) => this.handleSearchInput(e)}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default search;

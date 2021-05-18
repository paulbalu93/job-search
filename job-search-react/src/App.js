import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import SearchEngine from './components/SearchEngine';

class App extends React.Component {
	state = { jobs: [] };
	url = 'https://jobs.github.com/positions.json?';
	searchJobs = async (query) => {
		try {
			// this.setState({ loading: true });
			const res = await fetch(`${this.url}desciption=${query.position}&location=${query.location}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (res.ok) {
				const payload = await res.json();
				console.log(payload);
				this.setState({ jobs: payload });
			}
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<Router>
				<Container>
					<Row>
						<Col sm={12} className="text-center background-div">
							<Link to="/">
								<h1>Job Search</h1>
							</Link>
						</Col>
					</Row>

					<Route
						path="/"
						exact
						render={(routerProps) => <SearchEngine {...routerProps} searchJobs={this.searchJobs} />}
					/>
				</Container>
			</Router>
		);
	}
}
export default App;

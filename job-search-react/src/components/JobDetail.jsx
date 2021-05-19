import React from 'react';
import { Container, Col, Image, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToFavAction } from '../actions';
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	addToFav: (job) => {
		addToFavAction(job);
	},
});

export default class JobDetail extends React.Component {
	state = {
		job: null,
	};

	componentDidMount() {
		this.getJobDetails();
	}

	getJobDetails = async () => {
		const response = await fetch(
			`https://strive-proxy.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.jobId}.json`
		);
		const data = await response.json();

		this.setState({ jobDetails: data });
	};

	render() {
		const { jobDetails } = this.state;
		return (
			<Container>
				<Row>
					{jobDetails && (
						<>
							<Col xs={12} className="d-flex align-items-center my-4">
								<Image fluid className="header-img me-3" src={jobDetails.company_logo} />
								<h1>{jobDetails.company}</h1>
							</Col>
							<Col xs={12} className=" ">
								<div dangerouslySetInnerHTML={{ __html: jobDetails.description }} />

								<h5>How to apply:</h5>
								<div dangerouslySetInnerHTML={{ __html: jobDetails.how_to_apply }} />

								{this.props.user.firstName ? (
									<Button color="primary" onClick={() => this.props.addToCart(this.state.book)}>
										ADD TO CART
									</Button>
								) : (
									<span>You need to login for adding this to the cart</span>
								)}
							</Col>
						</>
					)}
				</Row>
			</Container>
		);
	}
}

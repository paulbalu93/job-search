import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { withRouter } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Component } from 'react';

import { setUserNameAction } from '../actions';

const mapStateToProps = (state) => ({
	jobsLength: state.fav.jobs.length,
	userName: state.user.firstName,
});

const mapDispatchToProps = (dispatch) => ({
	setUserName: (name) => {
		dispatch(setUserNameAction(name));
	},
});

class favIndicator extends Component {
	state = {
		inputValue: '',
	};

	render() {
		return (
			<div className="ml-auto mt-2">
				{this.props.userName ? (
					<>
						<span className="mr-2">Welcome {this.props.userName}!</span>
						<Button color="primary" onClick={() => this.props.history.push('/favourite')}>
							<FaRegHeart />
							<span className="ml-2">{this.props.productsLength}</span>
						</Button>
					</>
				) : (
					<FormControl
						placeholder="Username"
						aria-label="Username"
						aria-describedby="basic-addon1"
						value={this.state.inputValue}
						onChange={(e) => this.setState({ inputValue: e.currentTarget.value })}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								console.log('you just pressed enter');

								this.props.setUserName(this.state.inputValue);
							}
						}}
					/>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(favIndicator));

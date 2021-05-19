import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions';

const mapStateToProps = (state) => ({
	jobsInFav: state.fav.jobs,
});

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (index) => dispatch(removeFromCartAction(index)),
});

const Cart = ({ jobsInFav, removeFromCart }) => (
	<Row>
		<Col sm={12}>
			<ul style={{ listStyle: 'none' }}>
				{jobsInFav.map((job, i) => (
					<li key={i} className="my-4">
						<Button variant="danger" onClick={() => removeFromCart(i)}>
							<FaTrash />
						</Button>
						<img className="book-cover-small" src={job.company_logo} alt="book selected" />
						{job.title}
					</li>
				))}
			</ul>
		</Col>
		<Row>
			<Col sm={12} className="font-weight-bold">
				TOTAL: {jobsInFav.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0)}
			</Col>
		</Row>
	</Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

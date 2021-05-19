import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import favIndicator from './components/favIndicator';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import JobDetail from './components/JobDetail';

const App = () => (
	<BrowserRouter>
		<Container>
			<Row>
				<Col sm={12} className="text-center background-div">
					<Link to="/">
						<h1> Job Search Engine </h1>
					</Link>
				</Col>
				<favIndicator />
			</Row>
			<hr />
			<Route exact path="/" component={Search} />
			<Route path="/:jobId" component={JobDetail} />
			<Route path="/favourite" component={JobDetail} />
		</Container>
	</BrowserRouter>
);

export default App;

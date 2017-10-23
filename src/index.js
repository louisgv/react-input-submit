import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
width: 100%;
height: 45px;
justify-content: center;
`;

const Input = styled.input `
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;

border-color: black;

font-size: 14.4px;

padding-left: 1em;
margin-right: 1em;

line-height: 1em;

text-decoration: none;
text-transform: uppercase;

width: 72%;

:active, :focus {
	outline:none;
}
`;

const Button = styled.button `
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;

background-color: black;

border-color: black;
color: white;
width: 18%;

font-size: 14.4px;

transition: 0.5s;

:hover {
	opacity: 0.6;
}

:active, :focus {
	outline:none;
}
`;

export default class InputSubmit extends React.PureComponent {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}

	state = {
		value: ''
	}

	handleSubmit = () => {
		this.props.onSubmit(this.state.value);
	}

	handleInputChange = (e) => {
		const value = e.target.value;
		this.setState({
			value
		});
	}

	render() {
		return(
			<Container>
				<Input placeholder={this.props.container}
					value={this.state.value}
					onChange={this.handleInputChange}
				/>
				<Button onClick={this.handleSubmit}>SUBMIT</Button>
			</Container>
		);
	}
}

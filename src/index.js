import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';

import {Button, Input, Container} from './component';

export default class InputSubmit extends React.PureComponent {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		clearOnSubmit: PropTypes.bool,
		uppercase: PropTypes.bool,
		buttonText: PropTypes.string,
		theme: PropTypes.object,
		palette: PropTypes.string,
		reverse: PropTypes.bool
	}

	static defaultProps = {
		clearOnSubmit: false,
		uppercase: false,
		buttonText: 'SUBMIT',
		palette: 'grayscale',
		reverse: false,
		theme: {}
	};

	state = {
		value: ''
	}

	handleSubmit = () => {
		this.props.onSubmit(this.state.value);
		if (this.props.clearOnSubmit) {
			this.setState({ value : '' });
		}
	}

	handleInputKeyDown = ({keyCode}) => {
		if (keyCode === 13) {
			this.handleSubmit()
		}
	}

	handleInputChange = (e) => {
		const {value} = e.target;
		this.setState({ value });
	}

	render() {
		return(
			<div className={this.props.className}>
				<ThemeProvider theme={this.props.theme} >
					<Container palette={this.props.palette} reverse={this.props.reverse}>

						<Input palette={this.props.palette} reverse={this.props.reverse}
							placeholder={this.props.placeholder}
							uppercase={this.props.uppercase}
							value={this.state.value}
							onKeyDown={this.handleInputKeyDown}
							onChange={this.handleInputChange}
						/>

						<Button palette={this.props.palette} reverse={this.props.reverse}
							onClick={this.handleSubmit}>
							{this.props.buttonText}
						</Button>
					</Container>
				</ThemeProvider>
			</div>
		);
	}
}

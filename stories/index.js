import React from 'react';

import {
	storiesOf
} from '@storybook/react';

import {
	 action
} from '@storybook/addon-actions';

import styled from 'styled-components';

import InputSubmit from './../src';

const StyledInputSubmit = styled(InputSubmit)`
	background: black;
	padding: 1em;
`

storiesOf('InputSubmit', module)
	.add('simple input', () => (
		<InputSubmit onSubmit={action('OnSubmit')} placeholder="Put something here"/>
	))
  .add('simple input that clear on enter', () => (
    <InputSubmit onSubmit={action('OnSubmit')} clearOnSubmit placeholder="Put something here"/>
  ))
  .add('simple input is uppercase', () => (
    <InputSubmit onSubmit={action('OnSubmit')} uppercase placeholder="Put something here"/>
  ))
  .add('should show correct pallete from external source', () => (
	<InputSubmit palette='secondary' onSubmit={action('OnSubmit')} uppercase placeholder="Put something here"/>
  ))
  .add('should inherit style from external source', () => (
	<StyledInputSubmit onSubmit={action('OnSubmit')} uppercase placeholder="Put something here"/>
  ))

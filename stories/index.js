import React from 'react';

import {
	storiesOf
} from '@storybook/react';

import {
	 action
} from '@storybook/addon-actions';

import InputSubmit from './../src';

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

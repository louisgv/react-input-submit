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
	));

import styled from 'styled-components';

import { palette } from 'styled-theme';

export const Button = styled.button `
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;

background-color: ${palette(0)};
border-color: ${palette(0)};

color: ${palette('grayscale', 0, true)};

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

export const Container = styled.div `
display: flex;
width: 100%;
height: 45px;
justify-content: center;
`;

export const Input = styled.input `
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;

border-color: ${palette(0)};

font-size: 14.4px;

padding-left: 1em;
margin-right: 1em;

line-height: 1em;

text-decoration: none;

text-transform: ${props => props.uppercase
	? 'uppercase'
	: 'none'
};

width: 72%;

:active, :focus {
	outline:none;
}
`;

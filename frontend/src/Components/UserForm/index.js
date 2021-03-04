import React from 'react';

import { useInputValue } from '../../hooks/useInputValue';

import { Form, Input, Button, Title } from './styles';

export const UserForm = ({ onSubmit, title }) => {
	const email = useInputValue('');
	const password = useInputValue('');

	return (
		<>
			<Title>{title}</Title>

			<Form onSubmit={onSubmit}>
				<Input
					placeholder='Email/Username'
					value={email.value}
					onChange={email.onChange}
				/>

				<Input
					placeholder='Password'
					type='password'
					value={password.value}
					onChange={password.onChange}
				/>

				<Button>Go!</Button>
			</Form>
		</>
	);
};

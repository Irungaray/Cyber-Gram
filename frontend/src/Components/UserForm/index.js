import React from 'react';

import { useInputValue } from '../../hooks/useInputValue';

import { Form, Input, Button, Title } from './styles';

export const UserForm = ({ error, disabled, onSubmit, title }) => {
	const email = useInputValue('');
	const password = useInputValue('');

  const handleSubmit = (e)  => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

	return (
		<>
			<Title>{title}</Title>

			<Form disabled={disabled} onSubmit={handleSubmit}>
				<Input
          disabled={disabled}
					placeholder='Email/Username'
					value={email.value}
					onChange={email.onChange}
				/>

				<Input
          disabled={disabled}
					placeholder='Password'
					type='password'
					value={password.value}
					onChange={password.onChange}
				/>

				<Button disabled={disabled}>
          Go!
        </Button>
			</Form>

      {error && <span>{error}</span>}
		</>
	);
};

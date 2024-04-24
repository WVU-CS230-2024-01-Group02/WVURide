import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';


import App from './App';
import CreateAccount from './Components/CreateAccount';


/*
***************** Create Account Tests, currently running 5/5 successful
 */
describe('CreateAccount Component', () => {
  it('should display error message for invalid email', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<BrowserRouter><CreateAccount /></BrowserRouter>);
    const emailInput = getByPlaceholderText('Mix Email');
    const button = getByText('Create Your Account');

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled;
    });
  });

  it('should display error message for invalid password', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<BrowserRouter><CreateAccount /></BrowserRouter>);
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm your password');
    const button = getByText('Create Your Account');

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'invalid' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled;
    });
  });

  it('should display error message for invalid name', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<BrowserRouter><CreateAccount /></BrowserRouter>);
    const nameInput = getByPlaceholderText('Full Name');
    const button = getByText('Create Your Account');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled;
    });
  });

  it('should display error message for invalid username', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<BrowserRouter><CreateAccount /></BrowserRouter>);
    const usernameInput = getByPlaceholderText('Username');
    const button = getByText('Create Your Account');

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled;
    });
  });

  it('should ', async () => {
    const { getByPlaceholderText, getByTestId } = render(<BrowserRouter><CreateAccount /></BrowserRouter>);
    const nameInput = getByPlaceholderText('Full Name');
    const emailInput = getByPlaceholderText('Mix Email');
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm your password');
    const button = getByTestId("create-button")

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@mix.wvu.edu' } });
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(global.alert).not.toHaveBeenCalled;
    });
  });
});




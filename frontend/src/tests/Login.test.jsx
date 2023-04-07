import renderWithRouterRedux from './utils/renderWithRouterRedux'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe('Pagina de Login', () => {
  it('01 - Teste se os elementos são encontrados na tela, e a rota atual', () => {
    const { history } = renderWithRouterRedux(<App />);

    const labelEmail = screen.getByLabelText(/Email/);
    const labelPassword = screen.getByLabelText(/Password/);

    expect(history.location.pathname).toBe('/')
    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
  });

  it('02 - Teste se os elementos recebem valores, e a rota atual', async () => {
    const { store } = renderWithRouterRedux(<App />);

    const labelEmail = screen.getByLabelText(/Email/);
    const labelPassword = screen.getByLabelText(/Password/);
    const button = screen.getByRole('button', { name: /Login/ });

    await userEvent.type(labelEmail, 'robert@email.com');
    await userEvent.type(labelPassword, 'secret_admin');
    await userEvent.click(button);
    
    const user = store.getState().user.login;

    expect(user.email).toBe('robert@email.com');
    expect(user.password).toBe('secret_admin');
  });
})
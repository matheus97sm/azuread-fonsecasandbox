import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { Link } from 'react-router-dom';

import { authProvider } from '../../msalConfig'

interface AuthenticationProps {
  login: () => void,
  logout: () => void,
  error: boolean,
  authenticationState: string,
  accountInfo: any
}

export function Header() {
  console.log(authProvider, authProvider.authenticationState)

  return (
    <AzureAD provider={authProvider} forceLogin={false}>
      {
        ({login, logout, authenticationState, error, accountInfo}: AuthenticationProps) => {
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
              return (
                <p>
                  <span>Welcome! {process.env.NODE_ENV}</span>
                  <button onClick={() => logout()}>Logout</button>
                  
                  <Link to="/">Login</Link>
                  <Link to="/dashboard">Dashboard</Link>
                </p>
              )
            case AuthenticationState.Unauthenticated:
              return (
                <div>
                  {error && <p><span>An error occured during authentication, please try again!</span></p>}
                  <p>
                    <span>Hey stranger, you look new! {process.env.NODE_ENV}</span>
                    <button onClick={() => login()}>Login</button>
                  
                    <Link to="/">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                  </p>
                </div>
              );
            default:
              return (
                <h1>Loading</h1>
              )
          }
        } 
      }
    </AzureAD>
  )
}

// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
// Msal Configurations
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/fonsecasandbox.onmicrosoft.com',
    clientId: 'a6960f44-4b83-4d81-88bc-39f7090985cd',
    redirectUri: `${window.location.origin}/dashboard`
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  } as const
};
 
// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'https://fonsecasandbox.com/api/a6960f44-4b83-4d81-88bc-39f7090985cd/Login.Read'
  ]
}
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
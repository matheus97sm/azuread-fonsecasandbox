import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

const adalConfig = {
  tenant: '',
  clientId: '',
  endpoints: {
    api: ''
  },
  cacheLocation: 'sessionStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

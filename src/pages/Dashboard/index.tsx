import { AzureAD } from 'react-aad-msal';

import { authProvider } from '../../msalConfig';

export function Dashboard() {
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      <h1>Dashboard</h1>
    </AzureAD>
  )
}

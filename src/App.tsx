import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { PageNotFound } from './pages/PageNotFound';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Dashboard} path="/dashboard" exact />
            <Route component={PageNotFound} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

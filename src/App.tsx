import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import About from './containers/About';
import HomePage from './containers/HomePage';
export const browserHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <NavigationBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about-us" component={About} />

          </Switch>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

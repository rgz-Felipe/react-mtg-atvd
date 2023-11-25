import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/card/:id">
            <CardDetail />
          </Route>
          <Route path="/">
            <CardList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

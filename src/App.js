import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/add" component={BookForm} />
          <Route path="/edit/:id" component={BookForm} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


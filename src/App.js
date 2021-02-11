import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import AppNotes from './Components/App';
import Home from './Components/Home';
import NoteEdit from './Components/NoteEdit';
import SignIn from './Components/SingIn';
import Register from './Components/Register';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/Notes">
          <AppNotes />
        </Route>
        <Route path="/NoteEdit">
          <NoteEdit />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
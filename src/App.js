import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Container } from 'reactstrap';
import { Header, StartScreen, ScoreScreen, Question } from './components';
import './App.css';
import { fetchSessionTokenThunk } from './store/quiz/thunk';
import PrivateRoute from './utils/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSessionTokenThunk())
    //eslint-disable-next-line
  }, []);

  


  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div>
      <Header/>
      <Router>
        <Switch>
          <PrivateRoute path="/score">
            <ScoreScreen/>
          </PrivateRoute>
          <PrivateRoute path="/question/:idx">
            <Question/>
          </PrivateRoute>
          <Route path="/">
            <StartScreen/>
          </Route>
        </Switch>
      </Router>
      </div>
    </Container>
  );
}

export default App;

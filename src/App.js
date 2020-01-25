import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';


const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </>
  )
}


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/users">
            <Layout>

              <Users />
            </Layout>
          </Route>
          <Route path="/profile">
            <Layout>

              <Profile />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

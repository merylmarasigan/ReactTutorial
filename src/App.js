// import logo from './logo.svg';
import Navbar from './Navbar.js';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.js';
import PostDetails from './PostDetails.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path="/create">
              <Create></Create>
            </Route>

            <Route path="/blogs/:id">
              <PostDetails></PostDetails>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
     </div>
    </Router>
    
  );
}
export default App;




// import logo from './logo.svg';
import Navbar from './Navbar.js';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path='/Home'>
              <Home></Home>
            </Route>
          </Switch>
        </div>
     </div>
    </Router>
    
  );
}
export default App;




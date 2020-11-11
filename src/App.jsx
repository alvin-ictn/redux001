import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import "./assets/sass/main.scss"
import {setLogin} from './redux/actions/auth'
import { connect } from "react-redux";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
function App() {
  const [postData, setData] = useState({});
  const HandleInput = (input) => {
    input.preventDefault();
    let data = { ...postData, [input.target.name]: input.target.value };
    setData(data);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" render={() => <Login handleInput={HandleInput} postData={postData}/>}/>
          <Route path="/">
            "GG"
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: () => dispatch(setLogin()),
  };
};
export default connect(null,mapDispatchToProps)(App);

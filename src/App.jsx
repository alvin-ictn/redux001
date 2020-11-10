import logo from './logo.svg';
import './App.css';
import "./assets/sass/color.scss"
import {setLogin} from './redux/actions/auth'
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="v-bg-donker v-text-light">TESTs</button>
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: () => dispatch(setLogin()),
  };
};
export default connect(null,mapDispatchToProps)(App);

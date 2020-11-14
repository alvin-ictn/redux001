import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.scss";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import DemoIcon from "./demo/demoIcon";
import {} from "./assets/icons";
import VetNavbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ClinicChoose from "./components/Clinic/ClinicChoose/ClinicChoose";
import { user } from "./database";
import BookingDetail from "./pages/BookingDetail";
import BookingResume from "./pages/BookingResume";
import { Container, Navbar } from "react-bootstrap";
import Home from "./components/Home/Home";
import Users from "./pages/Users/";
import { useHistory, Redirect } from "react-router-dom";
import { VetPaw } from "./assets/icons";
import ClinicChooseFiltered from "./components/Clinic/ClinicChoose/ClinicChooseFiltered";
import ClinicSearch from "./components/Clinic/ClinicChoose/ClinicSearch";

import { getUserData } from "./redux/actions/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Success = (props) => {
  useEffect(() => {
    props.SetBarState({
      footer: false,
      navbar: false,
    });
  }, []);
  return (
    <div className="vet-paws-8">
      {["..", "G", "N", "I", "D", "A", "O", "L"].map((item, idx) =>
        idx % 2 === 0 ? (
          <VetPaw
            className="vet-paw"
            size={60}
            style={{
              display: "block",
              transform: `rotateZ(${Math.floor(Math.random() * 35) + 20}deg)`,
              position: "relative",
              left: "60px",
            }}
          >
            {item}
          </VetPaw>
        ) : (
          <VetPaw
            className="vet-paw"
            size={60}
            style={{
              display: "block",
              transform: `rotateZ(-${Math.floor(Math.random() * 35) + 20}deg)`,
            }}
          >
            {item}
          </VetPaw>
        )
      )}
    </div>
  );
};

function App(props) {
  // state declaration
  const [token, setToken] = useState(localStorage.getItem("VetToken") || "");
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [postData, setData] = useState({});
  const [errorMsg, setError] = useState();
  const [userData, SetUserData] = useState(
    localStorage.getItem("userData") || ""
  );
  const [passVisibility, setPassVisibility] = useState(0);
  const [userDatas, SetUserDatas] = useState(
    localStorage.getItem("userData2") || ""
  );
  const [barState, SetBarState] = useState({
    navbar: true,
    footer: true,
  });
  useEffect(() => {
    token.length && props.getUserData(token)
  }, [token]);
  const history = useHistory();
  useEffect(() => {
    userDatas && setLogin(true);
  }, [userDatas]);
  // function declaration
  const HandleInput = (input) => {
    input.preventDefault();
    let data = { ...postData, [input.target.name]: input.target.value };
    setData(data);
  };

  const SetVisibility = (res) => {
    setPassVisibility(res);
  };

  const SubmitData = (option) => {
    setLoading(true);
    user({
      method: option,
      data: { ...postData },
    })
      .then((res) => {
        if (res.status === 400) {
          setError(res.data.message);
        } else {
          setError("");
          setToken(res.data.access_token);
          return res.data.access_token;
        }
      })
      .then((token) => {
        user({
          method: "self",
          access_token: token,
        }).then((res) => {
          localStorage.setItem(
            "userData2",
            JSON.stringify({ ...res.data.data.user })
          );
          console.log("apicall apps", res.data.data.user);
          SetUserDatas({ ...res.data.data.user });
        });
      });
  };

  const handleFooter = (option) => {
    //console.log(option);
  };
  return (
    <>
      <div className="App">
        <Router>
          {/* {isLogin && <Redirect to={`${process.env.PUBLIC_URL}/`} />} */}
          <VetNavbar
            barState={barState}
            data={{
              isLogin: isLogin,
              userDatas: userDatas,
            }}
          />
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/user/:role`}>
              <Users />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/auth`}>
              <Auth
                SetBarState={SetBarState}
                function={{
                  HandleInput: HandleInput,
                  SetVisibility: SetVisibility,
                  SubmitData: SubmitData,
                  setLoading: setLoading,
                  SetUserData: SetUserData,
                }}
                data={{
                  token: token,
                  isLoading: isLoading,
                  postData: postData,
                  errorMsg: errorMsg,
                  passVisibility: passVisibility,
                  userData: userData,
                  isLogin: isLogin,
                }}
              />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/DemoIcon`}>
              <DemoIcon />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/booking/detail/resume`}>
              <BookingResume />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/booking/detail/:id`}>
              <BookingDetail />
            </Route>
            <Route
              path="/demo-Vet/booking/search/:search"
              component={ClinicSearch}
            />
            <Route
              path="/demo-Vet/booking/lokasi/:lokasi"
              component={ClinicChooseFiltered}
            />
            <Route path={`${process.env.PUBLIC_URL}/booking/:page`}>
              <ClinicChoose SetBarState={SetBarState} />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/success`}>
              <Success data={userDatas} SetBarState={SetBarState} />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home SetBarState={SetBarState} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer handleFooter={handleFooter} data={"test"} barState={barState} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUserData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

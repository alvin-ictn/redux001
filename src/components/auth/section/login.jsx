import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Nav, Row, Form } from "react-bootstrap";
import "../register.css";
import { VetEyeShow, VetEyeHidden } from "../../../assets/icons";
import { user } from "../../../database";
import { useHistory } from "react-router-dom";
import { setLogin } from "../../../redux/actions/auth";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Login = (props) => {
  const [readyState, setReady] = useState(true);
  const history = useHistory();
  
  // useEffect(() => {
  //   token.length && console.log("gg");
  //   token.length && localStorage.setItem("VetToken", token);
  //   token.length &&
  //     user({
  //       method: "self",
  //       access_token: token,
  //     }).then((res) =>
  //       localStorage.setItem("userData", JSON.stringify({ ...res.data.data.user }))
  //     );
    
  // }, [token]);

  useEffect(() => {
    props.data.postData?.email?.length && props.data.postData?.password?.length && setReady(false);
  }, [props.data.postData]);
  
  // useEffect(() => {
  //   if (isLoading) {
  //     simulateNetworkRequest().then(() => {
  //       setLoading(false);
  //     });
  //   }
  // }, [isLoading]);
  useEffect(() => {
    console.log(props)
  },[])
  const handleSubmit = () => {
    props.setLogin(props.postData);
  };
  return (
    <>
      <Row className="mx-4 justify-content-center flex-column">
        <p className="vet-heading v-text-donker">Buat Akun Baru</p>
        <p className="vet-body-1 v-text-donker">
          Daftarkan dirimu untuk menggunakan Aplikasi Kami
        </p>
      </Row>
      <Row className="register-section m-4 px-5 d-flex justify-content-center">
        <Form className="register-form w-100 mx-5 registerForm px-5">
          <Form.Group className="form-register">
            <Form.Control
              onChange={(e) => props.function.HandleInput(e)}
              name="email"
              type="email"
              placeholder="Alamat Email Kamu"
            />
          </Form.Group>
          <Form.Group className="form-register">
            <Form.Control
              onChange={(value) => props.function.HandleInput(value)}
              name="password"
              value={props.postData?.password}
              type={props.passVisibility ? "text" : "password"}
              placeholder="Password Kamu"
            />
            {props.passVisibility ? (
              <div onClick={() => props.function.SetVisibility(0)}>
                <VetEyeHidden className="register-eye login" size={30} />
              </div>
            ) : (
              <div onClick={() => props.function.SetVisibility(1)}>
                <VetEyeShow className="register-eye login" size={30} />
              </div>
            )}
            <Form.Text className="text-danger">
              {props.AuthPayloads.errorMsg && props.AuthPayloads.errorMsg}
            </Form.Text>
          </Form.Group>

          <Row className="p-0 m-0 d-flex justify-content-center">
            <Button
              className="v-bg-mustard v-text-donker border-0 font-weight-bold w-100 py-3"
              disabled={props.isLoading || readyState}
              onClick={!props.isLoading ? () => handleSubmit() : null}
            >
              {props.isLoading ? "Loading…" : "Login"}
            </Button>
          </Row>
        </Form>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setLogin }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
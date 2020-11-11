import React, { useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

import { setLogin } from "../../redux/actions/auth";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const Login = (props) => {
  useEffect(() => {
    console.log(props)
    //props.setLogin()
  },[])
  const handleSubmit = () => {
    console.log("THIS IS POST DATA",props.postData)
    props.setLogin(props.postData)
  }
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={props.handleInput}
            type="email"
            name="email"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={props.handleInput}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth ,
  };
};
console.log(mapStateToProps)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {setLogin},
    dispatch
  );
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);

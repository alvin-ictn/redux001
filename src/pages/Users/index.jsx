import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import UserProfile from "../../components/reusable/profile";
import UserPage from "../../components/reusable/profilePage";
import doctorImg from "../../assets/img/doctorProfile.png";
import ProfileForm from "../../components/reusable/profileForm";
import { Container, Row, Col } from "react-bootstrap";
import { user } from "../../database";

export default function Users(props) {
  const { role } = useParams();
  const [passData, SetPassData] = useState(null);

  useEffect(() => {
    //console.log("YUSER", props);
    // user({
    //   method: "self",
    //   access_token : localStorage.getItem('VetToken')
    // }).then(res => {
    //   res.status === 200 && SetPassData(res.data.data.user)
    // })
  }, []);

  useEffect(() => {}, [passData]);

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile src={doctorImg} mode={role} value={5} />
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/user/${role}/profile`}
              render={() => (
                <ProfileForm
                  config={{
                    mode: role,
                  }}
                  src={doctorImg}
                  {...props}
                />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/user/:role`}
              render={() => <UserPage data={passData} />}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

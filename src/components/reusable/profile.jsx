import React, { useState, useEffect } from "react";
import { Badge, Card, Image, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  VetSignal,
  VetBriefcase,
  VetPaw,
  VetSchedule,
  VetDoor,
  VetClock
} from "../../assets/icons";
import styles from "./profile.module.css";
import Skeleton from "react-loading-skeleton";

import { connect } from "react-redux";

function Profile(props) {
  const [userBadge, setUserBadge] = useState(null);

  useEffect(() => {
    props.AuthPayloads.user.role === "patient"
      ? setUserBadge("user")
      : props.AuthPayloads.user.role === "veterinary"
      ? setUserBadge("doctor")
      : setUserBadge(props.AuthPayloads.user.role);
  }, [props]);

    useEffect(() => {
      //console.log("TEST",props.AuthPayloads.user,Object.keys(props.AuthPayloads.user).length)
    },[props])

  
  return (
    <>
      <Card className="p-4 my-5">
        <Card.Body>
          {Object.keys(props.AuthPayloads.user).length ? (
            <Image
              style={{ width: "50px", height: "50px", flexDirection: "row" }}
              src={props.AuthPayloads.user.image}
              roundedCircle
            />
          ) : (
            <Skeleton height={50} width={50} circle={true} />
          )}
          <h4>{Object.keys(props.AuthPayloads.user).length ? props.AuthPayloads.user.name : <Skeleton />}</h4>
          <Badge
            pill
            className="px-5 py-2"
            size="sm"
            variant={props.AuthPayloads.user.role === "user" ? "info" : "success"}
          >
            {Object.keys(props.AuthPayloads.user).length ? `${props.AuthPayloads.user.role[0].toUpperCase()}${props.AuthPayloads.user.role.slice(1)} `: <Skeleton/>}
          </Badge>
          <Row className="pt-4">
            <Col
              md={6}
              className="d-flex align-items-center"
              style={{ color: "green", fill: "green" }}
            >
              {Object.keys(props.AuthPayloads.user).length ? (props.AuthPayloads.user.role === "user" ? (
                <>
                  <VetPaw /> 3 Pets
                </>
              ) : (
                <>
                  <VetSignal color={"green"} /> <span className="mx-2">Online</span>
                </>
              )) : 
                <Skeleton width={100} />
              }
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              {
                Object.keys(props.AuthPayloads.user).length ? 
                  (props.AuthPayloads.user.role === "patient" && props.value) > 1 
                  ? (
                      <>
                        <VetSchedule /> {props.value} times
                      </>
                    ) 
                  : props.AuthPayloads.user.role === "patient" && props.value <= 1 
                  ? (
                      <>
                        <VetSchedule /> {props.value || 0} time
                      </>
                    ) 
                  : props.AuthPayloads.user.role === "veterinary" && props.AuthPayloads.user.veterinary.experience > 1 
                  ? (
                    <>
                      <VetBriefcase />
                      <span className="mx-2">{props.AuthPayloads.user.veterinary.experience} Years</span>
                    </>
                  ) 
                  : props.AuthPayloads.user.role === "veterinary" && props.AuthPayloads.user.veterinary.experience <= 1 
                  ? (
                    <>
                      <VetBriefcase />
                      <span className="mx-2">{props.AuthPayloads.user?.veterinary?.experience || 0} Year</span>
                    </>
                    )
                  : props.AuthPayloads.user.role === "clinic" ? 
                  <>
                    <VetClock/>
                    <span className="mx-2">{props.AuthPayloads.user.clinic.schedules}</span>
                  </> :
                  ""
                : <Skeleton width={100}/>}
              
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className={styles["card--footer"]}>
          <Link to={`${process.env.PUBLIC_URL}/user/${props.mode}/profile`}>
            <Button className="font-weight-bold" variant="warning" block>
              Edit Profile
            </Button>
          </Link>
        </Card.Footer>
      </Card>
      <Card className="justify-content-start">
        <Col className="px-4 py-2 d-flex align-items-center">
          <VetDoor />
          <p
            className="m-0 px-3"
            style={{ fontSize: "1.2rem", lineHeight: "1.2rem" }}
          >
            Logout
          </p>
        </Col>
      </Card>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
  };
};


export default connect(mapStateToProps, null)(Profile);
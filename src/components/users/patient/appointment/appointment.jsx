import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";

import doctorImg from "../../../../assets/img/doctorProfile.png";
import { connect } from "react-redux";

function PatientAppointment(props) {
  return (
    <Card.Body>
      <CardItem
        textMode={0}
        buttonMode={2}
        buttonText={"Approve"}
        date={"14:10"}
      />
      <CardItem
        textMode={0}
        buttonMode={2}
        buttonText={"Disapprove"}
        date={"14:10"}
      />
      <CardItem
        textMode={0}
        buttonMode={2}
        buttonText={"Disapprove"}
        date={"14:10"}
      />
      <CardItem
        textMode={0}
        buttonMode={2}
        buttonText={"Disapprove"}
        date={"14:10"}
      />
    </Card.Body>
  );
}

const mapStateToProps = (state) => {
  return {
    AppointmentPayloads: state.Appointment,
  };
};
export default connect(mapStateToProps,null)(PatientAppointment)
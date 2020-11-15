import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";
import {connect} from 'react-redux'

function PatientHistory(props) {
  return (
    <Card.Body>
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
    </Card.Body>
  );
}

const mapStateToProps = (state) => {
  return {
    AppointmentPayloads: state.Appointment,
  };
};

export default connect(mapStateToProps,null)(PatientHistory)
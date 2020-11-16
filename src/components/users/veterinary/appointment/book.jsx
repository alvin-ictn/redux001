import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";

import doctorImg from "../../../../assets/img/doctorProfile.png";
import {connect} from 'react-redux'
function VeterinaryBook() {
  return (
    <Card.Body>
      <CardItem
        buttonMode={3}
        textMode={1}
        date={"14:10"}
        buttonText={["Approve", "Disapprove"]}
      />
       <CardItem
        buttonMode={3}
        textMode={1}
        date={"14:10"}
        buttonText={["Approve", "Disapprove"]}
      />
       <CardItem
        buttonMode={3}
        textMode={1}
        date={"14:10"}
        buttonText={["Approve", "Disapprove"]}
      />
    </Card.Body>
  );
}

const mapStateToProps = (state) => {
  return {
    AppointmentPayloads: state.Appointment,
  };
};

export default connect(mapStateToProps,null)(VeterinaryBook)
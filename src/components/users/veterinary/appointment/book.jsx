import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";

import doctorImg from "../../../../assets/img/doctorProfile.png";
import { connect } from "react-redux";
function VeterinaryBook() {
  return (
    <Card.Body>
      <CardItem
        name="Megumin"
        buttonMode={3}
        day={20}
        month={"Nov"}
        textMode={1}
        pets={1}
        date={"09:00 - 12.00"}
        buttonText={["Approve", "Disapprove"]}
      />
      <CardItem
        name="Sallo"
        buttonMode={3}
        day={25}
        month={"Nov"}
        textMode={1}
        date={"11:00 - 14.00"}
        buttonText={["Approve", "Disapprove"]}
      />
      <CardItem
        name="Jacky Sanjaya"
        buttonMode={3}
        day={1}
        month={"Des"}
        textMode={1}
        pets={2}
        date={"14:30 - 17.30"}
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

export default connect(mapStateToProps, null)(VeterinaryBook);

import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";
import { connect } from "react-redux";

function VeterinaryApproval() {
  return (
    <Card.Body>
      <CardItem
        buttonMode={1}
        textMode={1}
        pets={2}
        day={15}
        month={"Nov"}
        buttonText={"Approve"}
        date={"11.00 - 14.00"}
        name={"Ichitan"}
        history={true}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        day={15}
        month={"Nov"}
        pets={3}
        buttonText={"Approve"}
        date={"07.00 - 10.00"}
        name={"Dona"}
        history={true}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        pets={2}
        day={18}
        month={"Nov"}
        buttonText={"Approve"}
        date={"16.00 - 19.00"}
        name={"Johny Son"}
        history={true}
      />
    </Card.Body>
  );
}

const mapStateToProps = (state) => {
  return {
    AppointmentPayloads: state.Appointment,
  };
};

export default connect(mapStateToProps, null)(VeterinaryApproval);

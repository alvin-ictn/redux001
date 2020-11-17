import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../../reusable/cardItem";

import doctorImg from "../../../../assets/img/doctorProfile.png";
import {connect} from 'react-redux'

function ClinicHistory(props) {
  return (
    <Card.Body>
    {props.AppointmentPayloads.dataHistory && props.AppointmentPayloads.dataHistory.map(item =>  <CardItem
      type="history-clinic"
      data={item}
    />)}
   
  </Card.Body>
  );
}


const mapStateToProps = (state) => {
  return {
    AppointmentPayloads: state.Appointment,
  };
};

export default connect(mapStateToProps,null)(ClinicHistory)
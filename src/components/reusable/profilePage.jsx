import React, { useEffect } from "react";

import { Switch, Route, Link, useParams } from "react-router-dom";
import { Veterinary, Patient, Clinic } from "../users";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAppointment, getHistory } from "../../redux/actions/appointment";
function Appointment(props) {
  const { role } = useParams();
  useEffect(() => {

  }, [role]);
  const renderComponent = (role) => {
    switch (role) {
      case "veterinary":
        return <Veterinary />;
      case "patient":
        return <Patient />;
      case "clinic":
        return <Clinic />;
      default:
        return;
    }
  };

  return renderComponent(role);
}

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
    AppointmentPayloads: state.Appointment,
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAppointment, getHistory }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);

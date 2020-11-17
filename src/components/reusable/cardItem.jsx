import React from "react";
import {
  Badge,
  Card,
  Col,
  Row,
  Button,
  Image,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { VetPDog, VetPCat, VetMale, VetFemale } from "../../assets/icons";

const AppointmentClinic = (props) => {
  return (
    <div class="appointment-card">
      <Card
        style={{ boxShadow: "(0,0,0,0.3)" }}
        className="my-2 card--group appointment-card-inner"
      >
        <Row className="align-items-center book--row m-3 appointment-card-main">
          <Col className="book--item col-1 mr-4">
            {props.src ? (
              <Image src={props.src} className="rounded" />
            ) : (
              <Badge className="v-bg-donker v-text-white">
                <p className="p-0 m-0">{props.day || 12}</p>
                {props.month || "Okt"}
              </Badge>
            )}
          </Col>
          <Col>{props.name || "Alvin Mantovani"}</Col>
          {props.textMode === 1 && <Col>{props.pets || 99} Pets</Col>}
          <Col className="v-text-caramel">
            {props.date ? props.date : props.status}
          </Col>
          <Col className="d-flex">
            <Col className="button--action">
              {props.buttonMode === 1 || props.buttonMode === 3 ? (
                !props.history ? (
                  <Button
                    size="sm"
                    className="px-4 py-2 v-btn-outline-sp-mustard"
                  >
                    {props.buttonText &&
                      (Array.isArray(props.buttonText)
                        ? props.buttonText[0]
                        : props.buttonText)}
                  </Button>
                ) : (
                  <Badge size="sm" className="px-4 py-2 v-badge-mustard">
                    {props.buttonText &&
                      (Array.isArray(props.buttonText)
                        ? props.buttonText[0]
                        : props.buttonText)}
                  </Badge>
                )
              ) : (
                <Badge
                  className="px-4 py-2 w-100"
                  pill
                  variant={
                    props.buttonText === "Approve"
                      ? "success"
                      : props.buttonText === "Rejected"
                      ? "warning"
                      : "danger"
                  }
                >
                  {" "}
                  {props.buttonText}
                </Badge>
              )}
            </Col>

            {props.buttonMode === 3 && (
              <Col className="button--action">
                <Button
                  size="sm"
                  className="px-4 py-2  v-btn-outline-sp-imperial"
                >
                  {props.buttonText[1]}
                </Button>
              </Col>
            )}
          </Col>
        </Row>
        <Row className="align-items-center book--row m-3 appointment-card-side">
          <Col className="book--item col-1 mr-4">
            {props.src ? (
              <Image src={props.src} className="rounded" />
            ) : (
              <Badge className="v-bg-donker v-text-white">
                <p className="p-0 m-0">{props.day || 12}</p>
                {props.month || "Okt"}
              </Badge>
            )}
          </Col>
          <Col>{props.name || "Alvin Mantovani"}</Col>
          {props.textMode === 1 && <Col>{props.pets || 99} Pets</Col>}
          <Col className="v-text-caramel">
            {props.date ? props.date : props.status}
          </Col>
          <Col className="d-flex">
            <Col className="button--action">
              {props.buttonMode === 1 || props.buttonMode === 3 ? (
                !props.history ? (
                  <Button
                    size="sm"
                    className="px-4 py-2 v-btn-outline-sp-mustard"
                  >
                    {props.buttonText &&
                      (Array.isArray(props.buttonText)
                        ? props.buttonText[0]
                        : props.buttonText)}
                  </Button>
                ) : (
                  <Badge size="sm" className="px-4 py-2 v-badge-mustard">
                    {props.buttonText &&
                      (Array.isArray(props.buttonText)
                        ? props.buttonText[0]
                        : props.buttonText)}
                  </Badge>
                )
              ) : (
                <Badge
                  className="px-4 py-2 w-100"
                  pill
                  variant={
                    props.buttonText === "Approve"
                      ? "success"
                      : props.buttonText === "Rejected"
                      ? "warning"
                      : "danger"
                  }
                >
                  {" "}
                  {props.buttonText}
                </Badge>
              )}
            </Col>

            {props.buttonMode === 3 && (
              <Col className="button--action">
                <Button
                  size="sm"
                  className="px-4 py-2  v-btn-outline-sp-imperial"
                >
                  {props.buttonText[1]}
                </Button>
              </Col>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const HistoryClinic = ({ data }) => {
  let datePost = new Date(data.date).toDateString().split(" ");
  return (
    <div class="appointment-card">
      <Card
        style={{ boxShadow: "(0,0,0,0.3)" }}
        className="my-2 card--group appointment-card-inner"
      >
        <Row className="align-items-center book--row m-3 appointment-card-main">
          <Col className="book--item col-1 mr-4">
            <Image src={data.schedule.veterinary.image} className="rounded" />
          </Col>
          <Col>{data.schedule.veterinary.name}</Col>

          <Col className="d-flex">
            <Badge
              pill
              className={`px-4 py-2 w-100 ${
                data.status == "finished"
                  ? "v-badge-half-grass"
                  : "v-badge-half-imperial"
              }`}
            >
              {data.status[0].toUpperCase()}
              {data.status.slice(1)}
            </Badge>
          </Col>
        </Row>
        <Row className="align-items-center book--row m-3 appointment-card-side">
          <Col className="book--item col-1 mr-4">
            <Badge className="v-bg-donker v-text-white">
              <p className="p-0 m-0">{datePost[2]}</p>
              {datePost[1]}
            </Badge>
          </Col>
          <Col>{data.patient.name}</Col>
          <Col>
            {data.animals.map((item) =>
              item.type == "Dog" ? (
                <VetPDog size={"40"} />
              ) : (
                <VetPCat size={"40"} />
              )
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const AppointmentPatient = ({ data }) => {
  let datePost = new Date(data.date).toDateString().split(" ");
  return (
    <div class="appointment-card">
      <Card
        style={{ boxShadow: "(0,0,0,0.3)" }}
        className="my-2 card--group appointment-card-inner"
      >
        <Row className="align-items-center book--row m-3 appointment-card-main">
          <Col className="d-flex" md={4}>
            <Col className="book--item col-1 mr-4">
              <Badge className="v-bg-donker v-text-white">
                <p className="p-0 m-0">{datePost[2]}</p>
                {datePost[1]}
              </Badge>
            </Col>
            <Col className="book--item col-1 mr-4">
              <Image
                style={{ height: "48px" }}
                src={data.schedule.clinic.image}
                className="rounded"
              />
            </Col>
          </Col>

          <Col>{data.schedule.clinic.name}</Col>

          <Col className="d-flex">
            <Badge
              pill
              className={`px-4 py-2 w-100 ${
                data.status == "approved"
                  ? "v-badge-half-grass"
                  : "v-badge-half-mustard"
              }`}
            >
              {data.status[0].toUpperCase()}
              {data.status.slice(1)}
            </Badge>
          </Col>
        </Row>
        <Row className="align-items-center book--row m-3 appointment-card-side">
          <Col md={2} className="book--item justify-content-center align-items-center d-flex mx-3">
            <Image src={data.schedule.veterinary.image} className="rounded mx-4" />
          </Col>
          <Col className="pl-5">{data.schedule.veterinary.name}</Col>
          <Col>
            {data.animals.map((item) =>
              item.type == "Dog" ? (
                <OverlayTrigger
                  trigger="hover"
                  key={item._id}
                  placement={"top"}
                  overlay={
                    <Popover id={`popover-positioned-top`}>
                      <Popover.Title as="h3">{`${item.name}'s Info`}</Popover.Title>
                      <Popover.Content>
                        <div>
                          <strong>Name</strong> : {item.name}
                        </div>
                        <div>
                          <strong>Gender</strong> :{" "}
                          {item.gender ? <VetMale /> : <VetFemale />}
                        </div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <VetPDog size={"40"} />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  trigger="hover"
                  key={item._id}
                  placement={"top"}
                  overlay={
                    <Popover id={`popover-positioned-top`}>
                      <Popover.Title as="h3">{`${item.name}'s Info`}</Popover.Title>
                      <Popover.Content>
                        <div>
                          <strong>Name</strong> : {item.name}
                        </div>
                        <div>
                          <strong>Gender</strong> :{" "}
                          {item.gender ? <VetMale /> : <VetFemale />}
                        </div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <VetPCat size={"40"} />
                </OverlayTrigger>
              )
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const renderComponent = (type, props) => {
  switch (type) {
    case "appointment-clinic":
      return <AppointmentClinic {...props} />;
    case "appointment-patient":
      return <AppointmentPatient {...props} />;
    case "appointment-veterinary":
      return <AppointmentClinic {...props} />;
    case "history-clinic":
      return <HistoryClinic {...props} />;
    default:
      return;
  }
};
export default function CardItem(props) {
  return <>{renderComponent(props.type, props)}</>;
}

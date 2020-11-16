import React from "react";
import { Badge, Card, Col, Row, Button, Image } from "react-bootstrap";

export default function CardItem(props) {
  return (
    <Card style={{ boxShadow: "(0,0,0,0.3)" }} className="my-2 card--group">
      <Row className="align-items-center book--row m-3">
        <Col className="book--item col-1 mr-4">
          {props.src ? (
            <Image src={props.src} className="rounded" />
          ) : (
            <Badge className="v-bg-donker v-text-white">
              <p className="p-0 m-0">{props.day || 12}</p>{props.month || "Okt"}
            </Badge>
          )}
        </Col>
        <Col>{props.name || "Alvin Mantovani"}</Col>
        {props.textMode === 1 && <Col>{props.pets || 99} Pets</Col>}
        <Col className="v-text-caramel">{props.date ? props.date : props.status}</Col>
        <Col className="d-flex">
          <Col className="button--action">
            {props.buttonMode === 1 || props.buttonMode === 3
            ? <Button size="sm" className="v-btn-outline-sp-mustard">
                {props.buttonText && (Array.isArray(props.buttonText) ? props.buttonText[0] : props.buttonText )}
              </Button>
            : <Badge className="px-3 py-1" pill variant={
              props.buttonText === "Approve" 
                ? "success" 
                : props.buttonText === "Rejected" 
                  ? "warning" 
                    : "danger"}> { props.buttonText } 
              </Badge>
            }
          </Col>
          {console.log(props.mode)}
          {props.buttonMode === 3 && (
            <Col className="button--action">
              <Button size="sm" className="v-btn-outline-sp-imperial">
                {props.buttonText[1]}
              </Button>
            </Col>
          )}
        </Col>
      </Row>
    </Card>
  );
}

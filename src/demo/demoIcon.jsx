import React from "react";
import { Card, Container } from "react-bootstrap";
import {
  VetUser,
  VetClinic,
  VetDoctor,
  VetLogo,
  VetPaw,
  VetLogoBox,
  VetHospital,
  VetPCat,
  VetPHamster,
  VetPDog,
  VetPRabbit,
  VetPhone,
  VetLock,
  VetMail,
  VetFacebook,
  VetInstagram,
  VetTwitter,
  VetClock,
  VetSchedule,
  VetSignal,
  VetBriefcase,
  VetChat,
  VetArrowLeft,
  VetArrowLeftBox,
  VetArrowRight,
  VetArrowRightBox,
  VetArrowDown,
  VetEye,
  VetDoor,
  VetMale,
  VetFemale,
  VetCalendar,
  VetLogoSymbol,
} from "../assets/icons";
export default function DemoCard() {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Text>General Usage</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetUser
            bgcolor={"salmon"}
            size={"30"}
            color={"#FDCB5A"}
            radius={"50"}
            onClick={(e) => console.log("TETT")}
          />
          <VetClinic size={"30"} 
          onClick={(e) => console.log("Eneters")}/>
          <VetDoctor size={"30"} />
          <VetHospital size={"30"} bgcolor={"green"} color={"salmon"} />
          <VetCalendar size={"30"} />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Text>Logo</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetLogo size={"30"} bgcolor={"green"} />
          <VetLogoBox size={"30"} bgcolor={"salmon"} />
          <VetLogoSymbol />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Text>Animal Type</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetPCat size={"30"} bgcolor={"salmon"} />
          <VetPHamster size={"30"} />
          <VetPDog size={"30"} />
          <VetPRabbit size={"30"} />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Text>Social Media</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetFacebook size={"30"} color={"lime"} bgcolor={"orange"} />
          <VetInstagram size={"30"} color={"lime"} bgcolor={"orange"} />
          <VetTwitter size={"30"} color={"lime"} bgcolor={"orange"} />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Text>User Form</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetPhone size={"30"} color={"lime"} bgcolor={"orange"} />
          <VetLock size={"30"} color={"lime"} bgcolor={"orange"} />
          <VetMail size={"30"} color={"lime"} bgcolor={"orange"} />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Text>User Details</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetPaw size={"30"} bgcolor={"salmon"} />
          <VetSchedule size={"30"} color={"salmon"} bgcolor={"black"} />
          <VetSignal size={"30"} color={"salmon"} bgcolor={"black"} />
          <VetBriefcase size={"30"} color={"salmon"} bgcolor={"black"} />
          <VetDoor /> <VetMale /> <VetFemale />
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Text>Arrow</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetArrowLeft color={"black"} />
          <VetArrowLeftBox />
          <VetArrowRight color={"black"} />
          <VetArrowRightBox />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Text>Random</Card.Text>
        </Card.Header>
        <Card.Body>
          <VetClock size={"30"} color={"salmon"} bgcolor={"black"} />
          <VetChat size={"30"} color={"salmon"} bgcolor={"black"} />
          <VetArrowDown color={"black"}/> 
          <VetEye />
        </Card.Body>
      </Card>
    </Container>
  );
}

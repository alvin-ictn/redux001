import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Card,
  Form,
  ToggleButton,
  Button,
  Modal,
} from "react-bootstrap";

import {
  VetPlusBox,
  VetPlus,
  VetFemale,
  VetMale,
  VetUnavailable,
  VetSun,
  VetPDog,
  VetPRabbit,
  VetPHamster,
  VetPCat,
  VetAddPets,
} from "../../assets/icons";

import styles from "../../assets/sass/reusable/profileForm.module.scss";
import "./profileForm.css";
import Swal from "sweetalert2";

export default function ProfileForm({ config: { mode }, data }) {
  console.log(data)
  const [status, setStatus] = useState("0");
  const [gender, setGender] = useState("1");
  const [modalShow, setModalShow] = useState(false);
  const [highlight, setHighlight] = useState(0);
  useEffect(() => {
    console.log(highlight);
  }, [highlight]);
  const handleClick = () => {
    Swal.fire({
      title: "Update Sukses!",
      icon: "success",
      background: "#1A3150",
      iconColor: "yellow",
      showConfirmButton: false,

      customClass: {
        title: "text-light",
      },
    });
  };

  const PetModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex f-col">
          <Card
            onClick={() => setHighlight(1)}
            className={`m-3 ${highlight === 1 ? "selected-option" : ""}`}
          >
            <Card.Title className="text-center">Dog</Card.Title>
            <VetPDog className="m-3" size={"80"} />
          </Card>
          <Card
            onClick={() => setHighlight(2)}
            className={`m-3 ${highlight === 2 ? "selected-option" : ""}`}
          >
            <Card.Title className="text-center">Cat</Card.Title>
            <VetPCat className="m-3" size={"80"} />
          </Card>
          {/* <Card
            onClick={() => setHighlight(3)}
            className={`m-3 ${highlight === 3 ? "selected-option" : ""}`}
          >
            <Card.Title className="text-center">Rabbit</Card.Title>
            <VetPRabbit className="m-3" size={"80"} />
          </Card>
          <Card
            onClick={() => setHighlight(4)}
            className={`m-3 ${highlight === 4 ? "selected-option" : ""}`}
          >
            <Card.Title className="text-center">Hamster</Card.Title>
            <VetPHamster className="m-3" size={"80"} />
          </Card> */}
        </Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Enter Pet Name" />
            </Form.Group>
            <Form.Group className="mb-4" id="gender">
              <Form.Text>Gender</Form.Text>
              <ButtonGroup toggle name="radiogroup">
                <ToggleButton
                  key={1}
                  type="radio"
                  variant={gender === "1" ? "primary" : ""}
                  name="gender"
                  value="1"
                  checked={gender === "1"}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <VetMale />{" "}
                  <span className={gender === "0" ? "text-white" : ""}>
                    Male
                  </span>
                </ToggleButton>
                <ToggleButton
                  key={2}
                  type="radio"
                  variant={gender === "0" ? "pink" : ""}
                  name="gender"
                  value="0"
                  checked={gender === "0"}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <VetFemale />
                  <span className={gender === "1" ? "text-white" : ""}>
                    Female
                  </span>
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Add Pet</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <Card>
        <Form>
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Upload Photo
          </Card.Header>
          <Card.Body>
            <VetPlusBox size={187} />
          </Card.Body>
          {(mode === "veterinary" || mode === "clinic") && (
            <>
              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                {mode[0].toUpperCase()}
                {mode.slice(1)} Information
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-4" id="status">
                  <Form.Text>Status</Form.Text>
                  <ButtonGroup
                    toggle
                    name="radiogroup"
                    className="d-flex align-items-center"
                  >
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={1}
                      type="radio"
                      variant={status === "1" ? "success" : ""}
                      name="status"
                      value="1"
                      checked={status === "1"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    >
                      <VetSun size={"24px"} />
                      <span className="mx-3 my-0">
                        {mode === "veterinary" ? "Active" : "Buka"}
                      </span>
                    </ToggleButton>
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={2}
                      type="radio"
                      variant={status === "0" ? "danger" : ""}
                      name="status"
                      value="0"
                      checked={status === "0"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    >
                      <VetUnavailable size={"24px"} />
                      <span className="mx-3 my-0">
                        {mode === "veterinary" ? "Offline" : "Tutup"}
                      </span>
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Text>
                    Waktu {mode === "veterinary" ? "Aktif" : "Buka"}
                  </Form.Text>
                  <Form.Control as="select">
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                  </Form.Control>
                </Form.Group>
              </Card.Body>
            </>
          )}
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Basic Information
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-4" id="status">
              <Form.Text>Username</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                value="Alvin Mantovani"
              />
            </Form.Group>
            <Form.Group className="mb-4" id="gender">
              <Form.Text>Gender</Form.Text>
              <ButtonGroup toggle name="radiogroup">
                <ToggleButton
                  key={1}
                  type="radio"
                  variant={gender === "1" ? "primary" : ""}
                  name="gender"
                  value="1"
                  checked={gender === "1"}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <VetMale />{" "}
                  <span className={gender === "0" ? "text-white" : ""}>
                    Male
                  </span>
                </ToggleButton>
                <ToggleButton
                  key={2}
                  type="radio"
                  variant={gender === "0" ? "pink" : ""}
                  name="gender"
                  value="0"
                  checked={gender === "0"}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <VetFemale />
                  <span className={gender === "1" ? "text-white" : ""}>
                    Female
                  </span>
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>
            {mode === "veterinary" && (
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="It's my name"
                  value="1 Days"
                />
                <Form.Text className="text-muted">Doctor Experience.</Form.Text>
              </Form.Group>
            )}
          </Card.Body>
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Contact Details
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Text>Nomor Telefon</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                value="+628998844"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Text>Email</Form.Text>
              <Form.Control
                type="text"
                placeholder="phone number"
                value="alvin@vet.com"
              />
            </Form.Group>
          </Card.Body>
        </Form>

        {mode === "patient" && (
          <>
            <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
              Pets Details
            </Card.Header>
            <Card.Body className="d-flex">
              <VetAddPets className="mx-2" onClick={() => setModalShow(true)} />
              <Card
                style={{ width: "206px" }}
                className="d-flex align-items-center mx-2"
              >
                <VetPDog size={80} />
                <Card.Text>Ramson/Dog</Card.Text>
              </Card>
            </Card.Body>
            <PetModal show={modalShow} onHide={() => setModalShow(false)} />
          </>
        )}
      </Card>
    </>
  );
}

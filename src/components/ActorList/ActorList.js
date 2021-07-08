import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkating,
  faKissWinkHeart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";


const ActorList = (props) => {
  const { name, phone, email, gender, category, designation, image, rate } =
    props.foysal;

  const handleActorCount = props.handleActorCount;

  return (
    <div>
      <Card style={{ width: "35rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>I am ready to acting...</Card.Title>
          <Card.Text>
            <div>
              <h6 style={{ color: "deeppink" }}>
                My name is : {name} <FontAwesomeIcon icon={faHeart} />
              </h6>
              <h6>Gender: {gender}</h6>
              <p style={{ color: "blue" }}>
                Phone : {phone} <FontAwesomeIcon icon={faKissWinkHeart} />
              </p>
              <h3 style={{ color: "red" }}>Rate : $ {rate} </h3>
              <small style={{ color: "blue" }}>Email : {email}</small>
              <p>Category :{category}</p>
              <p style={{ color: "deepgolden" }}>Designation: {designation}</p>
            </div>
          </Card.Text>
          <h2>
            <Button
              onClick={() => handleActorCount(props.actor)}
              variant="success"
            >
              {" "}
              <FontAwesomeIcon icon={faSkating} /> Add Me Please
            </Button>
          </h2>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActorList;

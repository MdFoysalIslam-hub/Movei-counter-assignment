import React, { useEffect, useState } from "react";
import data from "./Data/data";
import ActorList from "../ActorList/ActorList";
import "./Home.css";

import {     Container, Nav, Navbar } from "react-bootstrap";
const Home = () => {
  const [actors, setActor] = useState([]);
  const [count, setCount] = useState([]);

  const handleActorCount = (actor) => {
    const newCount = [...count, actor];
    setCount(newCount);
  };
  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setActor(data));
  }, []);

  return (
    <div>
      <div className="header">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    <h1 style={{color: 'rgb(60, 224, 170)'}}>Please select your actor for your next Movei. </h1>
        <h2>Total Actor Count : {count.length}</h2>
        <h2>Total Selected Actors Rate Amount :</h2>
        <p style={{ color: "red" }}>
          (I am can't showing the Selected Actor rate total, but i learn it as
          soon as possible.){" "}
        </p>
      </div>
      <br />

      <div className="home">
        <div className="actor-flex">
          {data.map((foysal) => (
            <ActorList
              handleActorCount={handleActorCount}
              foysal={foysal}
            ></ActorList>
          ))}
        </div>
        <div className="movei-details">
          <p></p>
          <h1>Selected Actors list : {count.length}</h1>
          <p style={{ color: "red" }}>
            I am can't showing the Selected Actor, but i learn it as soon as
            possible.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

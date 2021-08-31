import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
  const [length, setLength] = useState("");
  const [age_group1, setage_group1] = useState("");
  // const [age_group2, setage_group2] = useState("");
  // const [age_group3, setage_group3] = useState("");

  const [users, setUser] = useContext(UserContext);

  const updateId = (e) => {
    setLength(e.target.value);
    console.log(length)
  };

  const updateage_group1 = (e) => {
    setage_group1(e.target.value);
  };


  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {length:length, age_group1:age_group1}])
     
  }

  return (
    <div classage_group1="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>Length</Form.Label>
          <Form.Control
            type="number"
            age_group1="length"
            value={length}
            onChange={updateId}
            placeholder="Enter Length"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            age_group1="age_group1"
            value={age_group1}
            onChange={updateage_group1}
            placeholder="Enter age_group1"
          />
        </Form.Group>
      
        
          <Button className="bg cont" style={{marginLeft:"0px !impotant"}} type="submit">
            Create User
          </Button>
        
        <Link to="/">
          <Button className="bg cont" >
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;

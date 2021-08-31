import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { length } = useParams();
  const user = users.filter((user) => user.length == length);
  console.log(user[0])

  const [age_group1, setage_group1] = useState(user[0].age_group1);
  // const [age_group2, setage_group2] = useState(user[0].age_group2);
  // const [age_group3, setage_group3] = useState(user[0].age_group3);
  

  const editage_group1 = (e) => {
 
      setage_group1(e.target.value);
      console.log(age_group1)
      const edited_age_group1 = age_group1;
      user[0].age_group1 = edited_age_group1; 
    
  };

  // const editage_group2 = (e) => {
  //   setage_group2(e.target.value);
  //   const edited_age_group2 = age_group2;
  //   user[0].age_group2 = edited_age_group2;
  // };

  // const editage_group3 = (e) => {
  //   setage_group3(e.target.value);
  //   const edited_age_group3 = age_group3;
  //   user[0].age_group3 = edited_age_group3;
  // };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users, {length:length, age_group1:age_group1}]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>Body length : {user[0].length}</h1>
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter AGE</Form.Label>
          <Form.Control
            type="number"
            age_group1="age_group1"
            value={age_group1}
            onChange={editage_group1}
            placeholder={user[0].age_group1}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>age_group2</Form.Label>
          <Form.Control
            type="text"
            age_group1="age_group2"
            // value={age_group2}
            onChange={editage_group2}
            placeholder={user[0].age_group2}
          />
        </Form.Group> */}
        {/* <Form.Group>
          <Form.Label>age_group3</Form.Label>
          <Form.Control
            type="text"
            age_group1="age_group3"
            // value={age_group3}
            onChange={editage_group3}
            placeholder={user[0].age_group3}
          />
        </Form.Group> */}
         <Link to="/">
          <Button onSubmit={()=>editUser} className="bg cont" >
            Edit User
          </Button>  
          <Button className="bg cont">
            Back to Home
          </Button>
          </Link>
      </Form>
    </div>
  );
};

export default Edit;

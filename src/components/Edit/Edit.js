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
  let user = users.filter((user) => user.length == length);
  console.log(user[0])

  const [age_group1, setage_group1] = useState(user[0].age_group1);
  // const [age, setNewage]=useState("")
   

  // const editage_group1 = (e) => {
  //     // const typeChange= parseInt(e.target.value)
  //     // setage_group1(typeChange);
  //     setNewage(e.target.value)
  //     const updated={length:user[0].length, age_group1: age}
  //     setage_group1(e.target.value);
  //     console.log(age_group1)
  //     // const edited_age_group1 = age_group1;
     
    
  // };

  const editNumber = (e) => {
    user[0].age_group1 = age_group1; 
    console.log(age_group1)
    //e.preventDefault();
    // setUser([...users, {length:length, age_group1:age_group1}])
    setUser(users);
  };

  return (
    <div className="edit">
      <Form >
        
         <Form.Group>
          <Form.Label>
            <h1>LENGTH: {user[0].length}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>AGE</Form.Label>
          <Form.Control
            type="number"
            age_group1="age_group1"
            value={age_group1}
            onChange={ e =>  setage_group1(e.target.value)}
            placeholder={user[0].age_group1}
          />
        </Form.Group>
       
         <Link to="/">
          <Button onClick={editNumber} type="button" className="bg cont" >
            Edit 
          </Button>  
          <Button className="bg cont" type="submit">
            Back to Home
          </Button>
          </Link>
     </Form>
   </div>
  );
};

export default Edit;

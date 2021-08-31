import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const Delete = () => {
  const [users, setUser] = useContext(UserContext); 
  const { length } = useParams();

  const deleteUser = (length) => {
    const user = users.filter((user) => user.length !== length);
    setUser([...user]);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="bg" >Cancel</Button>
            <Button onClick={() => deleteUser(length)} className="bg ">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;

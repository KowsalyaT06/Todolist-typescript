import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, FormControl, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";

const Main: FC = () => {
  return (
    <Container>
        <InputGroup className="m-3">
            <FormControl placeholder="Add Task"/>
            
            <Button variant="secondary">
                <i className="fas fa-plus mr-3"></i>
                ADD
            </Button>
          
        </InputGroup>
      <ListGroup variant="flush" className="m-2">
        <h3>INCOMPLETE</h3>
        <ListGroupItem
          variant="danger"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>KOWSi</div>
          <div>
            <i className="fas fa-check m-2"></i>
            <i className="fas fa-trash m-2"></i>
          </div>
        </ListGroupItem>
      </ListGroup>
      <ListGroup variant="flush" className="m-2">
        <h3>COMPLETE</h3>
        <ListGroupItem
          variant="success"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>KOWSi</div>
          <div>
            <i className="fas fa-check m-2"></i>
            <i className="fas fa-trash m-2"></i>
          </div>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};
export default Main;

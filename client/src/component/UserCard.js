import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, fetchData } from "../redux/action";
import EditUser from "./EditUser";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Body className="description">
          <Card.Title>Name:{user.fullName}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Phone: {user.phone}</Card.Text>
          <button
            onClick={() => {
              dispatch(deleteUser(user._id));
              dispatch(fetchData());
            }}
          >
            Delete
          </button>
          <EditUser user={user} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;

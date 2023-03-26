import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, fetchData } from "../redux/action";

const EditUser = ({ user }) => {
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedUser = { _id: user._id, fullName, email, phone };
    fullName && email && phone
      ? dispatch(editUser(editedUser))
      : alert("Enter a valid text!");
    dispatch(fetchData());
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update user:</Modal.Title>
        </Modal.Header>
        <form action="" onSubmit={handleEdit}>
          <label>Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="">E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUser;

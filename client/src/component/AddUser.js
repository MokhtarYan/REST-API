import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, fetchData } from "../redux/action";

const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { fullName, email, phone };
    fullName && email && phone
      ? dispatch(addUser(newUser))
      : alert("Put valid text");

    dispatch(fetchData());
    setFullName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddUser;

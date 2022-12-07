import React, { useEffect } from "react";
import { Container } from "@mui/system";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, users } from "../../store/Actions/Users/UserAction";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(users());
  }, []);

  const RemoveUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  if (data.loading) {
    return (
      <Container className="text-center">
        <h1>Loading ...</h1>
      </Container>
    );
  }

  const ShowUser = data.users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>
        <Button variant={`primary`}>
          <Link to={`/edit-user/${user.id}`}>Edit</Link>
        </Button>
      </td>
      <td>
        <Button variant={`danger`} onClick={() => RemoveUserHandler(user.id)}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <Container className="my-5">
      <Button variant={`success`} className="my-2">
        <Link to="/create-user">New User</Link>
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ShowUser}</tbody>
      </Table>
    </Container>
  );
};

export default User;

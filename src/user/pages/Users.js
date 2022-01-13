import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ryan Li",
      image:
        "https://mars.nasa.gov/system/resources/detail_files/22585_Name_A2_annotated-web.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

import axios from "axios";

const baseURL = "http://js-assessment-backend.herokuapp.com/users";
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getAllUsers = () => {
  return axios
    .get(baseURL, {
      headers: myHeaders,
    })
    .then((res) => res.data);
};

export const addNewUser = (userData) => {};

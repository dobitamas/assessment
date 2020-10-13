import axios from "axios";

const baseURL = "http://js-assessment-backend.herokuapp.com/users";
const headers = { "Content-Type": "application/json" };

export const getAllUsers = () => {
  const getHeaders = new Headers(headers);
  return axios
    .get(baseURL, {
      headers: getHeaders,
    })
    .then((response) => response.data);
};

export const toggleStatus = (updatedStatus, userId) => {
  const userData = { status: updatedStatus };
  return axios.put(`${baseURL}/${userId}.json`, userData, {
    headers: headers,
  });
};

export const addNewUser = (firstName, lastName) => {
  const getHeaders = new Headers(headers);
  const userData = {
    first_name: firstName,
    last_name: lastName,
    status: "active",
  };
  return axios.post(baseURL, userData, {
    headers: getHeaders,
  });
};

export const editUser = (firstName, lastName, userId) => {
  const userData = {
    first_name: firstName,
    last_name: lastName,
  };
  return axios.put(`${baseURL}/${userId}.json`, userData, {
    headers: headers,
  });
};

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
  const requestData = { status: updatedStatus };
  return axios.put(`${baseURL}/${userId}.json`, requestData, {
    headers: headers,
  });
};

export const addNewUser = (firstName, lastName) => {};

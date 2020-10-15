import axios from "axios";
import * as constants from "./constants";

export const getAllUsers = () => {
  const getHeaders = new Headers(constants.headers);
  return axios
    .get(constants.baseURL, {
      headers: getHeaders,
    })
    .then((response) => response.data);
};

export const toggleStatus = (updatedStatus, userId) => {
  const userData = { status: updatedStatus };
  return axios
    .put(`${constants.baseURL}/${userId}.json`, userData, {
      headers: constants.headers,
    })
    .then((response) => response);
};

export const addNewUser = (firstName, lastName) => {
  const getHeaders = new Headers(constants.headers);
  const userData = {
    first_name: firstName,
    last_name: lastName,
    status: constants.statuses.ACTIVE,
  };
  return axios
    .post(constants.baseURL, userData, {
      headers: getHeaders,
    })
    .then((response) => response.data);
};

export const editUser = (firstName, lastName, userId) => {
  const userData = {
    first_name: firstName,
    last_name: lastName,
  };
  return axios
    .put(`${constants.baseURL}/${userId}.json`, userData, {
      headers: constants.headers,
    })
    .then((response) => response);
};

export const getUserById = (userId) => {
  return axios
    .get(`${constants.baseURL}/${userId}.json`, {
      headers: constants.headers,
    })
    .then((response) => response.data);
};

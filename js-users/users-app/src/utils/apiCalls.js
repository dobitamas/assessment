import axios from "axios";
import * as constants from "./constants";

export const getAllUsers = () => {
  return axios.get(`${constants.baseURL}.json`);
};

export const toggleStatus = (updatedStatus, userId) => {
  const userData = { status: updatedStatus };
  return axios.put(`${constants.baseURL}/${userId}.json`, userData, {
    headers: constants.headers,
  });
};

export const addNewUser = (firstName, lastName) => {
  const userData = {
    first_name: firstName,
    last_name: lastName,
    status: constants.statuses.ACTIVE,
  };
  return axios.post(`${constants.baseURL}.json`, userData);
};

export const editUser = (firstName, lastName, userId) => {
  const userData = {
    first_name: firstName,
    last_name: lastName,
  };
  return axios.put(`${constants.baseURL}/${userId}.json`, userData, {
    headers: constants.headers,
  });
};

export const getUserById = (userId) => {
  return axios.get(`${constants.baseURL}/${userId}.json`, {
    headers: constants.headers,
  });
};

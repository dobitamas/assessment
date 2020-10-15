import * as apiCall from "../utils/apiCalls";
import axios from "axios";
import * as constants from "../utils/constants";
import { shallow } from "enzyme";

jest.mock("axios");

const errorMessage = "Network Error";
const status = "active";
const firstName = "Jane";
const lastName = "Doe";
const id = 116;

describe("getAllUsers", () => {
  it("should fetch successfully data from an API", async () => {
    const data = {
      data: [
        { first_name: "John", last_name: "Doe", id: 1, status: "locked" },
        { first_name: "Jane", last_name: "Doe", id: 1, status: "active" },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(apiCall.getAllUsers()).resolves.toEqual(data);
  });

  it("should fetch erroneously data from an API", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(apiCall.getAllUsers()).rejects.toThrow(errorMessage);
  });
});

describe("toggleStatus", () => {
  it("should fetch successfully data from an API", async () => {
    const response = "ok";

    axios.put.mockImplementationOnce(() => Promise.resolve(response));

    await expect(apiCall.toggleStatus(status, id)).resolves.toEqual(response);

    const data = { status: status };
    const headers = { headers: constants.headers };

    expect(axios.put).toHaveBeenCalledWith(
      `${constants.baseURL}/${id}.json`,
      data,
      headers
    );
  });

  it("should fetch erroneously data from an API", async () => {
    axios.put.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(apiCall.toggleStatus(status, id)).rejects.toThrow(
      errorMessage
    );
  });
});

describe("addNewUser", () => {
  it("should fetch successfully data from an API", async () => {
    const response = { first_name: firstName, last_name: lastName };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));

    await expect(apiCall.addNewUser(firstName, lastName)).resolves.toEqual(
      response
    );

    const data = { first_name: firstName, last_name: lastName, status: status };
    const headers = { headers: new Headers(constants.headers) };

    expect(axios.post).toHaveBeenCalledWith(constants.baseURL, data, headers);
  });

  it("should fetch erroneously data from an API", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(apiCall.addNewUser(firstName, lastName)).rejects.toThrow(
      errorMessage
    );
  });
});

describe("editUser", () => {
  it("should fetch successfully data from an API", async () => {
    const response = "ok";

    axios.put.mockImplementationOnce(() => Promise.resolve(response));

    await expect(apiCall.editUser(firstName, lastName, id)).resolves.toEqual(
      response
    );

    const data = { first_name: firstName, last_name: lastName };
    const headers = { headers: constants.headers };

    expect(axios.put).toHaveBeenCalledWith(
      `${constants.baseURL}/${id}.json`,
      data,
      headers
    );
  });

  it("should fetch erroneously data from an API", async () => {
    axios.put.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(apiCall.editUser(firstName, lastName, id)).rejects.toThrow(
      errorMessage
    );
  });
});

describe("getUserById", () => {
  it("should fetch successfully data from an API", async () => {
    const data = "ok";

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(apiCall.getUserById(id)).resolves.toEqual(data);

    const headers = { headers: constants.headers };
    expect(axios.get).toHaveBeenCalledWith(
      `${constants.baseURL}/${id}.json`,
      headers
    );
  });

  it("should fetch erroneously data from an API", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(apiCall.getUserById(id)).rejects.toThrow(errorMessage);
  });
});

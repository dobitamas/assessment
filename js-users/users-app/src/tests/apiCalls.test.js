import * as apiCall from "../utils/apiCalls";

test("Should not return null", () => {
  apiCall.getAllUsers().then((response) => {
    expect(response).not.toBeNull();
  });
});

test("Should not get an error as response", () => {
  let expectedError = null;
  apiCall
    .getAllUsers()
    .then((response) => response)
    .catch((err) => (expectedError = err));
  expect(expectedError).toBeNull();
});

test("Should save new user correctly and return as response", () => {
  const newUser = { firstName: "John", lastName: "Doe" };
  apiCall.addNewUser(newUser.firstName, newUser.lastName).then((response) => {
    expect(response.data.first_name).toBe(newUser.firstName);
    expect(response.data.last_name).toBe(newUser.lastName);
  });
});

test("Should return error message when a blank value is entered", () => {
  const newUser = { firstName: "John", lastName: "Doe" };
  apiCall.addNewUser(newUser.firstName, newUser.lastName).then((response) => {
    expect(response.data.first_name).toBe(newUser.firstName);
    expect(response.data.last_name).toBe(newUser.lastName);
  });
});

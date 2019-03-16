const Validator = require("validator");
const validText = require("./valid-text");

module.exports = ({ username, password }) => {
  const errors = {};
  username = validText(username) ? username : "";
  password = validText(password) ? password : "";

  if (Validator.isEmpty(username)) {
    errors.username = "username is required";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "password is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

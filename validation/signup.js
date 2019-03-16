const Validator = require("validator");
const validText = require("./valid-text");

module.exports = ({ username, password }) => {
  const errors = {};
  username = validText(username) ? username : "";
  password = validText(password) ? password : "";

  if (!Validator.isLength(username, { min: 2, max: 30 })) {
    errors.username = "Username must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(username)) {
    errors.username = "Username is required";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 cahracters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

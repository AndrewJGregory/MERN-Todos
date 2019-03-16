const validText = require("./valid-text");
const Validator = require("validator");

module.exports = ({ content }) => {
  const errors = {};

  content = validText(content) ? content : "";

  if (Validator.isEmpty(content)) {
    errors.content = "todo cannot be empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

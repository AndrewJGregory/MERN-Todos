module.exports = function normalize(arr) {
  return arr.reduce((obj, el) => {
    obj[[el._id]] = el;
    return obj;
  }, {});
};

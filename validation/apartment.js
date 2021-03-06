const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatMyApartment(data) {
  let errors = {};

  data.parcking = !isEmpty(data.parcking) ? data.parcking : '';
  data.desciption = !isEmpty(data.desciption) ? data.desciption : '';
  data.mainImg = !isEmpty(data.mainImg) ? data.mainImg : '';


  // if (Validator.isEmpty(data.city)) {
  //   errors.city = 'city field is required';
  // }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'address field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'price field is required';
  }

  if (Validator.isEmpty(data.apartmentNum)) {
    errors.apartmentNum = 'apartment Num date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

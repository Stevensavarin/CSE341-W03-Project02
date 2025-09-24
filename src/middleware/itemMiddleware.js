const validator = require('../helpers/validate');

const saveItem = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    description: 'string',
    category: 'required|string',
    price: 'required|numeric',
    inStock: 'required|boolean'
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      return res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveItem
};

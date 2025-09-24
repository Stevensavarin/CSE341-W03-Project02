const validator = require('../helpers/validate');

const saveUser = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    email: 'required|email',
    role: 'string|in:admin,customer'
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      return res.status(412).json({
        success: false,
        message: 'Validation failed',
        data: err
      });
    }
    next();
  });
};

module.exports = {
  saveUser
};


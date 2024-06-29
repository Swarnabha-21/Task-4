const { check, validationResult } = require('express-validator');

const validateProduct = [
  check('name').isString().notEmpty(),
  check('description').isString().notEmpty(),
  check('price').isNumeric(),
  check('category').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateProduct;

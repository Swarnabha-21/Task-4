const validateProduct = require('../middleware/validateProduct');

// Create Product with validation
router.post('/', validateProduct, async (req, res) => {
  // ...same as before
});

// Update Product with validation
router.put('/:id', validateProduct, async (req, res) => {
  // ...same as before
});

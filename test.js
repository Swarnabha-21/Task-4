const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Product = require('../models/product');

beforeAll(async () => {
  const url = process.env.MONGO_URI;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Product API', () => {
  it('should create a product', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        category: 'Test Category',
        images: []
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  // Additional test cases for read, update, delete...
});

const request = require('supertest');
const app = require('../app');

describe('GitHub Events Demo Routes', () => {
  test('GET / should return status 200 and contain "main"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('main');
  });

  test('GET /main-preview should return status 200 and contain "main"', async () => {
    const res = await request(app).get('/main-preview');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('main');
  });

  test('GET /not-found should return 404', async () => {
    const res = await request(app).get('/not-found');
    expect(res.statusCode).toBe(404);
  });
});


module.exports = app;
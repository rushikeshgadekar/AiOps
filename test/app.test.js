const request = require("supertest");
const app = require("../src/app");

describe("Service Health API", () => {
  test("GET /health should return UP", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("DOWN");
    expect(response.body.timestamp).toBeDefined();
  });

  test("GET /version should return application version", async () => {
    const response = await request(app).get("/version");

    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBe("1.0.0");
  });
});
test("GET /ready should return READY", async () => {
  const response = await request(app).get("/ready");

  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBe("READY");
});
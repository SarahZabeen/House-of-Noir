import request from "supertest";
import app from "./app";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import dotenv from "dotenv";

dotenv.config();
let mongoServer;
let db;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  db = await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("ALL TEST CASES", () => {
  describe("CHECK LOGIN", () => {
    test("IF FAILED RETURN 401", async () => {
      const response = await request(app).post("/api/users/login").send({
        email: "sarah@gmail.com",
        password: "test123",
      });
      expect(response.statusCode).toBe(401);
    });
  });
  describe("CHECK REGISTRATION ERROR", () => {
    test("IF FAILED RETURN 500", async () => {
      const response = await request(app).post("/api/users").send({
        email: "sarah@gmail.com",
        password: "test123",
      });
      expect(response.statusCode).toBe(500);
    });
  });
  describe("CHECK USER EXIST", () => {
    test("IF FAILED RETURN 500", async () => {
      const response = await request(app).post("/api/users").send({
        email: "sarah@gmail.com",
        password: "pass123",
      });
      expect(response.statusCode).toBe(500);
    });
  });
});

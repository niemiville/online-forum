const index = require("../index");
var expect  = require('chai').expect;
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

describe("some tests", () =>{

it("get all threads", done => {
  request(app)
    .get("/api/threads")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

/* test("testing route works", done => {
  request(app)
    .post("/test")
    .type("form")
    .send({ item: "hey" })
    .then(() => {
      request(app)
        .get("/test")
        .expect({ array: ["hey"] }, done);
    });
}); */
});
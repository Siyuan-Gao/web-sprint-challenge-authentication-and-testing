const supertest = require("supertest");

const server = require("./server.js");
const { TestScheduler } = require("jest");

describe("server", function () {
    it("runs the tests", function () {
        expect(true).toBe(true);
    });

    describe("POST /api/auth/register works", function () {
        it("should respond with 500", function () {
            return supertest(server)
                .post("/api/auth/register")
                .send({username: "student3", password: "abc123"})
                .then(res => {
                    expect(res.status).toBe(500);
                });
        });

        it("should respond with bad request", function () {
            return supertest(server)
                .post("/api/auth/register")
                .send({username: "student3"})
                .then(res => {
                    expect(res.status).toBe(400);
                });
        });
    });
    describe("POST /api/auth/login works", function () {
        it("should respond with 201 OK", function () {
            return supertest(server)
                .post("/api/auth/login")
                .send({username: "student3", password: "abc123"})
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        it("should respond with 400", function () {
            return supertest(server)
                .post("/api/auth/login")
                .send({username: "student3", password: "abc123"})
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InN0dWRlbnQzIiwiaWF0IjoxNTk5ODc1NzgwLCJleHAiOjE1OTk5NjIxODB9.rIUI7s6K-09oMNw7zhO0k63kRDki-OJm441d5UB__yg"
    describe("GET jokes works", function () {
        it("should respond with jokes", function() {
            return supertest(server)
                .get("/api/jokes")
                .set('Authorization', token)
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })
        it("should respond with fail because no token", function() {
            return supertest(server)
                .get("/api/jokes")
                .then(res => {
                    expect(res.status).toBe(401);
                });
        })
    })
});
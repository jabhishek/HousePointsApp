'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('POST /auth', function () {

    it('should respond with JSON array', function (done) {
        request(app)
            .post('/auth/local')
            .send(
            {
                user: {
                    id: "id",
                    password: "password"
                }
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                res.body.should.be.instanceof(Object);
                done();
            });
    });
});
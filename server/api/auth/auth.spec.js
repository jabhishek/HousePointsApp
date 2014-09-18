'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var data = require('../../data');
var hasher = require('./hasher');

describe('POST /auth', function () {
    var salt = hasher.createSalt(8);
    before(function (done) {
        data.users.remove({}, function (err) {
            if (err)
                console.log(err);
            done();
        });
    });

    beforeEach(function (done) {

        data.users.add({
            email: 'a@a.com',
            provider: 'local',
            role: 'user',
            name: 'test user',
            salt: salt,
            hashedPassword: hasher.computeHash("abc", salt)
        }, function (err) {
            if (err)
                console.log(err);
            done();
        });
    });

    afterEach(function (done) {
        data.users.remove({email: 'a@a.com'}, function (err) {
            if (err)
                console.log(err);
            done();
        });
    });

    it('should respond with no error if correct credentials provided', function (done) {
        request(app)
            .post('/auth/local')
            .send(
            {
                    email: "a@a.com",
                    password: "abc"
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                res.body.should.be.instanceof(Object);
                done();
            });
    });
    it('should respond with 401 if incorrect credentials provided', function (done) {
        request(app)
            .post('/auth/local')
            .send(
            {
                    email: "a@a.com",
                    password: "xyz"
            })
            .expect(401)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                res.body.should.be.instanceof(Object);
                done();
            });
    });
});

describe('hasher', function () {
    it('createSalt should return a salt', function (done) {
        var salt = hasher.createSalt();
        should.exist(salt);
        done();
    });

    it('createSalt create random bytes as long as the passed integer', function (done) {
        var salt = hasher.createSalt(8);
        (salt.length).should.be.exactly(8);

        salt = hasher.createSalt(10);
        (salt.length).should.be.exactly(10);
        done();
    });

    it('createSalt create random bytes of 8 characters long if no paramaters passed', function (done) {
        var salt = hasher.createSalt();
        (salt.length).should.be.exactly(8);

        done();
    });

    it('computeHash create a hash', function (done) {
        var salt = hasher.createSalt(8);
        var hash = hasher.computeHash("abc", salt);
        should.exist(hash);

        done();
    });

    it('computeHash create the same hash for the same string and salt', function (done) {
        var salt = hasher.createSalt(8);
        var hash1 = hasher.computeHash("abc", salt);
        var hash2 = hasher.computeHash("abc", salt);
        hash1.should.be.exactly(hash2);

        done();
    });

    it('computeHash create different hash for the same string but different salt', function (done) {
        var salt1 = hasher.createSalt(8);
        var salt2 = hasher.createSalt(10);
        var hash1 = hasher.computeHash("abc", salt1);
        var hash2 = hasher.computeHash("abc", salt2);
        hash1.should.not.be.exactly(hash2);

        done();
    });

    it('computeHash create different hash for the different string and same salt', function (done) {
        var salt = hasher.createSalt(8);
        var hash1 = hasher.computeHash("xyz", salt);
        var hash2 = hasher.computeHash("abc", salt);
        hash1.should.not.be.exactly(hash2);

        done();
    });

    it('computeHash create different hash for different string and salt', function (done) {
        var salt1 = hasher.createSalt(8);
        var salt2 = hasher.createSalt(10);
        var hash1 = hasher.computeHash("xyz", salt1);
        var hash2 = hasher.computeHash("abc", salt2);
        hash1.should.not.be.exactly(hash2);

        done();
    });
});


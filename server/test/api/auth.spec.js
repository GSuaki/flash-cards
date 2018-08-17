'use strict';

import { expect } from 'chai'
import request from 'supertest'

import { User } from '../../app/models'
import { hash } from '../../app/helper/bcrypt'
import app from '../../app/config/express'
import db_migration from '../config/db_migration'


// #######################################
// TESTS
// #######################################
const credentials = name => ({
  login: name,
  pwd: '123456'
})

const mockUser = () => {
  return hash('123456')
    .then(password => {
      return User.create({
        name: 'Gabriel',
        email: 'gabriel.suaki@hotmail.com',
        login: 'gsuaki',
        password
      })
    })
}

describe('Auth API', () => {
  beforeEach('Database migration - up', function(done) {
    this.timeout(0)
    db_migration.up().done(() => done())
  })

  afterEach('Database migration - down', function(done) {
    this.timeout(0)
    db_migration.down({ to: 0 }).then(() => done())
  })

  it('Should perform Login with login', function(done) {
    mockUser()
      .then((user) => {
        request(app)
          .post('/auth')
          .send(credentials('gsuaki'))
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(err).to.be.null
            expect(res.statusCode).to.equal(200);
            expect(res.header.authorization).to.contains("Bearer");
            done()
          });
      })
  });

  it('Should perform Login with email', function(done) {
    mockUser()
      .then(() => {
        request(app)
          .post('/auth')
          .send(credentials('gabriel.suaki@hotmail.com'))
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(err).to.be.null
            expect(res.statusCode).to.equal(200);
            expect(res.header.authorization).to.contains("Bearer");
            done()
          });
      })
  });

  it('Should perform Login with wrong email', function(done) {
    mockUser()
      .then(() => {
        request(app)
          .post('/auth')
          .send(credentials('gsuaki@hotmail.com'))
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(err).to.be.null
            expect(res.statusCode).to.equal(401);
            expect(res.body.code).to.equal('user.not.found');
            done()
          });
      })
  });

  it('Should perform Login with wrong password', function(done) {
    mockUser()
      .then(() => {
        request(app)
          .post('/auth')
          .send({ ...credentials('gsuaki'), pwd: '9999' })
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(err).to.be.null
            expect(res.statusCode).to.equal(401);
            expect(res.body.code).to.equal('password.not.matches');
            done()
          });
      })
  });

  it('Should receive validation error on perform Login', done => {
    request(app)
      .post('/users')
      .send({ 
        name: 'Gabriel'
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});
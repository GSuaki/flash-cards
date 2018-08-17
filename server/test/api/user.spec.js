'use strict';

import { expect } from 'chai'
import request from 'supertest'

import { User } from '../../app/models'
import app from '../../app/config/express'
import { compare } from '../../app/helper/bcrypt'
import db_migration from '../config/db_migration'


// #######################################
// TESTS
// #######################################
const newUser = name => ({
  name,
  email: `${name}@hotmail.com`,
  password: 'ji12j3',
  login: name
})

describe('User API', () => {
  beforeEach('Database migration - up', function(done) {
    this.timeout(0)
    db_migration.up().done(() => done())
  })

  afterEach('Database migration - down', function(done) {
    this.timeout(0)
    db_migration.down({ to: 0 }).then(() => done())
  })

  it('Should create User', done => {
    request(app)
      .post('/users')
      .send(newUser('Gabriel'))
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(200);
        expect(res.body.password).to.undefined
        
        User.findAll({ raw: true }).then(res => {
          expect(res.length).to.equal(1)
          const [ user ] = res
          expect(user.name).to.equal('Gabriel')
          expect(user.email).to.equal('Gabriel@hotmail.com')
          expect(user.login).to.equal('Gabriel')
          
          compare('ji12j3', user.password).then(res => {
            expect(res).to.equal(true)
            done();
          })
        })
      });
  });

  it('Should receive validation error on create User', done => {
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
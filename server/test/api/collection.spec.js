'use strict';

import { expect } from 'chai'
import request from 'supertest'

import { jwt } from '../config/auth'
import app from '../../app/config/express'
import { Collection } from '../../app/models'
import db_migration from '../config/db_migration'


// #######################################
// TESTS
// #######################################
const newCollection = (title, user_id) => ({
  title,
  user_id
})

describe('Collection API', () => {
  beforeEach('Database migration - up', function(done) {
    this.timeout(0)
    db_migration.up().done(() => done())
  })

  afterEach('Database migration - down', function(done) {
    this.timeout(0)
    db_migration.down({ to: 0 }).then(() => done())
  })

  it('Should create Collection', done => {
    request(app)
      .post('/collections')
      .send(newCollection('OCA', 15))
      .set('Accept', 'application/json')
      .set('Authorization', jwt())
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(200);
        
        Collection.findAll({ raw: true }).then(res => {
          const [ user ] = res
          expect(res.length).to.equal(1)
          expect(user.title).to.equal('OCA')
          expect(user.user_id).to.equal(15)
          done();
        })
      });
  });

  it('Should receive validation error on create Collection', done => {
    request(app)
      .post('/collections')
      .send({ 
        titled: 'Gabriel'
      })
      .set('Accept', 'application/json')
      .set('Authorization', jwt())
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});
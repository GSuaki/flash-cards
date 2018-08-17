'use strict';

import { expect } from 'chai'
import request from 'supertest'

import app from '../../app/config/express'
import { FlashCard } from '../../app/models'
import db_migration from '../config/db_migration'


// #######################################
// TESTS
// #######################################
describe('FlashCard API', () => {
  beforeEach('Database migration - up', function(done) {
    this.timeout(0)
    db_migration.up().done(() => done())
  })

  afterEach('Database migration - down', function(done) {
    this.timeout(0)
    db_migration.down({ to: 0 }).then(() => done())
  })

  it('Should create Flash Card', done => {
    request(app)
      .post('/flash-card')
      .send({ 
        title: 'how is this?',
        answer: 'Gabriel'
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(200);
        
        FlashCard.findAll({ raw: true }).then(res => {
          expect(res.length).to.equal(1)
          expect(res[0].title).to.equal('how is this?')
          expect(res[0].answer).to.equal('Gabriel')
          done();
        })
      });
  });

  it('Should receive validation error on create Flash Card', done => {
    request(app)
      .post('/flash-card')
      .send({ 
        title: 'how is this?'
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it('Should list Flash Cards', done => {
    FlashCard.bulkCreate([
      { title: 'how is this?', answer: 'Gabriel' },
      { title: 'how is she?', answer: 'Priscila' }
    ]).then(() => {
      request(app)
        .get('/flash-card')
        .end((err, res) => {
          expect(err).to.be.null

          const { body, statusCode } = res
          expect(statusCode).to.equal(200);
          expect(body.length).to.equal(2)
          expect(body[0].title).to.equal('how is she?')
          expect(body[0].answer).to.equal('Priscila')
          expect(body[1].title).to.equal('how is this?')
          expect(body[1].answer).to.equal('Gabriel')
          done();
        });
    })
  });
});
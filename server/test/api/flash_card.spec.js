'use strict';

import { expect } from 'chai'
import request from 'supertest'

import { jwt } from '../config/auth'
import app from '../../app/config/express'
import { FlashCard } from '../../app/models'
import db_migration from '../config/db_migration'


// #######################################
// TESTS
// #######################################
const newFlashCard = (name, collection_id) => ({
  front: `How to spell ${name}?`,
  back: `spell it ${name.split('').join('.')}!`,
  collection_id
})

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
      .post('/flash-cards')
      .send(newFlashCard('Gabriel', 12))
      .set('Accept', 'application/json')
      .set('Authorization', jwt())
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(200);
        
        FlashCard.findAll({ raw: true }).then(res => {
          expect(res.length).to.equal(1)
          expect(res[0].front).to.equal('How to spell Gabriel?')
          expect(res[0].back).to.equal('spell it G.a.b.r.i.e.l!')
          expect(res[0].collection_id).to.equal(12)
          done();
        })
      });
  });

  it('Should receive validation error on create Flash Card', done => {
    request(app)
      .post('/flash-cards')
      .send({ 
        front: 'how is this?'
      })
      .set('Accept', 'application/json')
      .set('Authorization', jwt())
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it.only('Should list Flash Cards', done => {
    FlashCard.bulkCreate([
      newFlashCard('Gabriel', 12),
      newFlashCard('Priscila', 12),
      newFlashCard('Hello', 13),
      newFlashCard('Hollar', 14)
    ]).then(() => {
      request(app)
        .get('/flash-cards')
        .query('collection_id=12')
        .set('Accept', 'application/json')
        .set('Authorization', jwt())
        .end((err, res) => {
          expect(err).to.be.null

          const { body, statusCode } = res
          expect(statusCode).to.equal(200);
          expect(body.length).to.equal(2)
          expect(body[0].front).to.equal('How to spell Gabriel?')
          expect(body[0].back).to.equal('spell it G.a.b.r.i.e.l!')
          expect(body[1].front).to.equal('How to spell Priscila?')
          expect(body[1].back).to.equal('spell it P.r.i.s.c.i.l.a!')
          done();
        });
    })
  });
});
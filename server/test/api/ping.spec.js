'use strict';

import { expect } from 'chai'
import request from 'supertest'
import app from '../../app/config/express'

// #######################################
// TESTS
// #######################################
describe('Ping API', () => {
    it('Should respond with pong',  function(done) {
        request(app)
            .get('/ping')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});
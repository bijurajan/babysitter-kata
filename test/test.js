var chai = require('chai');
var expect = require('chai').expect;
var babysitter = require('../babysitter.js');

describe('babysitter calculate rates', function () {

  describe('test pay rate from start to bedtime', function (done) {
    it('should calculate from 18 to 20', function (done) {

      var pay = babysitter.calculatePay({
        'start_time': 18,
        'bed_time': 20
      });

      expect(pay).to.equal(24);

      done();
    });

    it('should calculate from 17 to 23', function(done) {

      var pay = babysitter.calculatePay({
        'start_time': 17,
        'bed_time': 23
      });

      expect(pay).to.equal(72);

      done();
    });
  });
});
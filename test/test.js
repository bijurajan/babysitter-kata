var chai = require('chai');
var expect = require('chai').expect;
var babysitter = require('../babysitter.js');

describe('babysitter calculate rates', function() {
  it('should calculate 12 per hour from start to bedtime', function(done) {

    var pay = babysitter.calculatePay({
      'start_time' : 1800,
      'bed_time' : 2000
    });

    expect(pay).to.equal(24);
    done();
  });
});
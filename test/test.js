const chai = require('chai');
const expect = require('chai').expect;
const babysitter = require('../babysitter.js');

describe('babysitter calculate rates', function () {

  describe('test pay rate from start to bedtime', function () {
    it('should calculate for base rate', function () {
      let pay = babysitter.calculatePay({
        'start_time': 18,
        'bed_time': 19,
        'end_time': 19
      });

      expect(pay).to.equal(12);
    });

    it('should calculate for multiple base rates', function () {
      let pay = babysitter.calculatePay({
        'start_time': 17,
        'bed_time': 23,
        'end_time': 23
      });

      expect(pay).to.equal(72);
    });
  });

  describe('test pay rate from bedtime to midnight', function () {
    it('should calculate bedtime rate', function () {

      let pay = babysitter.calculatePay({
        'start_time': 23,
        'bed_time': 23,
        'end_time': 0
      });

      expect(pay).to.equal(8);

    });

  });

  describe('test pay rate from midnight to endtime', function () {
      it('should calculate midnight rate', function () {

        let pay = babysitter.calculatePay({
          'start_time': 0,
          'bed_time': 0,
          'end_time': 4
        });

        expect(pay).to.equal(64);

      });1

      it('should calculate multiple midnight rates', function () {

        let pay = babysitter.calculatePay({
          'start_time': 0,
          'bed_time': 0,
          'end_time': 1
        });

        expect(pay).to.equal(16);

      });

    });


  describe('test valid time inputs', function () {

    it('should reject if no start_time provided', function () {
      let pay = babysitter.calculatePay({
        'bed_time': 1
      });

      expect(pay).to.equal(-1);
    });

    it('should reject if no end_time provided', function () {
      let pay = babysitter.calculatePay({
        'end_time': 18
      });

      expect(pay).to.equal(-1);
    });

    it('should reject start time before 17', function () {
      let pay = babysitter.calculatePay({
        'start_time': 16
      });

      expect(pay).to.equal(-1);
    });

    it('should reject start time after 4, but before 17', function () {
      let pay = babysitter.calculatePay({
        'start_time': 5
      });

      expect(pay).to.equal(-1);
    });


    it('should reject bed time after midnight', function () {

      let pay = babysitter.calculatePay({
        'bed_time': 1
      });

      expect(pay).to.equal(-1);

    });

  });
});
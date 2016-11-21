module.exports = {
  calculatePay: function(payLoad) {
    var hours = payLoad.bed_time - payLoad.start_time;

    return (hours * 12);
  }
};
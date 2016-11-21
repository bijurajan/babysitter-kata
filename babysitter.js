module.exports = {
  calculatePay: function(payLoad) {

    if(payLoad.start_time < 17) {
        return -1;
    }

    var hours = payLoad.bed_time - payLoad.start_time;

    return (hours * 12);
  }
};
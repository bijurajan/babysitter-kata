module.exports = {
  calculatePay: function(payLoad) {

    const midnightTime = 24;

    const baseRate = 12;
    const bedtimeRate = 8;
    const midnightRate = 16;

    if(!this.validateInputs(payLoad)){
        return -1;
    }

    if(payLoad.end_time >= 0 && payLoad.end_time <= 4) {
        payLoad.end_time += midnightTime;
    }

    var beforeBedtimeHours = payLoad.bed_time - payLoad.start_time;

    var totalPayment = 0;

    if(payLoad.end_time > payLoad.bed_time) {
        var afterBedtimeToMidnightHours = midnightTime - payLoad.bed_time;
        var afterMidnightHours = payLoad.end_time - midnightTime;

        totalPayment += (afterBedtimeToMidnightHours * bedtimeRate) + (afterMidnightHours * midnightRate);
    }

    totalPayment += (beforeBedtimeHours * baseRate);
    

    return totalPayment;
  },

  validateInputs : function(payLoad){
    if(!('start_time' in payLoad) || !('end_time' in payLoad)){
        return false;
    }

    if(payLoad.start_time < 17) {
        return false;
    }

    if(payLoad.bed_time > 0 && payLoad.bed_time < 17) {
        return false;
    }
    return true;
  }
};
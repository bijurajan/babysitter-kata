module.exports = {
    calculatePay: function (payLoad) {

        if (!validateInputs(payLoad)) {
            return -1;
        }

        const midnightTime = 24;

        const bedtimeRate = 8;
        const midnightRate = 16;

        adjustEndtimePastMidnight(payLoad);

        let totalPayment = calculateBasePayment(payLoad);

        if (payLoad.end_time > payLoad.bed_time) {

            totalPayment += calculateBedtimeAndMidnightPayment(payLoad);
        }

        return totalPayment;
    }

};

function validateInputs(payLoad) {
    if (!('start_time' in payLoad) || !('end_time' in payLoad)) {
        return false;
    }

    if (payLoad.start_time < 17) {
        return false;
    }

    if (payLoad.bed_time > 0 && payLoad.bed_time < 17) {
        return false;
    }
    return true;
}

function adjustEndtimePastMidnight(payLoad) {
    const midnightTime = 24;
    if (payLoad.end_time >= 0 && payLoad.end_time <= 4) {
        payLoad.end_time += midnightTime;
    }
}

function calculateBasePayment(payLoad) {
    const baseRate = 12;

    let beforeBedtimeHours = payLoad.bed_time - payLoad.start_time;
    return (beforeBedtimeHours * baseRate);
}

function calculateBedtimeAndMidnightPayment(payLoad) {

    const midnightTime = 24;
    const midnightRate = 16;
    const bedtimeRate = 8;

    let afterBedtimeToMidnightHours = midnightTime - payLoad.bed_time;
    let afterMidnightHours = payLoad.end_time - midnightTime;

    return (afterBedtimeToMidnightHours * bedtimeRate) + (afterMidnightHours * midnightRate);;
}
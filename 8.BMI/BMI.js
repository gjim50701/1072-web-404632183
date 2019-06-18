let m = document.getElementById('m');
let kg = document.getElementById('kg');
let bmi = document.getElementById('bmi');
let result = document.getElementById('result');

document.getElementById('cal').addEventListener('click', CAL);
document.getElementById('reset').addEventListener('click', reset);

function CAL() {

    let nolkg;

    console.log('cal');
    if (m.value === null || kg.value === null) {
        alert('No input for m or kg');
        return;
    } else {
        bmi.value = (kg.value / (m.value * m.value)).toFixed(2);
    }

    if (bmi.value > 24.00) {
        nolkg = (kg.value - (24.00 * m.value * m.value)).toFixed(2);
    } else if(bmi.value == 24.00 || bmi.value == 18.50){
        nolkg = 0.00;
    } else {
        nolkg = ((18.50 * m.value * m.value) - kg.value).toFixed(2);
    }

    if (bmi.value > 35.00) {
        result.value = '重度肥胖 還要減少' + nolkg + '公斤 ';
    } else if (30.00 <= bmi.value && bmi.value < 35.00) {
        result.value = '中度肥胖 還要減少' + nolkg + '公斤 '
    } else if (27.00 <= bmi.value && bmi.value < 30.00) {
        result.value = '輕度肥胖 還要減少' + nolkg + '公斤 '
    } else if (24.00 <= bmi.value && bmi.value < 27.00) {
        result.value = '稍重 還要減少' + nolkg + '公斤 '
    } else if (18.50 <= bmi.value && bmi.value < 24.00) {
        result.value = '正常';
    } else if (bmi.value < 18.50) {
        result.value = '過輕 還要增加' + nolkg + '公斤 '
    }


}


function reset() {
    m.value = '';
    kg.value = '';
    bmi.value = '';
    result.value = '';
}
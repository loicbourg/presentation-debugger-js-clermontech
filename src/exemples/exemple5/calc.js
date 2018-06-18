function getValue1() {
    return document.querySelector('#value1').value;
}

function getValue2() {
    return document.querySelector('#value2').value;
}

function updateResult(result) {
    document.querySelector('#result').innerText = result;
}

function oneOfinputsIsEmpty() {
    return typeof getValue1() === 'undefined' || typeof getValue2() === 'undefined';
}

function computeResult() {
    var value1 = getValue1();
    var value2 = getValue2();

    return value1 + value2;
}

function add(evt) {
    evt.preventDefault();

    if (oneOfinputsIsEmpty()) {
        return;
    }

    var result = computeResult();

    updateResult(result);
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#calc-form').addEventListener(
        'submit',
        add
    )
});
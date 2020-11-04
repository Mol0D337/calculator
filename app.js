function insert(num) {
    document.querySelector('.result').value =
        document.querySelector('.result').value + num;
}
function clean() {
    document.querySelector('.result').value = ''
}
function equal() {
    let exp = document.querySelector('.result').value;
    if(exp) {
        document.querySelector('.result').value = eval(exp)
    }
}
function back() {
    let exp = document.querySelector('.result').value;
    document.querySelector('.result').value = exp.substring(0, exp.length - 1)
}

let screenCalc = document.querySelector('.screen')
let markOperation = true;
let prevResult = false

function showValueOnSreen(e) {
    if (typeof e === "number") {
        if (prevResult) {
            clearSreen();
            screenCalc.textContent += e
            prevResult = false
        } else {
            screenCalc.textContent += e
        }
        markOperation = true;
    }
    if (typeof e === "string" && markOperation) {
        if (prevResult) {
            prevResult = false
        }
        screenCalc.textContent += e;
        markOperation = false
    }
}
function clearSreen() {
    screenCalc.textContent = "";
}
function showResults() {
    let result = screenCalc.textContent
    screenCalc.textContent = eval(result)
    prevResult = true
}
function del() {
    if (screenCalc.textContent) {
        let arr = screenCalc.textContent.split("")
        arr.pop()
        screenCalc.textContent = arr.join("")
    }
}
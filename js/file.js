let screenCalc = document.querySelector('.screen')
let mark=true;
let prev=false

function showValueOnSreen(e){
    if(typeof e === "number"){
        if(prev){
            clearSreen()
            screenCalc.textContent += e
            prev=false
        }else{
            screenCalc.textContent += e
        }
        mark = true;
    }
    if(typeof e === "string" && mark){
        if(prev){
            prev=false
        }
        screenCalc.textContent += e;
        mark=false
    }
}
function clearSreen(){
    screenCalc.textContent="";
}
function showResults(){
    let result = screenCalc.textContent
    screenCalc.textContent=eval(result)
    prev=true
}
function del(){
    if(screenCalc.textContent){
        let arr=screenCalc.textContent.split("")
        arr.pop()
    screenCalc.textContent=arr.join("")
    }
}
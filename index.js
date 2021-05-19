// Your code here
function saturdayFun(fun='roller-skate'){
    return `This Saturday, I want to ${fun}!`;
}
const mondayWork = function (activ="go to the office"){
    return `This Monday, I will ${activ}.`;
}
mondayWork();
function wrapAdjective(val="*"){
     return function (par="special"){
        return `You are ${val}${par}${val}!`;
    }

}
wrapAdjective("%")("a dedicated programmer");
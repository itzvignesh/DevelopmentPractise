// var a = 10;
// console.log(window.a);
var arr = ["Vignesh", "Rithik", "testing"];
var searchFn = function (ele) {
    return arr.filter(function (data) { return data === ele; }).length > 0;
};
var inputValue = prompt("Enter the value");
searchFn(inputValue) ? console.log("".concat(inputValue, " found")) : console.log("".concat(inputValue, " not found"));

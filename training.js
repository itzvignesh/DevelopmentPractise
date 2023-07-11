var temp1 = document.getElementById("i1");
var temp2 = document.getElementById("i2");
var buttonvar = document.getElementById("submit_button");
var temp3 = document.getElementById("s1");
var temp4 = document.getElementById("s2");
var response = function (result) {
    if (result.isValid) {
        temp3.innerHTML = "";
        temp4.innerHTML = "";
        temp1.value = "";
        temp2.value = "";
        temp1.style.border = "2px solid black";
        temp2.style.border = "2px solid black";
        confirm("".concat(result.reason));
    }
    else {
        switch (result.reason) {
            case "Invalid UserName":
                temp4.innerHTML = "";
                temp3.innerHTML = "* ".concat(result.reason);
                temp3.style.color = "red";
                temp1.style.border = "2px solid red";
                temp2.style.border = "2px solid black";
                break;
            case "Invalid Email-Id":
                temp4.innerHTML = "*".concat(result.reason);
                temp3.innerHTML = "";
                temp4.style.border = "red";
                temp1.style.border = "2px solid black";
                temp2.style.border = "2px solid red";
                break;
        }
    }
};
var respfunc = function (v1, v2) {
    var userName = /^[a-zA-Z]{5,15}$/;
    var email = /^([a-zA-Z0-9\.-])+@([a-zA-Z0-9])+.([a-z]{2,20})$/;
    if (!(userName.test(v1))) {
        response({ isValid: false, reason: "Invalid UserName" });
    }
    else if (!(email.test(v2))) {
        response({ isValid: false, reason: "Invalid Email-Id" });
    }
    else {
        response({ isValid: true, reason: "Success!.." });
    }
};
buttonvar.addEventListener("click", function (e) {
    e.preventDefault(); // Stop to refresh the page
    var usernme;
    var gmailID;
    respfunc(usernme, gmailID);
});

// let temp1 = document.getElementById("i1") as HTMLInputElement;
// let temp2 = document.getElementById("i2") as HTMLInputElement;
// let buttonvar = document.getElementById("submit_button") as HTMLInputElement;
// let temp3 = document.getElementById("s1") as HTMLSpanElement;
// let temp4 = document.getElementById("s2") as HTMLSpanElement;

// interface ValidateSuccess{
//     isValid : true;
//     reason : "Success!..";
// }
// interface ValidateFailure{
//     isValid : false;
//     reason : "Invalid UserName" | "Invalid Email-Id";
// }
// type validateResult = ValidateSuccess | ValidateFailure ;

// const response = (result : validateResult) => {
//     if(result.isValid){
//         temp3.innerHTML = "";
//         temp4.innerHTML = "";
//         temp1.value="";
//         temp2.value="";
//         temp1.style.border = "2px solid black";
//         temp2.style.border = "2px solid black";
//         confirm(`${result.reason}`);
//     }else{
//         switch(result.reason){
//             case "Invalid UserName" :
//                 temp4.innerHTML="";
//                 temp3.innerHTML = `* ${result.reason}`;
//                 temp3.style.color = "red";
//                 temp1.style.border = "2px solid red";
//                 temp2.style.border = "2px solid black";
//                 break;
//             case "Invalid Email-Id" :
//                 temp4.innerHTML = `*${result.reason}`;
//                 temp3.innerHTML = "";
//                 temp4.style.border = "red";
//                 temp1.style.border = "2px solid black";
//                 temp2.style.border = "2px solid red";
//                 break;
//         }
//     }
// }

// buttonvar.addEventListener("click", (e:Event) => {
//     e.preventDefault(); // Stop to refresh the page
//     let usernme : string;
//     let gmailID : string;
//     respfunc(usernme,gmailID);
// })

// const respfunc = (v1 : string, v2 : string)=>{
//     const userName : RegExp = /^[a-zA-Z]{5,15}$/;
//     const email : RegExp = /^([a-zA-Z0-9\.-])+@([a-zA-Z0-9])+.([a-z]{2,20})$/;
//     if(!(userName.test(v1))){
//         response({isValid : false, reason : "Invalid UserName"});
//     }else if(!(email.test(v2))){
//         response({isValid : false,reason : "Invalid Email-Id"})
//     }else{
//            response ({isValid:true,reason : "Success!.."}) 
//         }
// }


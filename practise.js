//------------------------------------------
//To get text by using JS
const sucflmsg = document.querySelector(".alert .alert-message");
// console.log(sucflmsg.innerText);
// console.log(sucflmsg.innerHTML);
// console.log(sucflmsg.textContent);

//To set the value by using JS
//sucflmsg.innerText = " ✅ Order Placed <strong>Successfully</strong>";
//sucflmsg.innerHTML = "✅ Your Order <i>Placed</i> <strong>successfully</strong>"
//sucflmsg.textContent = "✅ Order Placed <strong>successfully</strong>"
//------------QuerySelector-------------//
//Queryselector focus only the first element 
//const div = document.querySelector('li');
//To get the last element in the tag
// const div = document.querySelector('li:last-child');
// console.log(div);
//Two method to get the element by chain
// const div1 = document.querySelector("main input");
// console.log(div1);
// const div1 = document.querySelector("main>div>input");
// console.log(div1);
// ---- QueryselectorAll print all the element by NodeList not by HTMLCollection
// const div = document.querySelectorAll('li')
// console.log(div);

// const div = document.querySelectorAll('li')
// console.log(div[0].innerText);

//--------------------------------------------------------------
// let inputFood = document.getElementById("input-food");
// let saveButton = document.getElementById("savebtn");
// let foodList = document.getElementById("list-items");

// saveButton.addEventListener("click", () => {
//     //alert("Thanks for choosing the food and will deliver shortly");
//     //document.write(inputFood.value);
//     //To Add the element to the list
//     foodList.innerHTML += `<li class="listitem"> ${inputFood.value}</li>`;
// });

//get element by class
// const item = foodList.getElementsByClassName("listitem");
// //console.log(item[1].innerText); //Mutton Biriyani
// // Below comment is used to fetch the data from the array
// let allfoods = [].map.call(item,(food) => food.textContent);
// console.log(allfoods);

// //get element by tag
// const CallingbyTag = document.getElementsByTagName('li');
// console.log(CallingbyTag);

// //get element by Name
// const inputfoodname = document.getElementsByName('input-food-name');
// console.log(inputfoodname);
//-----------------------------------------------------------------
// console.log(document.documentElement.lang);
// console.log(document.body.constructor.name);
// //command is used to know the html script present in the DOM
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);
// console.log(document.head instanceof HTMLBodyElement);
//-----------------------------------------------------------------
// const person = {
//     name : "Vignesh",   //property
//     place : "Ambur",  //property
//     //return "my name is" +this.name + "from" + this.place;
//     great(){
       
//         return `Hey this is ${this.name} from ${this.place}`;
//     }
// }

// person.name = "Vignesh";
// person.place = "Chennai";
// console.log(person.great());
//document.write(person.great()); // command used to write on the web page
//document.body.innerText=person.great(); // command used to assign new value to the body
//document.body.innerHTML=`<h1>${person.great()}</h1>`; command used assign header directly
// const inputName = prompt("what is your name :");
// const inputPlace = prompt("Where are you coming from?..")

// console.log(inputName , inputPlace);
// person.name = inputName;
// person.place = inputPlace;
// console.log(person.great());

//document.body.innerHTML=person.great();
// document.write(person.great());

//-------------------------------------------------------------
// console.log(document.URL);
// console.log(document.body);
// console.log(document.head);
// console.log(document.cookie);
// console.log(document.title);
// console.log(document.title="Sulekha Businesss");
// console.dir(document.head);
// console.error(document);
// console.warn(document);
// console.log(document.links); //Print all links of the web page
// console.log(document.forms); //print all forms of the web page
// console.log(document.all); //print each and everything of the web page
// console.log(document.images); // Print all image used in the web page

//Children command is used to access the child element of the body[(Body --> h1)Here children is 'h1']
//document.body.children[0].innerHTML="Sulekha business creation Page";

//console.log(window.find("sulekha")); //Used to find the text
function hi(){
    document.getElementById("para").innerHTML= "Thanks for joining with sulekha";
}
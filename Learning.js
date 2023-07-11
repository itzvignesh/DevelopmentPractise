// //function creatingDOM(message){
// function creatingDOM(){
// const main = document.getElementById("main");
// //console.log(main);

// //Creating div element
// const div = document.createElement("div");
// // const div2 = document.createElement("div");
// //Assigning class name
// div.className="alert";
// // div2.className="alert-message";
// // //Assign text to div section
// // div.textContent = "Order placed"
// //Another way to Assign text to div section
// const nodetext = document.createTextNode(" ✅Successfully Order placed!");
// // const button = document.createElement("button");
// // button.type="button";
// // button.value="x";
// //const nodetext2 = document.createTextNode("X");
// //const nodetext = document.createTextNode(message);
// //merge nodetext to the div section
// div.append(nodetext);
// // div2.append(button);

// //console.log(div);
// main.prepend(div,div2);

// }
// creatingDOM();
//creatingDOM(" ✅Successfully Order placed!")

let inputFood = document.getElementById("input-food");
let saveButton = document.getElementById("savebtn");
let foodList = document.getElementById("list-items");

saveButton.addEventListener("click", ()=>{

    const li = document.createElement("li");
    li.className = "listitem";
    const text = document.createTextNode(inputFood.value);
    li.append(text);
    foodList.append(li);
    const comment = document.createComment("Creating a li");
    foodList.append(comment);
})
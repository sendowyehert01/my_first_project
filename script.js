document.body.style.textAlign = "center";
document.body.style.backgroundColor = "gray";

var slots = [];

var  inputName = document.querySelectorAll("input")[0];
var  inputAge = document.querySelectorAll("input")[1]; 
var  inputLoc = document.querySelectorAll("input")[2];
var Saved = document.querySelectorAll("button")[0];
var hide = document.querySelectorAll("button")[1];
var clear = document.querySelectorAll("button")[2];
var record = document.querySelector("h2");

let Save = {
    name: "",
    age: "",
    location: ""
}

Saved.addEventListener("click", saving);

clear.addEventListener("click", memRec);

hide.addEventListener("click", clearing);

//-----FUNCTIONS-----

function saving() {

    let newSave = {
        name: "",
        age: "",
        location: ""
    }

    slots.push(Save);
    Save = newSave;
    inputName.value = "";
    inputAge.value = "";
    inputLoc.value = "";
}

function memRec() {
    let enty = document.querySelector(".menu");
    enty.style.display = "block";
    while (enty.hasChildNodes())
    enty.removeChild(enty.firstChild)
    var i = 0;
    slots.forEach(function(slot){
    var show = document.createElement("span");
    show.style.display = "block";
    show.innerHTML = `Registerd Name: <b>${slot.name}</b> 
    <button onclick=details(${i})>Show Details</button>
    <div class="details-${i}" style="display: none;"></div>`;
    show.style.fontSize = "15";
    enty.appendChild(show);


    let detalye = document.querySelector(".details-"+i);
    // while (detalye.hasChildNodes())
    // if (detalye.childNodes.length === 2) {    
    //     detalye.removeChild(detalye.lastChild)
    //     }
    // slots.forEach(function(slot){
    var showed = document.createElement("ul");
    showed.innerHTML = `<li>Name: ${slots[i].name}</li><li>Age: ${slots[i].age}</li>
    <li>Location: ${slots[i].location}</li>`;
    showed.style.fontSize = "15";
    detalye.appendChild(showed);
    i++;
    })
    document.querySelector(".menu").style.color = "black";
}

function details(i) {
    // let detalye = document.querySelector(".details-"+i);
    // // while (detalye.hasChildNodes())
    // if (detalye.childNodes.length === 2) {    
    //     detalye.removeChild(detalye.lastChild)
    //     }
    // // slots.forEach(function(slot){
    // var showed = document.createElement("ul");
    // showed.innerHTML = `<li>${slots[i].name}</li><li>${slots[i].age}</li>
    // <li>${slots[i].location}</li>`;
    // showed.style.fontSize = "15";
    // detalye.appendChild(showed);
    // // })

        var x = document.querySelector(".details-"+i);
             if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
                }

inputName.addEventListener("change", function(){
    Save.name = this.value;
});

inputAge.addEventListener("change", function(){
    Save.age = this.value;
});

inputLoc.addEventListener("change", function(){
    Save.location = this.value;
});


function clearing() {
    var x = document.querySelector(".menu");
    while (x.style.display === "none") {
           x.style.display = "block";
    }
           x.style.display = "none";
}
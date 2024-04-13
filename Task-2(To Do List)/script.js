// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var maindiv = document.querySelector(".content");

var submit = document.getElementById("submit");

var gifElement = document.getElementById('gif');

var page = document.getElementById("page");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




var input_box1 = document.getElementById("input-box1");
var heading = document.getElementById("heading");
var alert1 = document.getElementById("alert1");

var input_box2 = document.getElementById("input-box2");
var list = document.getElementById("list");

let container1 = document.querySelector(".container1");


input_box1.addEventListener("focus", function() {
  // When input field receives focus, hide the heading
  input_box1.placeholder = "";
  alert1.style.display = "none";
});

input_box1.addEventListener("blur", function() {
  // When input field receives focus, hide the heading
  input_box1.placeholder = "To Do List";
});



function createNew() {
  if(input_box1.value === "") {
    alert1.style.display = "block";
    /*console.log("Please enter a task");*/
  } 
  else {
    alert1.style.display = "none";
    modal.style.display = "none";
    maindiv.style.animation = 'fadeOut 3s';
    maindiv.addEventListener('animationend', function() {
    // Set display to 'none' after animation ends
    maindiv.style.display = 'none';
    page.style.justifyContent = 'center';
    gifElement.style.display = 'flex';
    gifElement.style.animation = 'fadeIn 3s';
  });
    heading.innerHTML = input_box1.value;
  }
  clearData();
  saveData();
  loadData();
}



input_box2.addEventListener("focus", function() {
  // When input field receives focus, hide the heading
  input_box2.placeholder = "";
  input_box2.classList.remove("alert2");
  alert1.style.display = "none";
});

input_box2.addEventListener("blur", function() {
  // When input field receives focus, hide the heading
  input_box2.placeholder = "Enter The task name";
  input_box2.classList.remove("alert2");
});


function addItem() {
  if(input_box2.value === "") {
    input_box2.classList.add("alert2");
    input_box2.placeholder = "Please enter a task";

  } 
  else {
    var li = document.createElement("li");
    li.innerHTML = '<img src="Resources/index1.png" alt="">' + input_box2.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00D7';
    li.appendChild(span);
    input_box2.value = "";
  }
    saveData();
    loadData();
    
  
}

list.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    var image1 = e.target.querySelector("img");
    if (image1.getAttribute("src") === "Resources/index1.png") {
      image1.setAttribute("src","Resources/index3.png");
    } else {
      image1.setAttribute("src","Resources/index1.png");
    }
    saveData();
    loadData();
  }
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
    loadData();
  }
},false);

function saveData(){
  localStorage.setItem("data",list.innerHTML);
  localStorage.setItem("data1",heading.innerHTML);
}

function loadData(){
    list.innerHTML = localStorage.getItem("data");
    heading.innerHTML = localStorage.getItem("data1");
}

function clearData() {
  localStorage.removeItem("data");
  localStorage.removeItem("data1");
}


function loadList(){
  maindiv.style.animation = 'fadeOut 3s';
    maindiv.addEventListener('animationend', function() {
    // Set display to 'none' after animation ends
    maindiv.style.display = 'none';
    page.style.justifyContent = 'center';
    gifElement.style.display = 'flex';
    gifElement.style.animation = 'fadeIn 3s';
    loadData();
  });
}


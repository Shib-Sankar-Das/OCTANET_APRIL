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

submit.onclick = function() {
  /*var task = document.getElementById("task").value;
  var div = document.createElement("div");
  div.className = "task";
  div.innerHTML = task;
  maindiv.appendChild(div);*/
  modal.style.display = "none";
  maindiv.style.animation = 'fadeOut 3s';
  maindiv.addEventListener('animationend', function() {
    // Set display to 'none' after animation ends
    maindiv.style.display = 'none';
    page.style.justifyContent = 'center';
    gifElement.style.display = 'flex';
    gifElement.style.animation = 'fadeIn 3s';
  });
  /*maindiv.style.display = 'none';*/
  // Wait for the page to fully load before executing JavaScript
  // Display the GIF
}


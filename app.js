


var buttons = document.getElementsByClassName('myButton');

function changeBackgroundColor(clickedButton) {
  // Remove active class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  
  // Add active class to the clicked button
  clickedButton.classList.add('active');
}

var buttons2 = document.getElementsByClassName('myButton2');

function changeBackgroundColor2(clickedButton) {
  // Remove active class from all buttons
  for (var i = 0; i < buttons2.length; i++) {
    buttons2[i].classList.remove('white-active');
  }
  
  // Add active class to the clicked button
  clickedButton.classList.add('white-active');
}

// For dropdown 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("drop-btn").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


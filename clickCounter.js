 
 let count = 0; 

 
 const countDisplay = document.getElementById("countDisplay");
 const clickButton = document.getElementById("clickButton");

 
 function updateCountDisplay() {
     countDisplay.textContent = `Count: ${count}`;
 }

 
 clickButton.addEventListener("click", function () {
     count++; //
     updateCountDisplay(); 
 });
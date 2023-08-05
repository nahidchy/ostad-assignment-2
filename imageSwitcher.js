  // JavaScript code to handle the button click events and switch the image source
  const imageElement = document.getElementById("imageElement");
  const buttonImage1 = document.getElementById("buttonImage1");
  const buttonImage2 = document.getElementById("buttonImage2");

  // Function to set the image source to "image1.jpg"
  function showImage1() {
      imageElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrATUI533Z_oaewNp1LXv-gW5Dcpf70y-iUJJBMzsKeNzqc15xCYJwN2OLAIeo8h263a8&usqp=CAU";
      imageElement.alt = "Image 1";
  }

  // Function to set the image source to "image2.jpg"
  function showImage2() {
      imageElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIM0r7khWAyMYKKt9h-p51ruwSNLLO6xRRuQ&usqp=CAU";
      imageElement.alt = "Image 2";
  }

  // Event listeners for the button click events
  buttonImage1.addEventListener("click", showImage1);
  buttonImage2.addEventListener("click", showImage2);
  
  const contentDiv = document.getElementById("contentDiv");
  const clickButton = document.getElementById("clickButton");

  function changeContent() {
      if (contentDiv.innerHTML === "") {
          contentDiv.innerHTML = "<p>Hello, this is a new message!</p><img src='https://th-thumbnailer.cdn-si-edu.com/zyik7KJtkSuYCfVOHNyj5KcYLO0=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1d/10/1d102878-7750-49f4-bced-1809c4d7e8ea/tiger.jpg' alt='Image'>";
      } else {
          contentDiv.innerHTML = "";
      }
  }

  
  clickButton.addEventListener("click", changeContent);
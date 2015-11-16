var imageTag = document.getElementsByTagName("img");
var count = 0;

function countDown () {
  setTimeOut(sayHello,5000);
}

for (var i = 0; i < imageTag.length; i++) {
  imageTag[i].addEventListener("click", sayHello);
}

function sayHello () {
  if (this.getAttribute("data-state") !== "clicked") {
    count++;
    alert(count);
    this.setAttribute('data-state', "clicked");
  } else {
    alert(count);
  }
}
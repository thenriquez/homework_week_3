var imageTag = document.getElementsByTagName("img");
var buttonTag = document.getElementById("start-countdown");
var count = 0;

buttonTag.addEventListener("click", initializeTimeoutFunction);

function initializeTimeoutFunction () {
  setTimeout(gameResult, 20000);
}


for (var i = 0; i < imageTag.length; i++) {
  imageTag[i].addEventListener("click", sayHello);
}

function sayHello () {
  if (this.getAttribute("data-state") !== "clicked") {
    count++;
    this.setAttribute('data-state', "clicked");
    return count;
  } else {
    return count;
  }
}

function gameResult () {

  alert("You clicked " + count + " faces.");

  buttonTag.removeEventListener("click", initializeTimeoutFunction);

  for (var i = 0; i < imageTag.length; i++) {
    imageTag[i].removeEventListener("click", sayHello);
  }

}
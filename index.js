//How to make a text look like it is being written using animation in javascript?


let hidden = document.querySelector(".hidden");
hidden.style.display = "none"
let tracker = 1; // initially it's the first

// get every occurrence of "research-paper" class and add a 'click' eventListener to it
let researchPaperClass = document.getElementsByClassName('research-paper');

for(var j = 0; j < researchPaperClass.length; j++){
    researchPaperClass[j].addEventListener("click", function(){
        var currentId = this.id.replace("paper-", "");

        // first, add 'hidden' to the previous class
        document.getElementById("paper-content-" + tracker).className += " hidden";

        // finally, remove 'hidden' from the current clicked one to show it
        document.getElementById("paper-content-" + currentId).className = document.getElementById("paper-content-" + currentId).className.replace(/hidden/gm, "");

        // update the tracker
        tracker = currentId;
    });
}




// function fadeInTitle() {
//   const h1Ele = document.querySelector(".titlu");
//   h1Ele.style.opacity = 0;
//   h1Ele.style.transitionProperty = "opacity";
//   h1Ele.style.transitionDuration = "1s"
//   h1Ele.style.transitionTimingFunction = "ease"
//   h1Ele.classList.add("fadeIn").style.opacity = 1;
  
// }


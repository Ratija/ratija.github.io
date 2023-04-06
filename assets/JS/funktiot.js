// scroll to top functionality
document.addEventListener("DOMContentLoaded", () => {
  const scrollUp = document.querySelector("#scroll-up");

  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 


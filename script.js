var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub:true,
    // markers: true
}})

tl.to(".fanta",{
    top:"120%",
    left:"0%"
}, 'orange')

tl.to(".orangehalf",{
    top:"160%",
    left:"20%"
}, 'orange')

tl.to(".orange",{
    width: "15%",
    top:"170%",
    right:"10%"
}, 'orange')

tl.to(".leaf1",{
   rotate:"130deg",
    top:"108%",
    left:"80%"
}, 'orange')

tl.to(".leaf2",{
     top:"105%",
     left:"0%"
 }, 'orange')

 var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "20% 95%",
    end: "70% 50%",
    scrub:true,
    // markers: true
}}) 

tl2.from(".lemon1",{
   left:"-50%",
   rotate:"360deg"
}, 'lemon')

tl2.from(".lemon2",{
    right:"-50%",
    rotate:"360deg"
 }, 'lemon')

 tl2.from(".cocacola",{
    left:"-50%",
    rotate:"360deg"
 }, 'lemon')

 tl2.from(".pepsi",{
    right:"-50%",
    rotate:"360deg"
 }, 'lemon')

 tl2.to(".fanta",{
    top:"215%",
    left:"27%",
    // width: "40%",
    rotate:"370deg"
}, 'lemon')

tl2.to(".orangehalf",{
    top:"203%",
    left:"35%",
    rotate:"360deg",
    // width:"22%"
}, 'lemon')

var tl3 = gsap.timeline({scrollTrigger:{
    trigger:".four",
    start: "20% 95%",
    end: "70% 50%",
    scrub:true,
    // markers: true
}}) 

tl3.to(".cocacola",{
    top:"150%",
    left:"260%",
    // width: "80%"
}, 'co')

tl3.to(".lemon1",{
    top:"120%",
    left: "270%",
    rotate:"360deg",
    // width:"22%"
}, 'co')


var tl4 = gsap.timeline({scrollTrigger:{
    trigger:".five",
    start: "20% 95%",
    end: "70% 50%",
    scrub:true,
    // markers: true
}}) 

tl4.to(".pepsi",{
    top:"320%",
    right:"210%",
    // width: "80%"
}, 'pe')

tl4.to(".lemon2",{
    top:"295%",
    right: "280%",
    rotate:"360deg",
    // width:"22%"
}, 'pe')
  

let lastBubbleTime = 0; // Store last bubble creation time
const bubbleCooldown = 200; // Minimum time (ms) between bubbles

function createBubble() {
  let currentTime = Date.now();
  if (currentTime - lastBubbleTime < bubbleCooldown) return; // Prevent too many bubbles

  lastBubbleTime = currentTime; // Update last bubble time

  let bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Set random size and position
  bubble.style.width = bubble.style.height = Math.random() * 30 + 10 + "px";
  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.animationDuration = Math.random() * 3 + 2 + "s"; // Different speeds

  document.querySelector(".bubbles-container").appendChild(bubble);

  // Remove bubble after animation ends
  setTimeout(() => bubble.remove(), 5000);
}

// Create bubbles only when scrolling, but not too fast
window.addEventListener("scroll", createBubble);



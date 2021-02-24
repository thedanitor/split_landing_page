// left side
const left = document.querySelector(".left");
// right side
const right = document.querySelector(".right");
// container
const container = document.querySelector(".container");

// on left side listen for mouse enter (hover)
// add hover-left class to left
left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
// on left side listen for mouse leave
// remove hover-left class to left
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

// on right side listen for mouse enter (hover)
// add hover-left class to right
right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
// on right side listen for mouse leave
// remove hover-left class to right
right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));
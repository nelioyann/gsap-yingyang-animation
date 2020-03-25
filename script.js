const title = document.querySelector(".title");

const tl = new TimelineLite({paused: true, reversed: true});

tl
.from(".box.first", 3, {
    autoAlpha: 0,
    ease: Power2.easeOut
}).from(".ball.white", 2, {
    y: "300px",
    opacity: 0,
    ease: Power2.easeOut
}).from(".ball.black", 2, {
    y: "-300px",
    opacity: 0,
    ease: Power2.easeOut
}, "-=2").from(".dot.white", 2, {
    y: "300px",
    opacity: 0,
    ease: Power2.easeOut
}).from(".dot.black", 2, {
    y: "-300px",
    opacity: 0,
    ease: Power2.easeOut
}, "-=2")
.to(".circle", 2, {
    borderRadius: "50%",
    ease: Power2.easeOut
})
.to('.box.first', 3, {
    rotation: 360,
    ease: Power2.easeOut
})
// .to(".first", 3, {
//     borderRadius: "50%"
// })

title.addEventListener('click', ()=>{
    toggleTween(tl)
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse()
    console.log(tween.reversed())
}
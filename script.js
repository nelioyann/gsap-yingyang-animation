const title = document.querySelector(".title");

const tl = new TimelineLite({ paused: true, reversed: true });

tl
    .from(".box.first", 3, {
        autoAlpha: 0,
        ease: Power2.easeOut
    }).from(".ball.white", 2, {
        y: "300px",
        ease: Power2.easeOut
    }).from(".ball.black", 2, {
        y: "-300px",
        ease: Power2.easeOut
    }).from(".dot.white", 1, {
        x: "300px",
        opacity: 0,
        ease: Power2.easeOut
    }).from(".dot.black", 1, {
        x: "-300px",
        opacity: 0,
        ease: Power2.easeOut
    })
    .to(".dot.white", 1, {
        borderRadius: "50%",
        ease: Power2.easeOut
    })
    .to(".dot.black", 1, {
        borderRadius: "50%",
        ease: Power2.easeOut
    })
    .to(".ball.white", 1, {
        borderRadius: "50%",
        ease: Power2.easeOut
    })
    .to(".ball.black", 1, {
        borderRadius: "50%",
        ease: Power2.easeOut
    })
    .to(".circle", 1, {
        borderRadius: "50%",
        ease: Power2.easeOut
    })
    .to(".box", 1, {
        scale: 1.1,
        ease: Power2.easeOut
    })
    .to(".box", 1, {
        scale: 1,
        ease: Power2.easeOut
    })
    .to('.box.first', 3, {
        rotation: 180,
        ease: Power2.easeInOut
    })
// .to(".first", 3, {
//     borderRadius: "50%"
// })

title.addEventListener('click', () => {
    toggleTween(tl)
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse()
    console.log(tween.reversed())
}
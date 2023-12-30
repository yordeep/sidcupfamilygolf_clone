var crs = document.querySelector("#cursor");

var blur = document.querySelector("#cursor-blur");



var img1 = document.querySelector("#img1");

var img2 = document.querySelector("#img2");
img2.style.display = "none";


var img3 = document.querySelector("#img3");
img3.style.display = "none";


var btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
    img1.style.opacity = "0";
    setTimeout(() => {
        img1.style.opacity = "1";
    }, 100);
})

var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
    img2.style.opacity = "0";
    setTimeout(() => {
        img2.style.opacity = "1";
    }, 100);
})

var btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img3.style.opacity = "0";
    setTimeout(() => {
        img3.style.opacity = "1";
    }, 100);
})
document.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x-2+"px"
    crs.style.top = dets.y-2+"px"

    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
})

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crs.style.scale = 3;
        crs.style.border = "1px solid #fff";
        crs.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1;
        crs.style.border = "0px solid #95C11E";
        crs.style.backgroundColor = "#95C11E";
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"6vw",
    duration:1,
    scrollTrigger :{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from("#about img,#about-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from(".card",{
    opacity:0,
    // scale:0.2,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from("#colon1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})
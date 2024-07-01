//=============== Kishan code ================
var csr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(loc){
    csr.style.left=loc.x-10+"px";
    csr.style.top=loc.y-10+"px";
})
gsap.to(".nav",{
    backgroundColor:"#FFFFFF00",
    height:95,
    duration:1,
    color:"#fff",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -20%",
        end:"top -22%",
        scrub:2
    }
    }
)


// End Kishan

// Rixit Code

// End Rixit 



// Renish Code

// End Renish
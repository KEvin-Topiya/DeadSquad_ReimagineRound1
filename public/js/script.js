//=============== Kishan code ================
var csr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(loc){
    csr.style.left=loc.x-10+"px";
    csr.style.top=loc.y-10+"px";
})
gsap.to(".nav",{
    backgroundColor:"rgba(255,255,255,0.7)",
    height:85,
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -20%",
        end:"top -22%",
        scrub:2
    }
    }
)
gsap.to(".logo",{
    height:76,
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -20%",
        end:"top -22%",
        scrub:2
    }
    }
)

gsap.to(".pd",{
    rotate:24,
    duration:0.7,
    scrollTrigger:{
        trigger:".pd",
        scroller:"body",
        start:"top 22%",
        end:"top 20%",
        scrub:2
    }
})


gsap.from(".title-product",{
    opacity:0,
    duration:3,
    y:90,
    scrollTrigger:{
        trigger:"#nproduct",
        scroller:"body",
        start:"top 60%",
        end:"top 57%",
        scrub:2
    }
})

gsap.from(".new",{
    opacity:0,
    duration:3,
    y:100,
    scrollTrigger:{
        trigger:".new",
        scroller:"body",
        start:"top 60%",
        end:"top 57%",
        scrub:2
    }
})

gsap.from(".title-all",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger:{
        trigger:".title-all",
        scroller:"body",
        start:"top 70%",
        end:"top 67%",
        scrub:2,
    }
})
gsap.from(".prod-container",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger:{
        trigger:".prod-container",
        scroller:"body",
        start:"top 70%",
        end:"top 67%",
        scrub:2
    }
})
gsap.from(".title-about",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger:{
        trigger:".title-about",
        scroller:"body",
        start:"top 80%",
        end:"top 77%",
        scrub:2
    }
})
gsap.from(".timeline",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger:{
        trigger:".timeline",
        scroller:"body",
        start:"top 80%",
        end:"top 77%",
        scrub:2
    }
})
gsap.from(".about-balaji",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger:{
        trigger:".about-balaji",
        scroller:"body",
        start:"top 80%",
        end:"top 77%",
        scrub:2
    }
})



// End Kishan

// Rixit Code

// End Rixit 



// Renish Code

// End Renish

//kevin
const bdy=document.body
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('nav ul li a');
let currentSection = '';
let scrol = true


document.addEventListener('scroll', () => {
    // handlescroll()

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });
    
    menuItems.forEach(item => {     
        item.onclick=cls()
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + currentSection) {
            item.classList.add('active');
        }
    });
});



let cr1=document.querySelector('.cr1')
let cr2=document.querySelector('.cr2')
let cr3=document.querySelector('.cr3')
let bg=document.querySelector('.bg')
let ptext=document.querySelector('.ptext')
let packet=document.querySelector('.pd')
const color=[
   
    {//green
        url:"url('./assets/NewProducts/c&o.png')",
        bg:"#70E000",
        color1:"#8AC926",
        color2:"#B3DD6F",
        color3:"#D8FBA2",
        html:"<p class='ptext font-f1 text-[]'>CREAMY  <b class='font-black'>FUN</b><br/>WITH <b>ONION</b> MASALA </p></div>"
    },
    {//blue
        url:"url('./assets/NewProducts/masalmasti.png')",
        bg:"#4CC9F0",
        color1:"#3A86FF",
        color2:"#65A0FF",
        color3:"#BAD5FF",
        html:" <p class='ptext font-f1 text-[]'>MASALA ZING FOR YOU <br/><b class='whitespace-pre'>TEA TIME CONVERSITION</b></p></div> "
    },
    {//yellow
        url:"url('./assets/NewProducts/chatchaska.png')",
        bg:"#FFD60A",
        color1:"#FFCA3A",
        color2:"#FBD775",
        color3:"#FEE397",
        html:" <p class='ptext font-f1 text-[]'>CHATPATA <b class='font-black'> GOSSIP</b> &<br/>CHATPATA <b>NIMBU</b></p></div>"
    },
]

const myTimeout = setInterval(anim1, 4000);
let x=0;


function anim1(){
    
    cr1.style.backgroundColor=(color[x].color3)
    cr2.style.backgroundColor=(color[x].color2)
    cr3.style.backgroundColor=(color[x].color1)
    bg.style.backgroundColor=(color[x].bg)
    ptext.classList.toggle("leftRight")
    
    ptext.style.animation
    ptext.innerHTML=(color[x].html)
    
    
    setTimeout(() => {
        packet.style.transform="translateX(50rem)";
        ptext.style.transform="translateX(-100rem)";
    }, 0); 
    

setTimeout(() => {
    packet.style.transform="translateX(0rem) rotate(-12deg)";
    ptext.style.transform="translateX(0rem)";
}, 500);

packet.style.content=(color[x].url);
if(x<color.length-1)x++;
else x=0;
}



//scroll effect
// function handlescroll() {
//     if (scrol == true) {
//         let cs = '';
//         console.log("scrol")
//         sections.forEach(s => {
//             s.style.margin="5rem"
//             s.onclick = function () {
//                 normal();
//                 cs = s.getAttribute('id');
//                 const offsetTop = s.offsetTop;
//                 window.scrollTo({ top: offsetTop, behavior: 'smooth' });
//             }
//         })
//         bdy.style.transition = ".5s"

//         bdy.classList.add("scale-75")
//         scrol = false
//     }

// }
// function normal() {
//     bdy.classList.remove("scale-75")
//     bdy.style.transition = ".5s"
//     sections.forEach(s=>{
//         s.style.margin="unset"
//         bdy.style.transition = ".5s"
//     })
//     setTimeout(() => {
//         scrol = true
//     }, 700);
// }
//=============== Kishan code ================
var csr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(loc){
    csr.style.left=loc.x-10+"px";
    csr.style.top=loc.y-10+"px";
})
gsap.to(".nav",{
    backgroundColor:"rgba(255,255,255,0.7)",
    height:95,
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


// End Kishan

// Rixit Code

// End Rixit 



// Renish Code

// End Renish

//kevin
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('nav ul li a');
let currentSection = '';
window.addEventListener('scroll', () => {
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    menuItems.forEach(item => {     
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + currentSection) {
            item.classList.add('active');
        }
    });
});

// aniamtion

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
        html:" <p class='ptext font-f1 text-[]'>MASALA ZING FOR YOU <br/><b>TEA TIME CONVERSITION</b></p></div> "
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


// .style.content="url('./assets/NewProducts/')"
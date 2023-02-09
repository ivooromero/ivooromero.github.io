new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet:{smooth:true},
    smartphone:{smooth:true},
});
const quesomos = document.getElementById('quesomos')
const quesomosTXT = document.getElementById("txt1")
const queSomosCartas = document.getElementById('qwrd')
const cargarImagen = (entrada, observador) =>{
    entrada.forEach((entrada)=>{
        if(entrada.isIntersecting){
            quesomosTXT.classList.remove("queSomosW")
            quesomosTXT.classList.add("animacionQueSomos")
        }
    })
}
const cargarHorizontalSection = (entrada, observador) =>{
    entrada.forEach((entrada)=>{
        if(entrada.isIntersecting){
            queSomosCartas.classList.remove("queSomosCartas")
            queSomosCartas.classList.add("queSomosCartasAnimado")
        }
    })
}

const observador1 = new IntersectionObserver(cargarHorizontalSection,{
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    })


const observador2 = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
})
observador2.observe(quesomos)

observador1.observe(queSomosCartas)



/*OJOS ALIEN*/

document.addEventListener('mousemove', (e) =>{
    const mouseX = e.clientX
    const mouseY = e.clientY

    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect()
    const anchorX = rekt.left + rekt.width / 2
    const anchorY = rekt.top + rekt.height / 2

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye =>{
        eye.style.transform = `rotate(${90+ angleDeg}deg)`;
        eye.style.filter = `hue-rotate(${angleDeg}deg)`;
    })

})



function angle (cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI
    return deg
}

const menu = document.querySelector(".menu");

const boton = document.getElementById("botons")


function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
    } else {
      menu.classList.add("showMenu");
    }
  }
boton.addEventListener('click' , toggleMenu)


  
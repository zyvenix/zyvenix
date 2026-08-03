    /*==========================================
        ZYVENIX APP.JS
==========================================*/

/*========================
      PRELOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    }

});


/*========================
      HEADER
=========================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/*========================
      CONTADORES
=========================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*========================
      REVEAL
=========================*/

const reveals=document.querySelectorAll("section");

reveals.forEach(section=>{

section.classList.add("reveal");

});

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

reveals.forEach(section=>{

revealObserver.observe(section);

});

/*==========================================
            FAQ
==========================================*/

const questions=document.querySelectorAll(".faq-question");

questions.forEach(question=>{

    question.addEventListener("click",()=>{

        const active=document.querySelector(".faq-question.active");

        if(active && active!==question){

            active.classList.remove("active");

            active.nextElementSibling.style.maxHeight=null;

        }

        question.classList.toggle("active");

        const answer=question.nextElementSibling;

        if(question.classList.contains("active")){

            answer.style.maxHeight=answer.scrollHeight+"px";

        }else{

            answer.style.maxHeight=null;

        }

    });

});


/*==========================================
            GALERÍA LIGHTBOX
==========================================*/

const galleryImages=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/*==========================================
            BOTÓN SUBIR
==========================================*/

const topButton=document.createElement("div");

topButton.id="topButton";

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==========================================
            VIDEO HERO
==========================================*/

const heroVideo=document.querySelector(".hero-video");

if(heroVideo){

const videoObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

heroVideo.play();

}else{

heroVideo.pause();

}

});

});

videoObserver.observe(heroVideo);

}
/*==========================================
        MENÚ MÓVIL
==========================================*/

const menuBtn=document.getElementById("menuBtn");
const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}


/*==========================================
        PARALLAX HERO
==========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=scroll*0.4+"px";

}

});


/*==========================================
        CURSOR LUMINOSO
==========================================*/

const cursor=document.createElement("div");

cursor.id="cursorGlow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


/*==========================================
        BARRA PROGRESO
==========================================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/*==========================================
        EFECTO ESCRITURA
==========================================*/

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

const text=heroTitle.innerText;

heroTitle.innerText="";

let i=0;

function typing(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,35);

}

}

setTimeout(typing,500);

}


/*==========================================
        SCROLL ACTIVO EN MENÚ
==========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==========================================
        AÑO AUTOMÁTICO FOOTER
==========================================*/

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=`© ${new Date().getFullYear()} ZYVENIX | Todos los derechos reservados.`;

}

const formulario=document.getElementById("diagnosticoForm");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value;
const servicio=document.getElementById("servicio").value;
const descripcion=document.getElementById("descripcion").value;

const mensaje=
`Hola, deseo solicitar un diagnóstico.

👤 Nombre: ${nombre}

🛠 Servicio: ${servicio}

📝 Descripción:
${descripcion}`;

window.open(

`https://wa.me/573045287491?text=${encodeURIComponent(mensaje)}`,

"_blank"

);

});

}

document.getElementById("resultado").textContent = nombre;
/*==========================================
        BLOQUEAR TECLAS DE DESARROLLADOR
==========================================*/
document.addEventListener("keydown", function(e){

    if(e.key === "F12"){
        e.preventDefault();
    }

    if(e.ctrlKey && e.shiftKey && e.key === "I"){
        e.preventDefault();
    }

    if(e.ctrlKey && e.shiftKey && e.key === "J"){
        e.preventDefault();
    }

    if(e.ctrlKey && e.key === "U"){
        e.preventDefault();
    }

});

/*==========================================
        EVITAR ARRASTRAR IMAGENES
==========================================*/
document.querySelectorAll("img").forEach(img=>{

    img.draggable=false;

});


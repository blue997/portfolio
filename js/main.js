const menuBtn=document.querySelector('.fa-bars')
const showMenu=document.querySelector('.gnb')

menuBtn.addEventListener('click',()=>{
  showMenu.classList.toggle('active')
})



const toTop=document.querySelector('#totop')
/* window.addEventListener('scroll',_.throttle(()=>{
  if(window.scrollY>500) {
    gsap.to(toTop,.7,{
      x:0, opacity:1
    })
  } else {
    gsap.to(toTop,.7,{
      x:100
    })
  }
},300)) */

toTop.addEventListener('click',()=>{
  gsap.to(window,.7,{
    scrollTo:0
  })
})


const spyEls=document.querySelectorAll(".scroll-spy")
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement:spyEl,
    triggerHook:.8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
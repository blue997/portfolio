var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toTop=document.querySelector('#totop')

toTop.addEventListener('click',()=>{
  gsap.to(window,.7,{
    scrollTo:0
  })
})


const spyEls=document.querySelectorAll(".scroll-spy")
spyEls.forEach(function(spyEl){
  // Screen() 메서드를 통해 여러 객체들의 변화에 대한 검사
  // addTo() 메서드를 사용하기 위한 옵션 정의
  new ScrollMagic
  .Scene({
    // 보여질 여부를 검사하는 요소 지정
    triggerElement:spyEl,
    // 화면의 높이를 0에서 1이라 보고 0.8 위치에 적용
    // 기능이 걸려 있는 부분(실행위치)
    triggerHook:.8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
})
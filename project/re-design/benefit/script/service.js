// header
const my = document.querySelector('.inform')
const menu = document.querySelector('.menu_inform')
const my_img = document.querySelector('.inform_g')
const menu_img = document.querySelector('.menu')
console.log(my,menu,my_img,menu_img)

// 내용 숨기기
my.style.display = 'none'
menu.style.display = 'none'

// 얼굴 이모티콘
// 1. 마우스 올리면 나타남
my_img.addEventListener('mouseover',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    my.style.display = 'inline-block'
})
// 2. 마우스 내리면 사라짐
my_img.addEventListener('mouseout',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    my.style.display = 'none'
})

//메뉴
// 1. 마우스 올리면 나타남
menu_img.addEventListener('mouseover',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    menu.style.display = 'inline-block'
})
// 2. 마우스 내리면 사라짐
menu_img.addEventListener('mouseout',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    menu.style.display = 'none'
})

//기본 swiper 문법
//const 변수명 = new Swiper('적용대상',{속성:값})

//적용대상은 swiper의 가장 큰 부모 대상(swiper-wrapper의 부모)
let slide = new Swiper('.bnr_g',{
    effect:'fade',
    grabCursor:true,
    autoplay:{delay:2500,}
  }) /* 제일 기본 형태 */
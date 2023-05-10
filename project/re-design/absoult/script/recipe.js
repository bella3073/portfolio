const bar = document.querySelector('.menu')
const menu = document.querySelector('.menu_a')
const best = document.querySelector('.best')
const after = document.querySelectorAll('.img > span')

const coc = document.querySelectorAll('.coc')
const coc_h2 = document.querySelectorAll('.coc > h2')

const header = document.querySelector('header')

// header
// bar에 마우스 올렸을 때 menu_a 나타남
menu.style.display = 'none'
bar.addEventListener('mouseover',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    menu.style.display = 'inline-flex'
})
// bar에 마우스 내리면 menu_a 사라짐
bar.addEventListener('mouseout',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    menu.style.display = 'none'
})

//칵테일 부분
// 칵테일에 마우스 올리면 칵테일명 컬러가 바뀜
for(let i=0; i<coc_h2.length; i++){
    coc[i].addEventListener('mouseover',()=>{
        // console.log(coc[i]) 확인완료
        coc_h2[i].classList.add('h2_color')
    })
    coc[i].addEventListener('mouseout',()=>{
        // console.log(coc[i]) 확인완료
        coc_h2[i].classList.remove('h2_color')
    })
}

// swiper
const swiper1 = new Swiper('.swiper',{
    //방향설정 direction:'horizontal','vertical'
    direction:'horizontal',
    slidesPerView : '3',
    autoplay:{delay:2000},
    loop:false, /* 태그 사용시 맨 마지막 -> 첫번째로 돌아가는 모습이 더 자연스러워짐 */
    loopAdditionalSlides : 1,
    breakpoints: {
        // 화면의 넓이가 400px 이상일 때
        0: {
            slidesPerView: 1
        },
        800 : {
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 3
        }
    }
})

//이달의 음료 부분 swiper
const swiper2 = new Swiper('.event_concept > .swiper',{
    //방향설정 direction:'horizontal','vertical'
    direction:'horizontal',
    slidesPerView : '1',
    autoplay:{delay:3000},
    loop:false, /* 태그 사용시 맨 마지막 -> 첫번째로 돌아가는 모습이 더 자연스러워짐 */
    loopAdditionalSlides : 1,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2,
            watchOverflow:false
        },
        1024: {
            slidesPerView: 1
        }
    }
})
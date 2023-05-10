const coc = document.querySelector('.cock')
const after = document.querySelectorAll('.swiper-slide >.img > span')

console.log(coc,after)

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
        // 0: {
        //     slidesPerView: 1
        // },
        // // 화면의 넓이가 550px 이상일 때
        0: {
            slidesPerView: 1
        },
        600 : {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        }
    }
})

//칵테일 부분
// 스크롤 내리면 상품이 나타남
window.addEventListener('scroll',()=>{
    // console.log(coc.getBoundingClientRect().top)
    if(coc.getBoundingClientRect().top < 400){
        for(let i=0; i<after.length; i++)
        after[i].classList.add('after_e')
        // 스크롤 올리면 상품이 가려짐
        window.addEventListener('scroll',()=>{
            // console.log(coc.getBoundingClientRect().top)
            if(coc.getBoundingClientRect().top > 1000){
                for(let i=0; i<after.length; i++)
                after[i].classList.remove('after_e')
            }
        })
    }
})
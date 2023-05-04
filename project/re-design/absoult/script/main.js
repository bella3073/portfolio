const bar = document.querySelector('.menu')
const menu = document.querySelector('.menu_a')
const best = document.querySelector('.best')
const after = document.querySelectorAll('.img > span')
console.log(bar,menu)
console.log(best,after)

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

// after.style.display = 'none'
// best
// 스크롤 내리면 상품이 나타남
window.addEventListener('scroll',()=>{
    console.log(best.getBoundingClientRect().top)
    if(best.getBoundingClientRect().top < 500){
        for(let i=0; i<after.length; i++)
        after[i].classList.add('after_e')
        // 스크롤 올리면 상품이 가려짐
        window.addEventListener('scroll',()=>{
            console.log(best.getBoundingClientRect().top)
            if(best.getBoundingClientRect().top > 1000){
                for(let i=0; i<after.length; i++)
                after[i].classList.remove('after_e')
            }
        })
    }
})

// swiper
const swiper1 = new Swiper('.swiper',{
    //방향설정 direction:'horizontal','vertical'
    direction:'horizontal',
    slidesPerView : '4',
    autoplay:{delay:2000},
    loop:false, /* 태그 사용시 맨 마지막 -> 첫번째로 돌아가는 모습이 더 자연스러워짐 */
    loopAdditionalSlides : 1
})
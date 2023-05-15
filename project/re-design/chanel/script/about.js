const text = document.querySelector('.main03 h2')
const main03 = document.querySelector('.main03')
console.log(text,main03)

const text_bk = document.querySelectorAll('.right > a')
const text_img = document.querySelector('.his_img > img')
console.log(text_img)

const f_text = document.querySelectorAll('.main07 > .text a')
const fund = document.querySelector('.fund')
const foundation = document.querySelector('.foundation')
console.log(f_text,fund,foundation)

//main
//swiper
const swiper1 = new Swiper('.swiper',{
    direction:'horizontal',
    slidesPerView : '5',
    loopAdditionalSlides : 1,
    grabCursor: true,
    autoplay:{
        delay:2000,
        desableOnInteraction:true
        // true일 경우 마우스 올라가면 일시정지
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2
        },
        900 : {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        },
        1550: {
            slidesPerView: 5
        }
    }
})


//main03
//스크롤을 내리면 텍스트 크기가 커짐
window.addEventListener('scroll',()=>{
    // console.log(main03.getBoundingClientRect().top)
    if(main03.getBoundingClientRect().top < 500){
        text.classList.add('text_ani')
    }
})

//main05
//right 부분 클릭하면 active class 적용됨

for(let i=0; i<text_bk.length; i++){
    text_bk[i].addEventListener('click',(e)=>{
        e.preventDefault()/* a tag 기본 기능 억제 */
        // console.log(this) 확인완료
        for(let j of text_bk){
            j.style.background = '#fff'
            j.style.color = '#000'
        }
        text_bk[i].style.background = '#000'
        text_bk[i].style.color = '#fff'
    })
}

//text 부분 클릭 시 해당하는 이미지가 이미지 부분에 나타남
text_bk.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()/* a tag 기본 기능 억제 */
        // console.log(index) 확인
        text_img.src = `./images/about/history0${index+1}.webp`
    })
})

//main07
//클릭하는 부분에 active2 적용됨
for(let i=0; i<f_text.length; i++){
    f_text[i].addEventListener('click',(e)=>{
        e.preventDefault()/* a tag 기본 기능 억제 */
        // console.log(this) 확인완료
        for(let j of f_text){
            j.style.background = '#fff'
            j.style.color = '#000'
        }
        f_text[i].style.background = '#000'
        f_text[i].style.color = '#fff'
    })
}
//안 보이는 부분 가림
foundation.style.display = 'none'

f_text[1].addEventListener('click',(e)=>{
    e.preventDefault() /* a tag 기본 기능 막기 */
    foundation.style.display = 'block'
    fund.style.display = 'none'

})
f_text[0].addEventListener('click',(e)=>{
    e.preventDefault() /* a tag 기본 기능 막기 */
    foundation.style.display = 'none'
    fund.style.display = 'block'

})
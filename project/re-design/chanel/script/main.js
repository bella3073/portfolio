const my = document.querySelector('.my > a')/* 사람 이모티콘 */
const my_d = document.querySelector('.my_d')/* 사람 이모티콘 디테일 내용 */
console.log(my,my_d)

//header
//1. my_d 부분 보이지 않음
my_d.style.display = 'none'
//2. my 이모티콘에 마우스 올리면 my_d 나타남
my.addEventListener('mouseover',()=>{
    my_d.style.display = 'inline-block'
    //3. my_d 에서 마우스를 내리면 사라짐
    my_d.addEventListener('mouseover',()=>{
        my_d.style.display = 'inline-block'
        my_d.addEventListener('mouseout',()=>{
            my_d.style.display = 'none'
        })
    })
})

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
    loop:true /* 태그 사용시 맨 마지막 -> 첫번째로 돌아가는 모습이 더 자연스러워짐 */
}) 
const chanel = document.querySelector('.menu > a')
const chanel_d = document.querySelector('.menu .menu_d')
const main = document.querySelector('main')


const my = document.querySelector('.my > a')/* 사람 이모티콘 */
const my_d = document.querySelector('.my_d')/* 사람 이모티콘 디테일 내용 */
console.log(my,my_d)
console.log(chanel,chanel_d,main)


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

/* 메뉴 부분 */
//1. 처음에는 상세 메뉴 보이지 않음
chanel_d.style.display = 'none'
//2. 샤넬 로고 클릭하면 chanel_d 나타남
chanel.addEventListener('click',(e)=>{
    e.preventDefault() /* a tag 기본 기능 억제 */
    // console.log(this) 기능확인
    chanel_d.style.display = 'inline-block'
    //3. main의 아무곳이나 클릭하면 사라짐
    main.addEventListener('click',(e)=>{
        e.preventDefault()/* a tag가 걸려있는 곳을 클릭할 수도 있으니 미리 기능억제 */
        chanel_d.style.display = 'none'
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
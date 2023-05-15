<style>
header {
position: fixed;
top: 0;
z-index: 999;
width: 100%;
}
header nav {
display: flex;
flex-flow: row nowrap;
justify-content: end;
align-items: center;
padding: 20px 0;
width: 97.5%;
/* 이모티콘 부분 */
/* 장바구니 */
}
header nav > a {
display: inline-block;
font-size: 1.2rem;
text-transform: capitalize;
margin-right: 20px;
position: relative;
z-index: 999;
transition: all 0.5s;
}
header nav > a span {
display: inline-block;
content: "";
background: rgba(0, 0, 0, 0.7);
width: 0;
height: 20px;
position: absolute;
top: 0;
left: 0;
transition: all 0.5s;
z-index: -1;
}
header nav > a:nth-child(4) {
margin-right: 10px;
}
header nav > a:hover {
color: #fff;
}
header nav > a:hover span {
width: 100%;
}
header nav .menu { /* 샤넬 로고 메뉴 */
display: none;
position: absolute;
top: 20px;
left: 20px;
}
header nav .menu > a {
display: inline-block;
width: 30px;
margin-right: 5px;
}
header nav .menu > a img {
width: 100%;
}
header nav .menu .menu_d { /* 주문조회/위시리스트 부분 */
display: inline-block;
text-align: left;
width: 200px;
height: 100vh;
position: absolute;
top: -20px;
left: -20px;
background: #fff;
padding: 10px;
border: 1px solid #000;
}
header nav .menu .menu_d > a {
display: inline-block;
position: relative;
text-transform: capitalize;
padding: 8px 5px;
/* hover 기능을 주기위한 준비 */
}
header nav .menu .menu_d > a span {
display: inline-block;
content: "";
background: rgba(0, 0, 0, 0.7);
width: 0;
height: 15px;
position: absolute;
top: 3px;
left: 0;
border-radius: 50%;
transition: all 0.3s;
}
header nav .menu .menu_d > a:nth-child(1) {
margin-top: 20px;
}
header nav .menu .menu_d > a:hover span {
width: 15px;
}
header nav .my { /* 사람 */
position: relative;
}
header nav .my > a {
display: inline-block;
width: 30px;
margin-right: 15px;
}
header nav .my > a img {
width: 100%;
}
header nav .my .my_d { /* 주문조회/위시리스트 부분 */
display: inline-block;
text-align: center;
width: 110px;
position: absolute;
top: 130px;
left: 50%;
transform: translate(-50%, -50%);
background: #fff;
padding: 10px;
border: 1px solid #000;
}
header nav .my .my_d > a {
display: inline-block;
position: relative;
text-transform: capitalize;
padding: 8px 5px;
/* hover 기능을 주기위한 준비 */
}
header nav .my .my_d > a span {
display: inline-block;
content: "";
background: rgba(0, 0, 0, 0.7);
width: 0;
height: 15px;
position: absolute;
top: 3px;
left: 0;
border-radius: 50%;
transition: all 0.3s;
}
header nav .my .my_d > a:hover span {
width: 15px;
}
header nav .bag {
margin: 0;
width: 30px;
}
header nav .bag img {
width: 100%;
}
@media screen and (max-width: 850px) {
header nav > a {
font-size: 1rem;
}
}
@media screen and (max-width: 650px) {
header nav > a {
display: none;
}
header nav > a:last-child {
display: inline-block;
}
header nav .menu {
display: inline-block;
}
}
</style>
<header>
    <nav>
        <a href="./aboutus.html">about us<span></span></a>
        <a href="./couture.html">haute couture<span></span></a>
        <a href="./product.html">product<span></span></a>
        <div class="menu">
            <a href="#"><img src="./images/menu.png" alt="메뉴"></a>
            <div class="menu_d">
                <a href="./aboutus.html">about us<span></span></a>
                <a href="./couture.html">haute couture<span></span></a>
                <a href="./product.html">product<span></span></a>
            </div>
        </div>
        <div class="my">
            <a href="#"><img src="./images/user.png" alt="마이페이지"></a>
            <div class="my_d">
                <a href="#">login<span></span></a>
                <a href="#">join<span></span></a>
                <a href="#">주문조회<span></span></a>
                <a href="#">위시리스트<span></span></a>
                <a href="#">q&a<span></span></a>
            </div>
        </div>
        <a href="#" class="bag"><img src="./images/shopping-bag.png" alt="장바구니"></a>
    </nav>
</header>
<script>
const my = document.querySelector('.my > a')/* 사람 이모티콘 */
const my_d = document.querySelector('.my_d')/* 사람 이모티콘 디테일 내용 */
console.log(my,my_d)

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
</script>
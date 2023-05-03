<style>
header .nav_g {
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px 30px;
position: fixed;
top: 0;
left: 50%;
z-index: 999;
transform: translate(-50%, 0);
/* logo */
}
header .nav_g nav a {
display: inline-block;
text-align: center;
width: 90px;
line-height: 2;
font-weight: 700;
color: #979ed5;
background: #fff;
border-radius: 3px;
}
header .nav_g nav a:hover {
background: rgba(246, 83, 125, 0.3);
border-radius: 3px;
}
header .nav_g .h_right {
display: flex;
flex-flow: row nowrap;
justify-content: right;
align-items: center;
width: 360px;
}
header .nav_g .h_right select {
border: none;
outline: none;
padding: 2px 5px;
background: #fff;
font-weight: 700;
color: #979ed5;
border-radius: 3px;
}
header .nav_g .h_right select option {
color: #000;
}
header .nav_g .h_right > .dark {
padding: 10px;
margin-left: 7px;
color: #979ed5;
font-weight: 700;
text-transform: uppercase;
}
header .nav_g .h_right .dark:hover {
background: rgba(0, 0, 0, 0.3);
border-radius: 3px;
color: #000;
}
header .nav_g .h_right .inform_g {
padding: 15px 20px;
position: relative;
}
header .nav_g .h_right .inform_g a {
display: inline-block;
width: 25px;
}
header .nav_g .h_right .inform_g a img {
width: 100%;
}
header .nav_g .h_right .inform_g .inform {
background: rgba(246, 83, 125, 0.3);
padding: 6px 3px;
display: flex;
flex-flow: column nowrap;
justify-content: center;
position: absolute;
top: 52px;
left: 50%;
transform: translate(-50%, 0);
border-radius: 3px;
}
header .nav_g .h_right .inform_g .inform a {
display: inline-block;
width: 100px;
text-align: center;
font-weight: 700;
padding: 8px 0;
margin-bottom: 4px;
color: #fff;
}
header .nav_g .h_right .inform_g .inform a:last-child {
margin-bottom: 0;
}
header .nav_g .h_right .inform_g .inform a:hover {
color: #ff3b6f;
}
header .nav_g .h_right .menu {
position: relative;
padding: 15px;
}
header .nav_g .h_right .menu a {
display: flex;
flex-flow: column nowrap;
}
header .nav_g .h_right .menu a span {
display: inline-block;
content: "";
width: 25px;
height: 4px;
background: #979ed5;
margin-bottom: 4px;
border-radius: 3px;
}
header .nav_g .h_right .menu a span:last-child {
margin: 0;
}
header .nav_g .h_right .menu .menu_inform {
background: rgba(246, 83, 125, 0.3);
padding: 6px 3px;
display: flex;
flex-flow: column nowrap;
justify-content: center;
position: absolute;
top: 52px;
left: 50%;
transform: translate(-50%, 0);
border-radius: 3px;
}
header .nav_g .h_right .menu .menu_inform > a {
display: inline-block;
width: 100px;
text-align: center;
font-weight: 700;
padding: 8px 0;
margin-bottom: 4px;
color: #fff;
text-transform: uppercase;
}
header .nav_g .h_right .menu .menu_inform > .dark {
display: none;
}
header .nav_g .h_right .menu .menu_inform > a:hover {
color: #ff3b6f;
}
header .nav_g .h_right .menu .menu_inform p {
text-align: center;
}
header .nav_g .h_right .menu .menu_inform p select {
display: none;
}

//animation
@keyframes text {
    0% {transform:skew(-10deg); letter-spacing:0;}
    100% {transform:skew(10deg); letter-spacing:0.05em;}
}


// 반응형
@media screen and (min-width:1101px) {
    .nav_g {
        .h_right {
            .menu {display:none;}
        }
    }
}
@media screen and (max-width:1100px) {
    .nav_g {
        nav {display:none;}
    }
}
@media screen and (max-width:620px) {
    header {
        .nav_g {
            .h_right {
                > select {display:none;}
                > .color {display:none;}
                .menu {
                    .menu_inform {
                        p {select {display:inline-block;}}
                        > .color {display:inline-block;}
                    }
                }
            }
        }
    }
}
</style>
<header>
    <div class="nav_g">
        <nav>
            <a href="#">베스트셀러</a>
            <a href="#">제품보기</a>
            <a href="#">매장찾기</a>
            <a href="./service.html">서비스예약</a>
        </nav>
        <h1><a href="./index.html"><img src="./images/logo.svg" alt="베네피트 홈페이지"></a></h1>
        <div class="h_right">
            <select name="LAN">
                <option value="ko">KO</option>
                <option value="en">EN</option>
            </select>
            <a href="./service_black.html" class="dark">Dark</a>
            <div class="inform_g">
                <a href="#"><img src="./images/black/icon_p.png" alt="내 정보"></a>
                <div class="inform">
                    <a href="#">로그인</a>
                    <a href="#">회원가입</a>
                    <a href="#">마이페이지</a>
                </div>
            </div>
            <div class="menu">
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div class="menu_inform">
                    <a href="#">베스트셀러</a>
                    <a href="#">제품보기</a>
                    <a href="#">매장찾기</a>
                    <a href="./service.html">서비스예약</a>
                    <a href="./service_black.html" class="dark">Dark</a>
                    <p>
                        <select name="LAN">
                            <option value="ko">KO</option>
                            <option value="en">EN</option>
                        </select>
                    </p>
                </div>
            </div>
        </div>
    </div>        
</header>
<script>
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
</script>
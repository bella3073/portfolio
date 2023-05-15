<style>
footer {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
z-index: -1;
text-align: center;
background-color: #000;
padding: 250px 0 130px;
}
footer h1 {
color: #fff;
text-transform: uppercase;
font-size: 3rem;
font-family: "Noto Sans JP", sans-serif;
margin-bottom: 70px;
}
footer .f_g {
width: 1000px;
margin: 0 auto;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: end;
}
footer .f_g video {
width: 60%;
}
footer .f_g .f_right {
text-align: left;
padding: 10px 0;
}
footer .f_g .f_right .sns {
display: flex;
flex-flow: row nowrap;
}
footer .f_g .f_right .sns a {
width: 18px;
display: inline-flex;
margin-right: 8px;
}
footer .f_g .f_right .sns a img {
width: 100%;
}
footer .f_g .f_right .sns a:nth-child(3) {
position: relative;
top: 4px;
}
footer .f_g .f_right .sns a:hover {
-webkit-animation: sns 0.5s ease alternate both;
        animation: sns 0.5s ease alternate both;
}
footer .f_g .f_right .link a {
display: inline-block;
color: #fff;
line-height: 1.5;
font-size: 0.9rem;
margin: 10px 0;
transition: all 0.5s;
position: relative;
}
footer .f_g .f_right .link a span {
display: inline-block;
content: "";
background: rgba(225, 225, 225, 0.3);
width: 0;
height: 20px;
position: absolute;
top: 0;
left: 0;
transition: all 0.5s;
z-index: -1;
}
footer .f_g .f_right .link a:hover span {
width: 85%;
}
footer .f_g .f_right .link a:nth-child(3):hover span {
width: 100%;
}
footer .f_g .f_right .link a::after {
display: inline-block;
content: "";
width: 1px;
height: 15px;
background: #fff;
margin: 0 5px 0 10px;
position: relative;
top: 2px;
}
footer .f_g .f_right .link a:last-child::after {
display: none;
}
footer .f_g .f_right > p {
color: #fff;
line-height: 1.5;
font-size: 0.85rem;
font-weight: 100;
text-transform: capitalize;
}
@media screen and (max-width: 1150px) {
    footer {
    padding: 250px 0 50px;
    }
    footer .f_g {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    }
    footer .f_g video {
    margin-bottom: 50px;
    }
    footer .f_g .f_right {
    text-align: center;
    }
    footer .f_g .f_right .sns {
    align-items: center;
    justify-content: center;
    }
}
@media screen and (max-width: 650px) {
    footer {
    padding-top: 150px;
    }
    footer h1 {
    font-size: 2rem;
    }
}
</style>
<footer>
    <h1>chanel</h1>
    <div class="f_g">
        <video src="./video/fashion_show.mp4" autoplay muted loop></video>
        <div class="f_right">
            <div class="sns">
                <a href="#"><img src="./images/instagram.png" alt="인스타그램"></a>
                <a href="#"><img src="./images/facebook.png" alt="페이스북"></a>
                <a href="#"><img src="./images/youtube.png" alt="유튜브"></a>
                <a href="#"><img src="./images/linkedin.png" alt="linked in"></a>
                <a href="#"><img src="./images/kakao-talk.png" alt="카카오톡 채널"></a>
            </div>
            <div class="link">
                <a href="#">샤넬 하우스<span></span></a>
                <a href="#">부티크 서비스<span></span></a>
                <a href="#">온라인 서비스<span></span></a>
            </div>
            <p>&copy; 2023 chanel all rights reserved.<br>designed by min-design.</p>
        </div>
    </div>
</footer>
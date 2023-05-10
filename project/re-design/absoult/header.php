<style>
    html {
  scroll-behavior: smooth;
}

header {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 990;
  transform: translate(-50%, 0);
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding: 20px 0;
}
header h1 {
  width: 300px;
}
header h1 a img {
  width: 100%;
}
header nav a {
  display: inline-block;
  color: #000;
  font-size: 1.1rem;
  margin-right: 10px;
  padding: 10px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
header nav a:last-child {
  margin-right: 0;
}
header nav a::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: #000;
  position: relative;
  bottom: -10px;
  transform: scaleX(0);
  transition: all 0.3s;
}
header nav a:hover::after {
  transform: scaleX(1);
}
header .nav_right {
  display: flex;
  align-items: center;
}
header .nav_right .search {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 300px; /* 로고 너비와 동일한 너비를 주어 nav가 중앙에 위치하도록 설정 */
}
header .nav_right .search input {
  outline: none;
  border: none;
  border-bottom: 2px solid #888;
  color: #888;
  background: none;
  margin-right: 20px;
  padding: 5px;
  width: 150px;
}
header .nav_right .search input::-moz-placeholder {
  color: #888;
}
header .nav_right .search input::placeholder {
  color: #888;
}
header .nav_right .search textarea::-moz-placeholder {
  color: #888;
}
header .nav_right .search textarea::placeholder {
  color: #888;
}
header .nav_right .search textarea::-webkit-input-placeholder {
  color: #888;
}
header .nav_right .search textarea:-ms-input-placeholder {
  color: #888;
}
header .nav_right .search button {
  width: 30px;
}
header .nav_right .search button img {
  width: 100%;
}
header .nav_right .menu {
  display: none;
  position: relative;
}
header .nav_right .menu a {
  display: inline-flex;
  flex-flow: column;
  padding: 20px 0 20px 15px;
}
header .nav_right .menu a span {
  display: inline-block;
  content: "";
  height: 5px;
  width: 30px;
  background-color: #000;
  border-radius: 5px;
  margin-bottom: 4px;
}
header .nav_right .menu a span:last-child {
  margin-bottom: 0;
}
header .nav_right .menu .menu_a {
  display: flex;
  flex-flow: column;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 0;
  position: absolute;
  bottom: -255px;
  left: 50%;
  width: 150px;
  transform: translate(-50%, -50%);
}
header .nav_right .menu .menu_a a {
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 10px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}
header .nav_right .menu .menu_a a:last-child {
  margin-right: 0;
}
header .nav_right .menu .menu_a a::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #fff;
  position: relative;
  bottom: -10px;
  transform: scaleX(0);
  transition: all 0.3s;
}
header .nav_right .menu .menu_a a:hover::after {
  transform: scaleX(1);
}
@media screen and (max-width: 1140px) {
  header {
    width: 88%;
  }
  header nav {
    display: none;
  }
  header .nav_right .menu {
    display: flex;
  }
}
@media screen and (max-width: 550px) {
  header h1 a {
    display: inline-block;
    width: 200px;
  }
  header h1 a img {
    width: 100%;
  }
  header .nav_right .search {
    width: 60px;
  }
  header .nav_right .search input {
    display: none;
  }
}
</style>
<header>
    <h1><a href="./index.html"><img src="./images/logo_design.png" alt="앱솔루트 보드카 홈페이지"></a></h1>
    <nav>
        <a href="#">best</a>
        <a href="#">product</a>
        <a href="./recipe.html">cocktail recipe</a>
        <a href="#">absolut story</a>
    </nav>
    <div class="nav_right">
        <div class="search">
            <input type="search" placeholder="검색"  onfocus="this.placeholder = ''">
            <button type="button"><img src="./images/search_bk.png" alt="검색하기"></button>
        </div>
        <div class="menu">
            <a href="#" class="bar">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div class="menu_a">
                <a href="#">best</a>
                <a href="./detail.html">product</a>
                <a href="./recipe.html">recipe</a>
                <a href="#">absolut story</a>
            </div>
        </div>
    </div>
</header>
<script>
    const bar = document.querySelector('.menu')
    const menu = document.querySelector('.menu_a')
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
</script>
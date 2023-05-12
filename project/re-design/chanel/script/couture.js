//news
const text = document.querySelector('.news01 > .news_text')
const news = document.querySelector('.news')
const news_img = document.querySelector('.news_img')
const news2_text1 = document.querySelector('.text1')
const news2_text2 = document.querySelector('.text2')
const news2_text3 = document.querySelector('.text3')
const news04 = document.querySelector('.news04')
const span_01 = document.querySelector('.news04 .text span:nth-child(1)')
const span_02 = document.querySelector('.news04 .text span:nth-child(2)')
console.log(text,news,news_img,news2_text1,news2_text2)
console.log(news04,span_01,span_02)


// 변하는 텍스트 효과
const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"This",
	"S/S",
	"Season's",
	"Haute Couture"
];

// Controls the speed of morphing.
const morphTime = 1.5;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();


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



//news
/* 01 */
window.addEventListener('scroll',()=>{
	// console.log(news.getBoundingClientRect().top)
	/* 스크롤 내리면 class 적용됨 */
	if(news.getBoundingClientRect().top < 530){
		text.classList.add('news01_04')
		news_img.classList.add('right_to_left')
	}
	/* 스크롤 올리면 class 제거됨 */
	if(news.getBoundingClientRect().top > 1000){
		text.classList.remove('news01_04')
		news_img.classList.remove('right_to_left')
	}
})
/* 02 */
window.addEventListener('scroll',()=>{
	// console.log(news.getBoundingClientRect().top)
	if(news.getBoundingClientRect().top < -200){
		news2_text1.classList.add('left_to_right')
		news2_text2.classList.add('right_to_left2')
		news2_text3.classList.add('text_opacity')
	}
	/* 스크롤 올리면 class 제거됨 */
	if(news.getBoundingClientRect().top > 200){
		news2_text1.classList.remove('left_to_right')
		news2_text2.classList.remove('right_to_left2')
		news2_text3.classList.remove('text_opacity')
	}
})

/* 04 */
window.addEventListener('scroll',()=>{
	// console.log(news04.getBoundingClientRect().top)
	if(news04.getBoundingClientRect().top < 360){
		span_01.classList.add('right_to_left2')
		span_02.classList.add('top_to_bottom')
	}	/* 스크롤 올리면 class 제거됨 */
	if(news.getBoundingClientRect().top > 360){
		span_01.classList.remove('right_to_left2')
		span_02.classList.remove('top_to_bottom')
	}
})
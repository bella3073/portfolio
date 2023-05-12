// mouse
const pen = document.querySelector('.pen')

window.addEventListener('mousemove',(e)=>{
    // console.log(e) 작동확인
    pen.style.left = `${e.clientX}px`
    pen.style.top = `${e.clientY}px`
})

// main01 post text
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = ["Look at my Portfolio"];
    
    function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
    document.querySelector("#look").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

    setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
        }, 100);
    }
    else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 1300);
        }
        else if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
            StartTextAnimation(i + 1);
            });
        }   
    }
    StartTextAnimation(0);
});

// main03 book
const book = document.querySelector('.wrap3')
const key = document.querySelector('.main02_img a')
const book_key = document.querySelector('.wrap3_img .key')
const key2 = document.querySelector('.main02_img > a > img')
const key2_text = document.querySelector('.main02_img > p')
console.log(book,key,book_key,key2,key2_text)

//1. main03 open_book_g 가리기
book.style.display = 'none'

//2.key img에 마우스 올리면 hand img로 변경됨
key.addEventListener('mouseover',()=>{
    // console.log(this) 확인완료
    pen.classList.add('hand')
    
    //4.key img 클릭 시, book 나타남
    key.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(this)
        book.style.display = 'block'
        key2.style.display = 'none'
        key2_text.style.display = 'none'
    })
})
//3.key img에서 마우스를 아웃시키면 key img로 돌아옴
key.addEventListener('mouseout',()=>{
    // console.log(this) 확인완료
    pen.classList.remove('hand')
})


// 책 위에 있는 열쇠 부분

//5.book key에 마우스 올리면 hand img로 변경
book_key.addEventListener('mouseover',()=>{
    // console.log(this) 확인완료
    pen.classList.add('hand')

    //6. open book key 클릭 시, book 사라짐
    book_key.addEventListener('click',(e)=>{
        e.preventDefault()
        // console.log(this) 확인완료
        book.style.display = 'none'
        key2.style.display = 'block'
        key2_text.style.display = 'block'
    })
})
//7.book key에서 마우스를 아웃시키면 key img로 돌아옴
book_key.addEventListener('mouseout',()=>{
    // console.log(this) 확인완료
    pen.classList.remove('hand')
})

//04.main re-design 부분
const figma_view = document.querySelectorAll('.figma_view')
const proposal_view = document.querySelectorAll('.proposal_view')
const close = document.querySelectorAll('.close')
console.log(close,proposal_view,figma_view)

for(let i=0; i<proposal_view.length; i++){
    proposal_view[i].style.display = 'none'
}

//figma 클릭하면 proposal_view 나타남

for(let i=0; i<proposal_view.length; i++){
    figma_view[i].addEventListener('click',(e)=>{
        e.preventDefault()/* a tag 기본 기능 막기 */
        // console.log(this) 작동확인
        for(let j=0; j<proposal_view.length; j++){
            proposal_view[j].style.display = 'inline-block'
        }
    })
}

//닫기 버튼 누르면 화면이 사라짐
for(let i=0; i<proposal_view.length; i++){
    close[i].addEventListener('click',(e)=>{
        e.preventDefault()/* a tag 기본 기능 막기 */
        for(let j=0; j<proposal_view.length; j++){
            proposal_view[j].style.display = 'none'
        }
    })
}

// 리디자인 화면 왼쪽 텍스트 부분
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = ["Click this img!"];
    
    function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
    document.querySelector(".Wireframe").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

    setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
        }, 100);
    }
    else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000);
    }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 1300);
        }
        else if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
            StartTextAnimation(i + 1);
            });
        }   
    }
    StartTextAnimation(0);
});

//re-design
const benefit = document.querySelector('.benefit')
const absolut = document.querySelector('.absolut')
const chanel = document.querySelector('.chanel')
const benefit_btn = document.querySelector('.benefit_btn')
const absolut_btn = document.querySelector('.absolut_btn')
const chanel_btn = document.querySelector('.chanel_btn')
console.log(absolut,benefit_btn,absolut_btn,chanel_btn)

// 첫 화면에서 보이지 않을 부분 가리기
absolut.style.display = 'none'
chanel.style.display = 'none'

// 해당버튼 클릭 시, 해당 리디자인이 나타남
benefit_btn.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제어 */
    // console.log(this) 확인완료
    absolut.style.display = 'none'
    benefit.style.display = 'flex'
    chanel.style.display = 'none'
    benefit_btn.classList.add('active')
    absolut_btn.classList.remove('active')
    chanel_btn.classList.remove('active')
})
absolut_btn.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제어 */
    // console.log(this) 확인완료
    absolut.style.display = 'flex'
    benefit.style.display = 'none'
    chanel.style.display = 'none'
    benefit_btn.classList.remove('active')
    absolut_btn.classList.add('active')
    chanel_btn.classList.remove('active')
})
chanel_btn.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제어 */
    // console.log(this) 확인완료
    absolut.style.display = 'none'
    benefit.style.display = 'none'
    chanel.style.display = 'flex'
    benefit_btn.classList.remove('active')
    absolut_btn.classList.remove('active')
    chanel_btn.classList.add('active')
})
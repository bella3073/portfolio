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
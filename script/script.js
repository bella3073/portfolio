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
const book_n_key = document.querySelectorAll('wrap2 > .main02_img')
console.log(book,key,book_key)

//1. main03 open_book_g 가리기
book.style.display = 'none'

//2.key img 클릭 시, book 나타남
key.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(this) 확인완료
    book.style.display = 'block'
})

//3. open book key 클릭 시, book 사라짐
book_key.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(this) 확인완료
    book.style.display = 'none'
})
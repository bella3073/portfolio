const yyyy = document.querySelector('input')
const btn = document.querySelector('.btn')
console.log(yyyy,btn,yyyy.value)
//최대 글자 수 4자리로 지정
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }    
}

//4자리 숫자 미입력시 알람뜨도록 함
btn.addEventListener('click',(e)=>{
    if(yyyy.value.length != 4){
        e.preventDefault()
        window.alert('태어난 연도를 입력해주세요.')
        //4자리 숫자 입력 후 버튼 클릭 시 메인페이지로 넘어감
    }else if(yyyy.value.length = 4){
        e.unbind()
        console.log(this)
    }
})
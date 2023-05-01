const post = document.querySelector('.send_me')
const send_post = document.querySelector('.event > p > a')
const btn = document.querySelector('.post > button')
const idea = document.querySelector('textarea')
const check_pop = document.querySelector('.Check_popup')
const check_btn = document.querySelector('.Check_popup > button')
console.log(post,send_post,btn,check_pop,check_btn,idea)

post.style.display = 'none';
check_pop.style.display = 'none';

//Send us your ideas 클릭 시, 팝업 나타남
send_post.addEventListener('click',(e)=>{
    e.preventDefault()
    post.style.display = 'inline-block'
    idea.value = ''
})
//send 버튼 클릭 시, 확인 팝업 나타남
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    check_pop.style.display = 'block';
})
//close 버튼 클릭 시, 팝업 모두 닫힘
check_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    post.style.display = 'none';
    check_pop.style.display = 'none';
})
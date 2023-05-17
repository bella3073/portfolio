const refer_text = document.querySelector('.refer_text')
const code_text = document.querySelector('.code_text')
const web_text = document.querySelector('.web_text')
const etc_text = document.querySelector('.etc_text')
const be_text = document.querySelector('.be_text')
console.log(refer_text,code_text,web_text,etc_text,be_text)

/* 게시판 */
const refer = document.querySelector('.refer')
const code = document.querySelector('.code')
const Web = document.querySelector('.Web')
const re_design = document.querySelector('.re_design')
const etc = document.querySelector('.etc')
console.log(refer,code,Web,re_design,etc)

/* 첫 화면에서 안보이는 부분 가리기 */

code.style.display = 'none'
Web.style.display = 'none'
re_design.style.display = 'none'
etc.style.display = 'none'

refer_text.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    refer.style.display = 'inline-block'
    code.style.display = 'none'
    Web.style.display = 'none'
    re_design.style.display = 'none'
    etc.style.display = 'none'
})
code_text.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    refer.style.display = 'none'
    code.style.display = 'inline-block'
    Web.style.display = 'none'
    re_design.style.display = 'none'
    etc.style.display = 'none'
})
web_text.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    refer.style.display = 'none'
    code.style.display = 'none'
    Web.style.display = 'inline-block'
    re_design.style.display = 'none'
    etc.style.display = 'none'
})
etc_text.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    refer.style.display = 'none'
    code.style.display = 'none'
    Web.style.display = 'none'
    re_design.style.display = 'none'
    etc.style.display = 'inline-block'
})
be_text.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    refer.style.display = 'none'
    code.style.display = 'none'
    Web.style.display = 'none'
    re_design.style.display = 'inline-block'
    etc.style.display = 'none'
})
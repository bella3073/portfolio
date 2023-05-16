const sns = document.querySelector('.sns_text')
const bnr = document.querySelector('.bnr_text')
const detail = document.querySelector('.detail_text')
/* 게시판 */
const sns_g = document.querySelector('.sns')
const bnr_g = document.querySelector('.banner')
const detail_g = document.querySelector('.detail')
console.log(sns,bnr,detail)
console.log(sns_g,bnr_g,detail_g)

/* 첫페이지에서 안 보일 부분 가리기 */
sns_g.style.display = 'none'
detail_g.style.display = 'none'

sns.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    sns_g.style.display = "inline-block"
    bnr_g.style.display = 'none'
    detail_g.style.display = 'none'
})
bnr.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    sns_g.style.display = "none"
    bnr_g.style.display = 'inline-block'
    detail_g.style.display = 'none'
})
detail.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 억제 */
    sns_g.style.display = "none"
    bnr_g.style.display = 'none'
    detail_g.style.display = 'inline-block'
})
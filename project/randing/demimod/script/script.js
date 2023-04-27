const hover = document.querySelectorAll('#main02 .img_box a p')
const img_a = document.querySelectorAll('#main02 .img_box a')
const es_img = document.querySelectorAll('#main03 .item_g a')
console.log(hover,img_a,es_img)

img_a.forEach((target,index)=>{
    console.log(target,index)
    hover[index].style.opacity = 0
    target.addEventListener('mouseover',(e)=>{
        e.preventDefault();
        hover[index].style.opacity = 1
    })
    target.addEventListener('mouseout',()=>{
        hover[index].style.opacity = 0
    })
})
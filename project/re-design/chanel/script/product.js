const acc = document.querySelector('.acc')
const fashion = document.querySelector('.fa > a')
const cos = document.querySelector('.cos > a')
const video = document.querySelectorAll('video')
console.log(acc,fashion,cos,video[0])

for(let i=0; i<video.length; i++){
    video[i].style.display = 'none'
}

acc.addEventListener('mouseover',()=>{
    video[0].style.display = 'block'
    acc.addEventListener('mouseout',()=>{
        video[0].style.display = 'none'
    })
})
fashion.addEventListener('mouseover',()=>{
    video[1].style.display = 'block'
    fashion.addEventListener('mouseout',()=>{
        video[1].style.display = 'none'
    })
})
cos.addEventListener('mouseover',()=>{
    video[2].style.display = 'block'
    cos.addEventListener('mouseout',()=>{
        video[2].style.display = 'none'
    })
})
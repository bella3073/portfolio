const tint_color = document.querySelectorAll('.color li a')
const view = document.querySelector('.color_img img')
console.log(tint_color,view)

view.style.display = 'none'

//컬러명 위에 마우스를 올리면
tint_color.forEach((t,i)=>{
    t.addEventListener('mouseover',(e)=>{
        e.preventDefault() //a기능 막기
        // console.log(i)
        view.style.display = 'block'
        view.src = `./images/best/tint_0${i+1}.jpg`
    })
    t.addEventListener('mouseout',(e)=>{
        e.preventDefault() //a기능 막기
        view.style.display = 'none'
    })
})

// tint_color.addEventListener('mouseover',(e)=>{
//     e.preventDefault()
//     console.log(this)
// })
//이미지가 보임
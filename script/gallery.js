$(document).ready(function(){
    var docWidth = $('body').width(),
        $images = $('#imgs'),
        slidesWidth = $images.width();
    
    $(window).on('resize', function(){
    docWidth = $('body').width();
    slidesWidth = $('#imgs').width();
    })
    
    $(document).mousemove(function(e) {
        var mouseX = e.pageX,
          offset = mouseX / docWidth * slidesWidth - mouseX / 2;
        $images.css({
        '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
                'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
    });
})


//사진 클릭 시, 원본 이미지가 나오도록 함

const view = document.querySelector('.img_view')
const img = document.querySelectorAll('#imgs > div > a')
let imgT = document.createElement('img')
console.log(img,imgT)

img.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        imgT.src = `./images/sns/${i}.jpg`
        view.style.display = 'block'
        view.children[0].appendChild(imgT)
    })
})
view.addEventListener('click',()=>{
    view.style.display = 'none';
})
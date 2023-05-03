// header
const my = document.querySelector('.inform')
const menu = document.querySelector('.menu_inform')
const my_img = document.querySelector('.inform_g')
const menu_img = document.querySelector('.menu')
console.log(my,menu,my_img,menu_img)

// 내용 숨기기
my.style.display = 'none'
menu.style.display = 'none'

// 얼굴 이모티콘
// 1. 마우스 올리면 나타남
my_img.addEventListener('mouseover',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    my.style.display = 'inline-block'
})
// 2. 마우스 내리면 사라짐
my_img.addEventListener('mouseout',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    my.style.display = 'none'
})

//메뉴
// 1. 마우스 올리면 나타남
menu_img.addEventListener('mouseover',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    menu.style.display = 'inline-block'
})
// 2. 마우스 내리면 사라짐
menu_img.addEventListener('mouseout',(e)=>{
    e.preventDefault() //a tag 기본 기능 막음
    menu.style.display = 'none'
})



// product 카테고리 별로 나누기
const all = document.querySelector('.all')
const face = document.querySelector('.face_g')
const lip = document.querySelector('.lip_g')
const eye = document.querySelector('.eye_g')

// 카테고리
const ca_all = document.querySelector('.top_all')
const ca_eye = document.querySelector('.top_eye')
const ca_lip = document.querySelector('.top_lip')
const ca_face = document.querySelector('.top_face')

// 서브 카테고리
const sub_eye = document.querySelector('.eye')
const sub_lip = document.querySelector('.lip')
const sub_face = document.querySelector('.face')

// 서브 카테고리 상세
/* 눈 */
const eye_brow = document.querySelector('.ca_brow')
const eye_liner = document.querySelector('.ca_liner')
const eye_mascara = document.querySelector('.ca_mascara')
/* 입술 */
const lip_tint = document.querySelector('.tint')
const lip_stick = document.querySelector('.stick')
/* 피부 */
const face_primer = document.querySelector('.ca_primer')
const face_blusher = document.querySelector('.ca_blusher')
const face_highlighter = document.querySelector('.ca_highlighter')
const face_foundation = document.querySelector('.ca_foundation')

// 서브 카테고리 아이템
/* 눈 */
const sub_eye_brow = document.querySelectorAll('.brow')
const sub_eye_mascara = document.querySelectorAll('.mascara')
const sub_eye_liner = document.querySelectorAll('.liner')
/* 입술 */
const sub_lip_tint = document.querySelectorAll('.lip_tint')
const sub_lip_stick = document.querySelectorAll('.lip_stick')
/* 피부 */
const sub_face_primer = document.querySelectorAll('.primer')
const sub_face_blusher = document.querySelectorAll('.blusher')
const sub_face_highlighter = document.querySelectorAll('.highlighter')
const sub_face_foundation = document.querySelectorAll('.foundation')

console.log(all,face,lip,eye,ca_all,ca_eye,ca_lip,ca_face)
console.log(sub_eye,sub_lip,sub_face)
console.log(sub_eye_brow,sub_eye_mascara,sub_eye_liner)
console.log(eye_brow,eye_liner,eye_mascara,lip_tint,lip_stick)
console.log(face_primer,face_blusher,face_highlighter,face_foundation)

// 전체 제외 카테고리 전부 가리기
face.style.display = 'none'
lip.style.display = 'none'
eye.style.display = 'none'

// 각 카테고리 클릭 시, 해당 상품만 보이게 함
/* 전체 */
ca_all.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제거 */
    // console.log(this) 작동 확인
    all.style.display = 'flex'
    face.style.display = 'none'
    eye.style.display = 'none'
    lip.style.display = 'none'
    /* 하위 카테고리 설정 */
    sub_eye.style.display = 'none'
    sub_lip.style.display = 'none'
    sub_face.style.display = 'none'
})
/* 얼굴 */
ca_face.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제거 */
    // console.log(this) 작동 확인
    all.style.display = 'none'
    face.style.display = 'flex'
    eye.style.display = 'none'
    lip.style.display = 'none'
    /* 하위 카테고리 설정 */
    sub_eye.style.display = 'none'
    sub_lip.style.display = 'none'
    sub_face.style.display = 'inline-flex'
})
/* 눈 */
ca_eye.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제거 */
    // console.log(this) 작동 확인
    all.style.display = 'none'
    face.style.display = 'none'
    eye.style.display = 'flex'
    lip.style.display = 'none'
    /* 하위 카테고리 설정 */
    sub_eye.style.display = 'inline-flex'
    sub_lip.style.display = 'none'
    sub_face.style.display = 'none'
})
/* 입술 */
ca_lip.addEventListener('click',(e)=>{
    e.preventDefault()/* a tag 기본 기능 제거 */
    // console.log(this) 작동 확인
    all.style.display = 'none'
    face.style.display = 'none'
    eye.style.display = 'none'
    lip.style.display = 'flex'
    /* 하위 카테고리 설정 */
    sub_eye.style.display = 'none'
    sub_lip.style.display = 'inline-flex'
    sub_face.style.display = 'none'
})

// 서브 카테고리 부분 ======================================================================
// 1. 전부 가리기 (첫 페이지는 전체상품 카테고리라 필요 xx)
sub_eye.style.display = 'none'
sub_lip.style.display = 'none'
sub_face.style.display = 'none'

// 2. 각 카테고리 클릭했을 때, 해당 sub 카테고리 나타나도록 설정
// => 위 script에 넣음

//서브 카테고리 아이템 부분 ================================================================
// 각 카테고리 클릭했을 때, 해당 sub 카테고리 나타나도록 설정
/* 눈 */
for(let i=0; i<sub_eye_brow.length; i++){
    for(let j=0; j<sub_eye_mascara.length; j++){
        for(let m=0; m<sub_eye_liner.length; m++){
            /* 서브의 서브 아이브로우 */
            eye_brow.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_eye_brow[i].style.display = 'inline-flex'
                sub_eye_mascara[j].style.display = 'none'
                sub_eye_liner[m].style.display = 'none'
            })
            /* 서브의 서브 아이라이너 */
            eye_liner.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_eye_brow[i].style.display = 'none'
                sub_eye_mascara[j].style.display = 'none'
                sub_eye_liner[m].style.display = 'inline-flex'
            })
            /* 서브의 서브 마스카라 */
            eye_mascara.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_eye_brow[i].style.display = 'none'
                sub_eye_mascara[j].style.display = 'inline-flex'
                sub_eye_liner[m].style.display = 'none'
            })
            /* 서브 눈 카테고리 */
            ca_eye.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                sub_eye_brow[i].style.display = 'inline-flex'
                sub_eye_mascara[j].style.display = 'inline-flex'
                sub_eye_liner[m].style.display = 'inline-flex'
            })
        }
    }
}
/* 입술 */
for(let i=0; i<sub_lip_tint.length; i++){
    for(let j=0; j<sub_lip_stick.length; j++){
        /* 서브의 서브 입술 */
        lip_tint.addEventListener('click',(e)=>{
            e.preventDefault()/* a tag 기본 기능 제거 */
            // console.log(this) 확인
            sub_lip_tint[i].style.display = 'inline-flex'
            sub_lip_stick[j].style.display = 'none'
        })
        /* 서브의 서브 립스틱 */
        lip_stick.addEventListener('click',(e)=>{
            e.preventDefault()/* a tag 기본 기능 제거 */
            // console.log(this) 확인
            sub_lip_tint[i].style.display = 'none'
            sub_lip_stick[j].style.display = 'inline-flex'
        })
        /* 서브 입술 카테고리 */
        ca_lip.addEventListener('click',(e)=>{
            e.preventDefault()/* a tag 기본 기능 제거 */
            sub_lip_tint[i].style.display = 'inline-flex'
            sub_lip_stick[j].style.display = 'inline-flex'
        })
    }
}
/* 피부 */
for(let i=0; i<sub_face_primer.length; i++){
    for(let j=0; j<sub_face_blusher.length; j++){
        for(let m=0; m<sub_face_highlighter.length; m++){
            for(let n=0; n<sub_face_foundation.length; n++){
                /* 서브의 서브 프라이머 */
                face_primer.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_face_primer[i].style.display = 'inline-flex'
                sub_face_blusher[j].style.display = 'none'
                sub_face_highlighter[m].style.display = 'none'
                sub_face_foundation[n].style.display = 'none'
            })
                /* 서브의 서브 블러셔 */
                face_blusher.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_face_primer[i].style.display = 'none'
                sub_face_blusher[j].style.display = 'inline-flex'
                sub_face_highlighter[m].style.display = 'none'
                sub_face_foundation[n].style.display = 'none'
            })
                /* 서브의 서브 하이라이터 */
                face_highlighter.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_face_primer[i].style.display = 'none'
                sub_face_blusher[j].style.display = 'none'
                sub_face_highlighter[m].style.display = 'inline-flex'
                sub_face_foundation[n].style.display = 'none'
            })
                /* 서브의 서브 파운데이션 */
                face_foundation.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                // console.log(this) 확인
                sub_face_primer[i].style.display = 'none'
                sub_face_blusher[j].style.display = 'none'
                sub_face_highlighter[m].style.display = 'none'
                sub_face_foundation[n].style.display = 'inline-flex'
            })
            ca_face.addEventListener('click',(e)=>{
                e.preventDefault()/* a tag 기본 기능 제거 */
                sub_face_primer[i].style.display = 'inline-flex'
                sub_face_blusher[j].style.display = 'inline-flex'
                sub_face_highlighter[m].style.display = 'inline-flex'
                sub_face_foundation[n].style.display = 'inline-flex'
            })
            }
        }
    }
}
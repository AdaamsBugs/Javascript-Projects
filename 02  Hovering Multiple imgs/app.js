console.log('app is working bro')

const elem = document.querySelectorAll('.elem')

elem.forEach((val)=>{

    
    
    val.addEventListener("mouseenter", ()=>{
    val.childNodes[2].style.opacity = '1'
 })
    val.addEventListener("mouseleave", ()=>{
    val.childNodes[2].style.opacity = '0'
 })
    val.addEventListener('mousemove',(dets)=>{
        val.childNodes[2].style.left = dets.x+'px'
        val.childNodes[2].style.top = dets.y+'px'
    })


})

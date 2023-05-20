document.addEventListener('DOMContentLoaded',()=>{
    const mapPoint=document.querySelectorAll('#jejumap_image p')
    const mapImg=document.querySelectorAll('#jejumap_image img')

    const map=document.querySelector('#jejumap_image')

    init()
    initEvent()

    function init(){
        gsap.set(mapImg, {scale:0, opacity:0, display:'none'})
    }
    function initEvent(){
        for(item of mapPoint){
            item.addEventListener('mouseenter', showMapImg)
        }
        // for(item of mapPoint){
        //     item.addEventListener('mouseleave', hideMapImg)
        // }

        map.addEventListener('mouseleave',hideMapImg)
    }


    function showMapImg(){
        gsap.set(mapImg, {scale:0, opacity:0, display:'none'})
        gsap.set(this.previousElementSibling, {display:'block'})
        gsap.to(this.previousElementSibling, {opacity:1, scale:1, duration:0.4, ease:'power1.out'})
    }
    function hideMapImg(){
       
        gsap.set(mapImg, {display:'none'})
        gsap.to(mapImg, {opacity:0, scale:0, duration:0.3, ease:'power1.out'})

        // gsap.set(map,{display:'none'})
        // gsap.to(map,{opacity:1, scale:0, duration:0.7, ease:'power1.out'})
    }

    





})
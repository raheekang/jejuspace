document.addEventListener('DOMContentLoaded',()=>{

    const courseWrap=document.querySelector('#jeju_space_course_wrap')
    const courseLeft=document.querySelector ('#jeju_space_course_left')
    const courseRight=document.querySelector('#jeju_space_course_right')

    initEvent()

    function initEvent(){
       courseLeft.addEventListener('mouseenter', showLeftImg)
       courseRight.addEventListener('mouseenter', showRightImg)
       courseWrap.addEventListener('mouseleave', hideImg)
    }

    function showLeftImg(){
        gsap.to(courseLeft, {width:60+'%', duration:1, ease:'expo.out'})
        gsap.to(courseRight, {width:40+'%', duration:1, ease:'expo.out'})      
    }

    function showRightImg(){
        gsap.to(courseLeft, {width:40+'%', duration:1, ease:'expo.out'})
        gsap.to(courseRight, {width:60+'%', duration:1, ease:'expo.out'}) 
    }

    function hideImg(){
        gsap.to(courseLeft, {width:50+'%', duration:1, ease:'expo.out'})
        gsap.to(courseRight, {width:50+'%', duration:1, ease:'expo.out'})            
    }   
})
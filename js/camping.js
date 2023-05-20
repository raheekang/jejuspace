document.addEventListener('DOMContentLoaded',()=>{
    
    const spaceTopImg=document.querySelector('#spacetop_img')
    const spaceMidImg=document.querySelector('#spacemid_img')
    const spaceBottomImg=document.querySelector('#spacebottom_img')
    
    let scrollHeight=window.pageYOffset;

    init()
    function init(){
        gsap.set(spaceTopImg,{top:30+"%", scale:0.5, opacity:0})
        gsap.set(spaceMidImg,{top:30+"%", scale:0.5, opacity:0})
        gsap.set(spaceBottomImg,{bottom:-30+"%", scale:0.5, opacity:0})
    }
    
    window.addEventListener('scroll', scrollSpace)

    function scrollSpace(){

        scrollHeight=window.pageYOffset;

        if(scrollHeight>=(800+20800)){            
            gsap.to(spaceTopImg,{top:0+"%",scale:1, opacity:1, duration:1, ease: "elastic.out(0.5, 0.5)"})            
        }
        if(scrollHeight>=(1300+20800)){            
            gsap.to(spaceMidImg,{top:0+"%",scale:1, opacity:1,duration:1, ease: "elastic.out(0.5, 0.5)"})      
        }
        if(scrollHeight>=(1800+20800)){            
            gsap.to(spaceBottomImg,{bottom:20+"%",scale:1, opacity:1, duration:1, ease: "elastic.out(0.5, 0.5)"})        
        }

    }


//  // Wrap every letter in a span
//   var textWrapper = document.querySelector('#space_title');
//   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

//   anime.timeline({loop: 2})
//   // anime.timeline({loop: true}) 무한반복
//     .add({
//       targets: '#space_title .letter',
//       opacity: [0,1],
//       easing: "easeInOutQuad",
//       duration: 2250,
//       delay: (el, i) => 150 * (i+1)
//     }).add({
//       targets: '#space_title',
//       opacity: 1,
//       duration: 1000,
//       easing: "easeOutExpo",
//       delay: 1000
//     });






// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml7 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml7 .letter',
//     translateY: ["1.1em", 0],
//     translateX: ["0.55em", 0],
//     translateZ: 0,
//     rotateZ: [180, 0],
//     duration: 750,
//     easing: "easeOutExpo",
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml7',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });





})
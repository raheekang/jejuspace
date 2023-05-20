window.addEventListener('load',()=>{

    const jejuTitle=document.querySelector('#jeju_space_title');
    const jejuText=document.querySelector('#jeju_space_subtxt');
    const jejuSpace=document.querySelector('#jeju_space');
    const leftImg=document.querySelector('#jeju_space_imgleft');
    const rightImg=document.querySelector('#jeju_space_imgright');
    const jejuImg1=document.querySelector('#jeju_img1');
    const jejuImg2=document.querySelector('#jeju_img2');
    const jejuImg3=document.querySelector('#jeju_img3');
    const jejuImg4=document.querySelector('#jeju_img4');
    const jejuImg5=document.querySelector('#jeju_img5');
    const jejuImg6=document.querySelector('#jeju_img6');
    const jejuImg7=document.querySelector('#jeju_img7');
    const jejuImg8=document.querySelector('#jeju_img8');
    const jejuImg9=document.querySelector('#jeju_img9');
    const jejuImg10=document.querySelector('#jeju_img10');
    const jejuImg11=document.querySelector('#jeju_img11');
    const jejuImg12=document.querySelector('#jeju_img12');

    let scrollHeight=window.pageYOffset; 

    init()

    function init(){
       
        gsap.set('body', {overflowX:'hidden'})
        gsap.set('#jeju_space_wrap, #intro_wrap', {width:window.innerWidth, height:window.innerHeight})
        gsap.set('#visual_inner',{height:window.innerHeight})
        gsap.set('#visual_wrap',{height:20800})
        gsap.set(jejuTitle, {translateY:800})
        gsap.set(jejuText, {translateY:900})

    }
    
    window.addEventListener('scroll', scrollWindow)

    function scrollWindow(){

        scrollHeight=window.pageYOffset; 

        if(scrollHeight>=window.innerHeight && scrollHeight<=20800 ){          
                        
            gsap.to(jejuTitle,{translateY:0, opacity:1, duration:1, ease:'power1.out'})
		    gsap.to(jejuText,{translateY:0, opacity:1, delay:0.2, duration:1, ease:'power1.out'})

            gsap.to(leftImg, {left:200-(scrollHeight-window.innerHeight)/2})            
            gsap.to(rightImg, {left:1400-(scrollHeight-window.innerHeight)/1.5})

            gsap.to(jejuImg1, {left:2034-(scrollHeight-window.innerHeight)/2})
            gsap.to(jejuImg2, {left:2735-(scrollHeight-window.innerHeight)/2.5})
            gsap.to(jejuImg3, {left:3135-(scrollHeight-window.innerHeight)/1.5})
            gsap.to(jejuImg4, {left:3413-(scrollHeight-window.innerHeight)/3})
            gsap.to(jejuImg5, {left:3800-(scrollHeight-window.innerHeight)/2})
            gsap.to(jejuImg6, {left:4242-(scrollHeight-window.innerHeight)/3})
            gsap.to(jejuImg7, {left:4629-(scrollHeight-window.innerHeight)/2.5})
            gsap.to(jejuImg8, {left:5136-(scrollHeight-window.innerHeight)/3})
            gsap.to(jejuImg9, {left:5774-(scrollHeight-window.innerHeight)/4.3})
            gsap.to(jejuImg10, {left:6030-(scrollHeight-window.innerHeight)/2.9})
            gsap.to(jejuImg11, {left:6527-(scrollHeight-window.innerHeight)/3})
            gsap.to(jejuImg12, {left:7030-(scrollHeight-window.innerHeight)/3.1})

            if(scrollHeight>=window.innerHeight+4000 && scrollHeight<window.innerHeight+8400){
                // alert('6000')
                gsap.to(jejuSpace,{backgroundColor:'#B8C0B5', duration:0.2, ease:'power1.out'})
                gsap.to(jejuTitle,{color:'#4F4F4F', opacity:1, duration:0.2, ease:'power1.out'})
		        gsap.to(jejuText,{color:'#4F4F4F', opacity:1, duration:0.2, ease:'power1.out'})

            }else if(scrollHeight>=window.innerHeight+8400 && scrollHeight<window.innerHeight+14600){
                gsap.to(jejuSpace,{backgroundColor:'#848D82', duration:0.2, ease:'power1.out'})
                gsap.to(jejuTitle,{color:'#CACACA', opacity:1, duration:0.2, ease:'power1.out'})
		        gsap.to(jejuText,{color:'#CACACA', opacity:1, duration:0.2, ease:'power1.out'})

            }else if(scrollHeight>=window.innerHeight+14600 && scrollHeight<window.innerHeight+20800){
                gsap.to(jejuSpace,{backgroundColor:'#5F6561', duration:0.2, ease:'power1.out'})
                gsap.to(jejuTitle,{color:'white', opacity:1, duration:0.2, ease:'power1.out'})
		        gsap.to(jejuText,{color:'white', opacity:1, duration:0.2, ease:'power1.out'})

            }else if(scrollHeight<window.innerHeight+4000){
                gsap.to(jejuSpace,{backgroundColor:'white', duration:0.2, ease:'power1.out'})
                gsap.to(jejuTitle,{color:'#4F4F4F', opacity:1, duration:0.2, ease:'power1.out'})
		        gsap.to(jejuText,{color:'#4F4F4F', opacity:1, duration:0.2, ease:'power1.out'})
            }
        }
    }

})





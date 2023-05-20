// document.addEventListener('DOMContentLoaded',()=>{

//     const html=document.querySelector('html')
//     const cursor=document.querySelector('#mouse-cursor')

//     window.addEventListener('mousemove', mousemove)

//     let scrollHeight=window.pageYOffset; 
//     let cursorX=0;
//     let cursorY=0;

//     function mousemove(e){
//         scrollHeight=window.pageYOffset; 

//         if(scrollHeight>=window.innerHeight*
//5+400 && scrollHeight>=window.innerHeight*5+1400){
        
//             html.style.cursor='none';
    
//             scrollHeight=window.pageYOffset; 
    
//             //마우스 커서의 위치를 가운데로 잡아줌
//             cursorX=e.pageX-cursor.offsetWidth/2
//             cursorY=e.pageY-cursor.offsetHeight/2
            
//             cursor.style.transform=`translate3d(${cursorX}px, ${cursorY}px,0)`
    
    
//         }
    
//     }

    
// })






document.addEventListener('DOMContentLoaded',()=>{

    const html=document.querySelector('html')
    const newCursor=document.querySelector('#background_cursor')
    const cursorWrap=document.querySelector('#mouse_cursor_wrap')

    let positionX=0;
    let positionY=0;

    cursorWrap.addEventListener('mouseenter', startDrag)
    cursorWrap.addEventListener('mouseleave', stopDrag)

    // html.style.cursor='none';
    
    function startDrag(){
        cursorWrap.addEventListener('mousemove', scroll1)
    }

    function stopDrag(){
        cursorWrap.removeEventListener('mousemove', scroll1)
    }

    function scroll1(e){

        

        
            //alert('test')
            // html.style.cursor='none';

          
                
           
                // 마우스가 <바디>안에서 움직일 떄의 이벤트

                // 마우스 xy좌표저장

                positionX=e.clientX-newCursor.offsetWidth/2+"px";
                positionY=e.clientY-newCursor.offsetHeight/2+"px";
        
                //새로운 마우스 커서에 좌표입력
                newCursor.style.left=positionX;
                newCursor.style.top=positionY;



                
                // positionX=e.pageX-cursorParent.offsetWidth/2
                // positionY=e.pageY-cursorParent.offsetHeight/2
                // newCursor.style.transform=`translate3d(${positionX}px, ${positionY}px,0)`

                // positionX=e.clientX+"px";
                // positionY=e.clientY+"px";
        
                //새로운 마우스 커서에 좌표입력
                // newCursor.style.left=positionX;
                // newCursor.style.top=positionY;

            
    
        
    }

 
})



//한라봉 text효과 미리보기

// document.addEventListener('DOMContentLoaded',()=>{

//     let div=document.querySelector('.background_title')

//     observer.observe(div)

//     let observer=new IntersectionObserver((e)=>{
//         e.forEach((box)=>{
//             if(box.isIntersecting){
//                 box.target.style.opacity=1;
//             }else{
//                 box.target.style.opacity=0;
//             }

//         })
//     })


// })
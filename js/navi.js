document.addEventListener('DOMContentLoaded',()=>{

    const header=document.querySelector('header')
    const mainMenuWrap=document.querySelector('#mainmenu')
    const mainMenu=document.querySelectorAll('#mainmenu_list>li')
    const menuBtn=document.querySelector('.menu-icon')
    const menuBtnWrap=document.querySelector('.menu-icon-wrapper')
    const grayLayer=document.createElement('div') 
    grayLayer.id='mobile_graylayer' 
    const logoImg=document.querySelector('#logo')

    let selectedMenu=null;
    let isMenuOpen=false;

    initEvent()

    function initEvent(){
        menuBtnWrap.addEventListener('click',clickBtn)

        for(const item of mainMenu){
            item.addEventListener('mouseenter',menuActivate)
        }
    }

    gsap.set(logoImg,{top:700, display:'none', opacity:0})
    gsap.to(logoImg,{top:600, display:'block', opacity:1, duration:0.7, ease:'power1.out'})

    // gsap.set(logoImg,{display:'none', opacity:0})
    // gsap.to(logoImg,{display:'block', opacity:1, duration:1.5, ease:'power1.out'})
        
    function clickBtn(){
     if(isMenuOpen==false){
        menuBtn.classList.add('menu-icon-active')
        gsap.set(grayLayer,{display:'block', opacity:0.8})
        header.append(grayLayer)
        gsap.set('body',{overflow:'hidden'})

        gsap.to(mainMenuWrap,{width:80+'%', height:100+'%', opacity:1, duration:1, ease:'expo.out', onComplete:()=>{
         isMenuOpen=true;

        }})
     }else if(isMenuOpen==true){
      menuBtn.classList.remove('menu-icon-active')
   
      gsap.to(grayLayer,{display:'none', opacity:0, duration:0.2, delay:0.2, ease:'power1.out'})
      gsap.set('body',{overflow:'visible'})
      gsap.to(mainMenuWrap,{width:0, height:0, opacity:0,duration:1.5, ease:'expo.out', onComplete:()=>{
       isMenuOpen=false;
      }})
     }
   }

    function menuActivate(){
      if(selectedMenu!=null && selectedMenu!=this){
            selectedMenu.classList.remove('selected')
      }
      if(selectedMenu!=this){
          selectedMenu=this;
          selectedMenu.classList.add('selected')
      }

    }
})
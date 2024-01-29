function loading(){
    var tl = gsap.timeline()

tl.to("#yellow1",{
    top:"-100%",
    delay:0.6,
    duration:0.5,
    ease:"expo.out"
})

tl.from("#yellow2 ",{
    top:"100%",
    delay:0.5,
    duration:0.7,
    ease:"expo.out"
    
},"anim")

tl.to("#loader h1",{
    duration:0.9,
    color:"#000",

},"anim")

tl.to("#loader",{
    opacity:0
})

tl.to("#loader",{
    display:"none"
})
}

loading();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    document.querySelector("#footer h3").addEventListener("click",function(){
       scroll.scrollTo(0)
    })
    
    
    var elem = document.querySelectorAll(".elem")
    var page2 = document.querySelector("#page2")
    
    
    elem.forEach(function(ele){
       ele.addEventListener("mouseenter",function(){
        var img=ele.getAttribute("data-image")
         
            page2.style.backgroundImage=`url(${img})`
       })
       ele.addEventListener("mouseleave",function(){
        var img=ele.getAttribute("data-image")
         
            page2.style.backgroundImage=`url()`
       })
    })
    
}

loco();

function menu(){
    var menu = document.querySelector("nav #nav-3 ");
var menuSrc =document.querySelector(".navSrc");
var flag =0;
menu.addEventListener("click",function(){
    if(flag == 0){
        menuSrc.style.top=0
        flag =1
    }else{
        menuSrc.style.top ="-100%"
        flag =0
    }
})
}
menu()
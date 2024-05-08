const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loader(){
    var tl = gsap.timeline();
tl.to(".page-1",{
    y:"100vh",
    duration:0,
        scale:.4
})
tl.to(".page-1",{
    y:"0vh",
    duration:1,
    delay:1,
})
tl.to(".page-1",{
        duration:1,
    delay:1,
    scale:1,
    rotate:360
})
tl.from(".page-2",{
    display:'none'
})

}
function allWork(){
    let work=document.querySelector(".all-work")
let text=document.querySelector(".all-work h1")
let arrow=document.querySelector(".all-work h2")
var tl=gsap.timeline()
work.addEventListener("mouseenter",function(){
    
tl.to(text,{
    x:600,
    duration:.2,
    
})
tl.to(arrow,{
    x:0,
    duration:0.2
})
})

work.addEventListener("mouseleave",function(){
    tl.to(arrow,{
        x:-550,
        delay:.4,
        duration:.2
    })
    tl.to(text,{
        x:0,
        duration:.1
    })
    
    })
}

loader()
allWork()

var card1=document.querySelector(".card1")
var card2=document.querySelector(".card2")
var card3=document.querySelector(".card3")
var card4=document.querySelector(".card4")

card1.addEventListener("mouseenter" ,function(){
  var tl=gsap.timeline();
  tl.to(card2,{
    x:330
  },"cards")
  tl.to(card3,{
    x:330
  },"cards")
  tl.to(card4,{
    x:330
  },"cards")

})
card1.addEventListener("mouseleave" ,function(){
    var tl=gsap.timeline();
    tl.to(card2,{
      x:0
    },"cards")
    tl.to(card3,{
      x:0
    },"cards")
    tl.to(card4,{
      x:0
    },"cards")
  
  })

  card2.addEventListener("mouseenter" ,function(){
    var tl=gsap.timeline();
    tl.to(card3,{
      x:330
    },"cards")
    tl.to(card4,{
      x:330
    },"cards")
  
  })
  card2.addEventListener("mouseleave" ,function(){
      var tl=gsap.timeline();

      tl.to(card3,{
        x:0
      },"cards")
      tl.to(card4,{
        x:0
      },"cards")
    
    })
    card3.addEventListener("mouseenter" ,function(){
        var tl=gsap.timeline();
        tl.to(card4,{
          x:330
        },"cards")
      
      })
      card3.addEventListener("mouseleave" ,function(){
          var tl=gsap.timeline();
          tl.to(card4,{
            x:0
          },"cards")
        
        })
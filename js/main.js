/* back to top */
$(window).scroll(function()
{
    if($(window).scrollTop()>1000)
    {
        $(".back-to-top").css("display","block");
    }
    else
    {
        $(".back-to-top").css("display","none");
    }
})
$(".back-to-top").click(function()
{
    $("html").animate({
        scrollTop:0
    })
})


/* carousel featured */
$('.owl-one').owlCarousel({
  loop:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
})

/* popular item */
$('.owl-two').owlCarousel({
  loop:true,
  margin:5,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$('.owl-three').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })

  $('.owl-four').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  })
  /* sidebar cart */
  $(".shopping-cart").on("click",function(e)
  {
      e.preventDefault();
      $(".sidebar").css("display","block");
      $(".sidebar_content").animate({
          right:0
      },500)
  })
  $(".sidebar").on("click",function()
  {
      $(".sidebar_content").on("click",function(e)
      {
          e.stopPropagation();
      })
    $(".sidebar_content").animate({
        right:-400
    },500,function()
    {
        $(".sidebar").css("display","none");
    })

  })

  $(".header_categorie ul li").click(function()
  {
      if($(this).hasClass("categorie-active"))
      {
        $(this).removeClass("categorie-active");
      }
      else
      {
        $(this).addClass("categorie-active");
      }
  })
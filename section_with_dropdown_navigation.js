$(document).ready(function(){
  $("#text a").on({
    mouseover: function(){
      $(this).css({
        "color": "hsl(0, 0%, 8%)",
        "font-weight": "600",
        "background": "transparent",
        "border": "1px solid hsl(0, 0%, 8%)"
      });  
    },
    mouseout: function(){
      $(this).css({
        "color": "white",
        "background": "hsl(0, 0%, 8%)",
        "font-weight": "500" 
      });
    }
  });

  $("#desknav #infos > div").on({
    mouseover: function(){
      $(this).css({
        "color": "hsl(0, 0%, 8%)",
        "font-weight": "600"
      });
    },
    mouseout: function(){
      $(this).css({
        "color": "hsl(0, 0%, 41%)",
        "font-weight": "400"
      })
    }
  });

  $("#desknav #auth > div").on({
    mouseover: function(){
      $(this).css({
        "color": "hsl(0, 0%, 8%)",
        "font-weight": "600"
      });
    },
    mouseout: function(){
      $(this).css({
        "color": "hsl(0, 0%, 41%)",
        "font-weight": "400"
      })
    }
  });

  $("#desknav .features").on({
    mouseover: function(){
      $("#desknav .features > div > img").attr("src", "images/icon-arrow-up-black.svg");
    },
    mouseout: function(){
      $("#desknav .features > div > img").attr("src", "images/icon-arrow-down.svg");
    }
  });

  $("#desknav .company").on({
    mouseover: function(){
      $("#desknav .company > div > img").attr("src", "images/icon-arrow-up-black.svg");
    },
    mouseout: function(){
      $("#desknav .company > div > img").attr("src", "images/icon-arrow-down.svg");
    }
  });

  $("#mobnav .features").on({
    click: function(){
      $("#mobnav .features .more").toggle();
      let src = $("#mobnav .features > div > img").attr("src");
      if(src === "images/icon-arrow-down.svg") {
        $("#mobnav .features > div > img").attr("src","images/icon-arrow-up.svg");
      }else{
        $("#mobnav .features > div > img").attr("src", "images/icon-arrow-down.svg");
      }
    }
  });
  $("#mobnav .company").on({
    click: function(){
      $("#mobnav .company .more").toggle();
      let src = $("#mobnav .company > div > img").attr("src");
      if(src === "images/icon-arrow-down.svg") {
        $("#mobnav .company > div > img").attr("src","images/icon-arrow-up.svg");
      }else{
        $("#mobnav .company > div > img").attr("src", "images/icon-arrow-down.svg");
      }
      }   
  });
  
  $("#mobnav > img").click(function(){
    $("#menu").css("display", "flex");
  });

  $("#menu > div:nth-child(2) > img").click(function(){
    $("#menu").css("display", "none");
  });
});

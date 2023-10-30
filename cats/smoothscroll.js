$("nav ul li a").click(function() {
  var thisLink = $(this);  // Hinzugefügt, um die aktuelle Verknüpfung zu speichern
  var thisSection = thisLink.attr("href");
  
  $("html, body").stop().animate({
      scrollTop: $(thisSection).offset().top - 200
  }, 400, "easeOutCirc", function() {
      $("nav ul li a").removeClass("selected");  // Verwenden von removeClass anstelle von removeAttr
      thisLink.addClass("selected");
  });
});

$(window).on("load", function() {
  var posts = $("section");
  var pagetop;
  var postPos;
  var counter = 0;
  var postTops = [];
  var prevcounter=0;
  var
  
  posts.each(function() {
      postTops.push($(this).offset().top);
  });
  console.log(postTops);
  
  $(window).scroll(function() {
      pagetop = $(window).scrollTop() + 210;
      
      if(pagetop > postTops[counter + 1]) {
          counter++;
          console.log(`scrolling down ${counter}`);
      } else if(counter > 0 && pagetop < postTops[counter]) {
          counter--;
          console.log(`scrolling up! ${counter}`);
      }
      if(counter!=prevcounter){
        $("nav ul li a").removeClass("selected");
        $("nav ul li a").eq(counter).addClass("selected");
        prevCounter= counter ; 
      }
  });
  $(window).on("resize",function(){
    clearTimeout(doneResiteing);
    doneResiteing=setTimeout(function(){

      console.log("done resizing");
    },500);
  }) ;
});
(function(){
  "use"
  $("#tabs>ul>li>a").click(function(){
    $("#tabs>ul>li>a").css({color:"#cecece",background:"#a2a2a2"})
    $(this).css({color:"#333",background:"#eaeaea"})
    const thisTab =$(this).attr("href");
  
    $("#tabs>div:visible").fadeOut(200,function(){
      $(thisTab).fadeIn(200) ;
    });
  
  });
  
})();
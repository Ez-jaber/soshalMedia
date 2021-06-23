
    $(document).ready(function(){
       $(".right").click(function(){
           $(".white-panel").css("transform"," translate(80%)");
           $(".login-show").css("display"," none");
           $(".register-show").css("display"," block");
       })
       $(".left").click(function(){
        $(".white-panel").css("transform"," translate(0%)");
        $(".register-show").css("display"," none");
        $(".login-show").css("display"," block");
    })
    console.log( $("body").width());
    if ($("body").width() < 768) {
        $(".all").css("display","none");
    }
    else{
        $(".all").css("display","block" ); 
    }
 
    });
    
    
   
      
    
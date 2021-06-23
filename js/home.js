$(document).ready(function(){
  $(".netficatin ,.group2").css("display","none");
    //////////////////////////////////
    var count = 0;
    $(".submit").click(function(){
        var file = $("#myFile").val(); 
        console.log(file);
        var ez =file.replace("fakepath", "img");
       var path =ez.replace("C:", "..");
        console.log(path);
    });
    ////////////////////////////
    $(".share").click(function(){
        count++;
        var txt = $(".post-area").val(); 
        console.log(txt);
        //$("<h1>Helloooooooooooooooooooooo world!</h1> <div class:'card'>dvcdvdvdf</div>").insertBefore("card");
        var file = $("#myFile").val(); 
        var ez =file.replace("fakepath", "img");
        var path =ez.replace("C:", "..");
        $(".allPost").prepend("<div class='card col-md-12 col-sm-12 offset-md-3 dinamic box box"+count+"' style='width: 18rem;''>"+
        '<div class="user2 d-flex justify-content-start align-items-end" style="margin-top: 15px;">'+
       '<img src="../img/ez.jpg" class="rounded-circle"  width="50px" height="50px">' +
        '<p>Zowdetkom</p>'+
      '</div>'+
      '<div class="discription">'+
          "<p>"+txt+"</p>"+
         
      '</div>'+
        "<img class='card-img-top' src='"+path+"' width='100%' height='350px' alt='Card image cap'>"+
      
        "<div class='card-body'>"+
           "<img src='../img/heart.png' height='30px' width='30px' class='hvr-pop'/>"+ 
           "<img src='../img/comment.png' class='comment' width='30px' height='30px' class='hvr-pop' alt=''>"+ 
            "<img src='../img/post.png' width='30px' height='30px' class='hvr-pop' alt=''>"+
            "<img src='../img/arrow.png' width='30px' height='30px' class='hvr-pop' alt=''>"+
        "</div>"+
"<div class='comments'>"+

"<textarea class='comment-Textarea'></textarea>"+
"<button type='button' class='btn btn-success commentbut'>Success</button>"+

"</div>"+        
     "</div>" );
     $( ".card1" ).before($("card"));
     $(".dinamic").css("order",count);
    })
   //////////////////////////////////////////
   $(".commentbut").click(function(){
    var d = new Date();
    var commentTxt = $(".comment-Textarea").val(); 
    $( ".card" ).siblings().css( "display", "none" );
    $(".comments").append('<div class="media mb-5">'+
    '<img src="../img/ez.jpg" class="rounded-circle"  width="50px" height="50px">'+
    '<div class="media-body">'+
      '<h5 class="mt-3">Media heading</h5>'+
      '<p>'+commentTxt+'</p>'+
      '<p>'+d+'</p>'+
    '</div>'+
  '</div>');
   })
    $(".dinamic1").addClass("dinamic");
    $(".bell").click(function(){
      $(".netficatin").fadeToggle("slow")
    })
    $(".group").click(function(){
      $(".group2").fadeToggle("slow")
    })
});
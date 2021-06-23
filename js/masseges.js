$(document).ready(function(){
$(".commentbut").click(function(){
    var d = new Date();
    var commentTxt = $(".comment-Textarea").val(); 
    $(".masseg").append(
     '<div class="media">'+
    '<img class="mr-3 rounded-circle" src="../img/amro.jpg"  width="60px" height="60px" alt="Generic placeholder image">'+
    '<div class="media-body">'+
      '<h6 class="mt-2 h6">'+commentTxt+'</h6>'+
    '</div>'+
  '</div>');
    $(".comment-Textarea").val("");
   })
   /*
$(".islam").click(function(){
  $(".allmss").prepend('<div class="row chat">'+
  '<div class="col-md-12 name">'+
      '<img class="mr-3 rounded-circle" src="../img/amro.jpg"  width="60px" height="60px" alt="Generic placeholder image">'+
      '<h2>Ezedeen hisham</h2>'+
  '</div>'+
  '<div class="col-md-12 masseg">'+
      '<div class="media">'+
          '<img class="mr-3 rounded-circle" src="../img/amro.jpg"  width="60px" height="60px" alt="Generic placeholder image">'+
          '<div class="media-body">'+
            '<h6 class="mt-2 h6">hvddddddvdv  jfekg nkejngjkngiv</h6>'+
          '</div>'+
       '</div>'+
  '</div>'+
  '<div class="comments col-md-12">'+
      '<div class="comm col-md-12">'+
        
      '</div>'+
    '<textarea class="comment-Textarea"></textarea>'+
    '<button type="button" class="btn btn-success commentbut mb-5">Success</button>'+
    '</div>'+
'</div>')

})*/

});
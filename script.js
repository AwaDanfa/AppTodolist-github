$(document).ready(function(){

    $("li").each(function(){
    //var cli = $(this);
    $(this).append("<span class='close'></span>");

    if($(this).hasClass("checked")){
      $(this).prepend("<span class='tick'></span>")
    } else {

        $(this).prepend("<span></span>")
    }
    
})

$('#button').click(function(){
 var task =$("#task").val();
 if(task ==""){

    alertify.alert("Input Error!","Please write your task!", function(){ 
       $("#task").focus();alertify.success('Add task!');

   });
 } else {

    $('ol').append("<li><span></span>"+task+ "<span class='close'></span></li>")
    $("#task").focus();
 }

});
      


$(document).on("click","li", function(){
 var cLi = $(this);
 $(this).toggleClass("checked", function(){
     $(cLi).children("span:first").toggleClass("tick")
 })

});



$(document).on("click",".close",function(){
    $(this).parent("li").fadeOut("slow");

})

$('ol').sortable();

}); // end of ready function  

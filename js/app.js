$(document).ready(function(){
     $(".nav-link").click(function(){
         $("#article").load(".../"+$(this).attr("page")+".html");
         console.log("loaded");
     });
});

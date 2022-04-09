$(document).ready(function(){
	$("#readmore").click(function(){
        $(".hidden").fadeIn();
        $("#readmore").fadeOut();
    });
    $("#readless").click(function(){
        $(".hidden").fadeOut();
        $("#readmore").fadeIn();
    });
    $("#name").change(function(){
        $("h2").text("Hello, "+$("#name").val()+"!");
    });
});

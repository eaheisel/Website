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
$(document).ready(function(){
    $("form").submit(function(){
      event.preventDefault();
      var toSubmit = {};
      toSubmit.email = $("#email").val();
      toSubmit.usr = $("#usr").val();
      toSubmit.moreInformation = $("#moreInformation").val();
      toSubmit.message = $("#message").val();
      $.ajaxSetup({
        headers: {
          'Accept': "application/json",
        }
      });
      
      var form_submit = $.post("https://formspree.io/f/xwkyrqbk", toSubmit);
      
      form_submit.done(function(){
        $("#form-success").modal('show');
        $("#email").val("");
        $("#usr").val("");
        $("#moreInformation").val("");
        $("#message").val("");
      });
      
    })
  });
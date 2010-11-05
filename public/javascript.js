$(document).ready(function(){
	
	$('input[type=text]').jgTextHint();

	$("form").submit(function(e){
		e.preventDefault();
		$.post("/notify", {"email" : $("#email").val()}, function(json){
			if(json == true) {
				$("form p#email_p").html("Thanks! We'll be in touch");
			}
		}, "json");
	});

});

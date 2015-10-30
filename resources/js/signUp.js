$(document).ready(function(){
	$("#UserInputSU").change(function(){
		var user = $("#UserInputSU").val();
		$(".avaliable").css("color","green").empty().append("The Username "+user+" is avaliable!")
		
	});
	$("#CheckPasswordInput").change(function(){
		var pass = $("#PasswordInput").val();
		var checkpass = $("#CheckPasswordInput").val();
		if(pass == checkpass){
			$(".checkpass").css("color","green").empty().append("Passwords match!");
		}
		else{
			$(".checkpass").css("color","red").empty().append("Passwords don't match!")
		}

	});
});
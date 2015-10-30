var main = function(){
	var logged = false;
	if(logged){
		$("#link_login").hide();
		$("#games").show();
		$("#achievements").show();
		$("#ladders").show();
		$("#profile").show();
	}
	else{
		$("#link_login").show();
		$("#games").hide();
		$("#profile").hide();
		$("#achievements").hide();
		$("#ladders").hide();
	}

	var all = $(window);
	if(all.width() <= 992){
		$(".separator").hide();
	}
	else{
		$(".separator").show();
	}

	all.resize(function(){
		if(all.width() <= 992){
			$(".separator").hide();
		}
		else{
			$(".separator").show();
		}

	});
}
$(document).ready(main)
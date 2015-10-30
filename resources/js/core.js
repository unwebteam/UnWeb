var main = function(){
	var logged = false;
	if(logged){
		$("#games").show();
		$("#achievements").show();
		$("#ladders").show();
		$("#profile").show();
	}
	else{
		$("#link_login").show();
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
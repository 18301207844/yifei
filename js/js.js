;(function($){
	$(".bounceIn").hide().siblings(".huojian").hide();
	var Top1=$(".main_body_1").offset().top,
		Top2=$(".main_body_2").offset().top,
		Top3=$(".main_body_3").offset().top,
		Top4=$(".main_body_4").offset().top,
		Top5=$(".main_body_5").offset().top,
		Top6=$(".main_body_6").offset().top;
	
	$(window).on("scroll",function()
	{
		var sol=$(this).scrollTop()+200;
		if(sol>Top1&&sol<Top2){
			$(".main_body_1").find("img").show();
		}
		else if(sol>Top2&&sol<Top3){
			$(".main_body_2").find("img").show();
		}
		else if(sol>Top3&&sol<Top4){
			$(".main_body_3").find("img").show();
		}
		else if(sol>Top4&&sol<Top5){
			$(".main_body_4").find("img").show();
		}
		else if(sol>Top5&&sol<Top6){
			$(".main_body_5").find("img").show();
		}
		else if(sol>Top6){
			$(".main_body_6").find("img").show();
		}
	})	
})(Zepto)
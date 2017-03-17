// JavaScript Document
$(document).ready(function(e) {

	var mySwiperS = new Swiper('.swiperS', {
		autoHeight: true,
		initialSlide:0,
		scrollbar:'.swiper-scrollbar',
		scrollbarHide:true,
		scrollbarSnapOnRelease : true,
		freeMode :false,
		freeModeSticky : true
	});

	mySwiperS.on('onSlideChangeEnd',function(){
		$('.name_map span').eq(mySwiperS.activeIndex).addClass('present').siblings().removeClass('present');
	});

	//点击切换页面
	$('.lt').on('click',function(){
		mySwiperS.slideTo(0,500,false);
		$(this).css({'color':'#333'}).siblings().css('color','#999');
	});
	$('.rt').on('click',function(){
		mySwiperS.slideTo(1,500,false);
		$(this).css({'color':'#333'}).siblings().css('color','#999');
	});
});
























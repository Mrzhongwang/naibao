// JavaScript Document
$(document).ready(function(e) {
	if ('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function(){
			FastClick.attach(document.body);
		}, false);
	}
	var maskHeight=screen.height;
	$('#Shield').css('height',maskHeight);

	//阻止事件穿透
	var obj = document.getElementById('Shield');
	obj.addEventListener('touchmove', function(event) {
		// 如果这个元素的位置内只有一个手指的话
		event.preventDefault();
		/*return false;*/
	}, false);

	var screenHeight=$(window).height();
	var footerHeight=$('footer').height();
	var toHeight=screenHeight-footerHeight-$('header').height();
	$('.sign').css('height',toHeight);

	changeSituation();
});

var mySwiper = new Swiper ('.swiper-container', {
	autoHeight: true,
	initialSlide:0,
	scrollbar:'.swiper-scrollbar'
	});

//回调函数
mySwiper.on('onSlideChangeEnd',function(){
	if(mySwiper.activeIndex==2){
		if(a==0){
			$('.nav_one').css('color','#999');
			$('.nav_two').css('color','#999');
			$('.nav_three').css('color','#333');
			$('.nav_three img').attr('src','img/up.png');
			$('.up_nav').slideDown(200);
			$('#Shield').show();
			a=1;
		}else if(a==1){
			$('.nav_three').css('color','#999');
			$('.nav_three img').attr('src','img/up.jpg');
			$('.up_nav').slideUp(200);
			$('#Shield').hide();
			/*mySwiper.slideTo(1,500,false);
			$('.nav_two').css('color','#00c20c');*/
			a=0;
		}
	}else if(mySwiper.activeIndex==0){
		$('.nav_one').css('color','#333');
		$('.nav_two').css('color','#999');
		$('.nav_three').css('color','#999');
		$('.nav_three img').attr('src','img/up.jpg');
	}else if(mySwiper.activeIndex==1){
		$('.nav_one').css('color','#999');
		$('.nav_two').css('color','#333');
		$('.nav_three').css('color','#999');
		$('.nav_three img').attr('src','img/up.jpg');
	}
});

//导航点击事件
var a=0;
var b=0;
$('.nav_one').on('click',function(){
	if(a==1){
		$('.nav_three img').attr('src','img/up.jpg');
		$('.up_nav').slideUp(200);
		$('#Shield').hide();
		a=0;
	}
	mySwiper.slideTo(0,500,false);
	$(this).css({'color':'#333'}).siblings().css('color','#999');
});
$('.nav_two').on('click',function(){
	var i=0;
	if(a==1){
		$('.nav_three img').attr('src','img/up.jpg');
		$('.up_nav').slideUp(200);
		$('#Shield').hide();
		a=0;
	}
	mySwiper.slideTo(1,500,false);
	$(this).css({'color':'#333'}).siblings().css('color','#999');
});
$('.nav_three').on('click',function(){
	$(this).css({'color':'#333'}).siblings().css('color','#999');
	if(a==0){
		$('.nav_three img').attr('src','img/up.png');
		$('.up_nav').slideDown(200);
		$('#Shield').show();
		mySwiper.slideTo(2,500,false);
		a=1;
	}else if(a==1){
		// $(this).css({'color':'#999'});
		$('.nav_three img	').attr('src','img/up.jpg');
		$('.up_nav').slideUp(200);
		$('#Shield').hide();
		if(b!=1){
			$('.nav_two').trigger('click');
		}else if(b==1){
			mySwiper.slideTo(2,500,false);
		}
		a=0;
	}
});

//遮罩层
$('#Shield').on('click',function(){
	if(a==1){
		// $('.nav_three').css({'color':'#999'});
		$('.nav_three img').attr('src','img/up.jpg');
		$('.up_nav').slideUp(200);
		$('#Shield').hide();
		if(b!=1){
			$('.nav_two').trigger('click');
		}else if(b==1){
			mySwiper.slideTo(2,500,false);
			// $('.nav_three').css({'color':'#333'}).siblings().css('color','#999');
		}
		a=0;
	}
});

//医生筛选
$('.up_nav ul li').on('click',function(){
	$(this).find('.hook').show();
	$(this).find('.up_text').css('color','#333');
	$(this).siblings().find('.hook').hide();
	$(this).siblings().find('.up_text').css('color','#999');
	$('.up_nav').slideUp(200);
	$('#Shield').hide();
	// $('.nav_three').css({'color':'#999'});
	$('.nav_three img').attr('src','img/up.jpg');
	a=0;
	b=1;
});

//问诊跳转
$('.sl_sak span').click(function(){
	window.location.href='APP_Download.html';
	return false;
});

//状态判断
function changeSituation(){
	$('.sec').each(function(){
		if($(this).find('.online').children().html()=='在线'){
			$(this).find('.online').removeClass('busyness offline');
		}else if($(this).find('.online').children().html()=='接诊中'){
			$(this).find('.online').addClass('busyness').removeClass('offline');
		}else if($(this).find('.online').children().html()=='离线'){
			$(this).find('.online').removeClass('busyness').addClass('offline');
		}
	});
}




















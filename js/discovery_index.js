/**
 * Created by Administrator on 2016/9/18 0018.
 */
$(document).ready(function(){
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    }
    //判断按钮是否出现
    if(mySwiperY.slides.length==3){
        $('.swiper-button-prev').hide();
        $('.swiper-button-next').hide();
    }else{
        $('.swiper-button-prev').show();
        $('.swiper-button-next').show();
    }
    var screenHeight=$(window).height();
    var footerHeight=$('footer').height();
    var topHeight=$('.slideY').height()+footerHeight;
    var neborBaby=screenHeight-footerHeight-$('header').height();
    //计算奶宝育儿内容高度
    $('.neborBaby').css({'height':neborBaby});
    //计算疫苗内容高度
    var vaccineHeight=screenHeight-topHeight;
    $('.vaccine').css({'height':vaccineHeight});
    getTime(mySwiperY.activeIndex);
});

var a=0;//用来判断弹窗是否出现
//滑动事件
var mySwiperX = new Swiper('.swiper-x', {
    autoHeight: true,
    initialSlide:0,
    scrollbar:'.swiper-scrollbar',
    scrollbarHide:true,
    scrollbarSnapOnRelease : true ,
     /*setWrapperSize :true,
     longSwipes : false,*/
    onSlideChangeStart: function(swiper){
        if(!$('.slideX').hasClass('swiper-slide-active')){
            $('.popup').animate({'top': '-7.31rem'}, 200);
        }
    },
    onSlideChangeEnd: function(swiper){ //当滑动屏幕时触发事件
        if($('.slideX').hasClass('swiper-slide-active')){
            $('.lt').css({'color':'#000'}).siblings().css('color','#999');
            $('header a b').addClass('crossDown').removeClass('crossTop').show();
            a=0;
        }else{
            $('.lt').css({'color':'#999'}).siblings().css('color','#000');
            $('header a b').hide();
            a=1;
        }
    }
});

//导航栏点击事件
$('.lt').on('click',function() {
    mySwiperX.slideTo(0,500,false);
    $('.lt').css({'color':'#000'}).siblings().css('color','#999');
    if (a == 0) {
        $('.popup').animate({'top': '1.2rem'}, 200);
        a = 1;
        $('header a b').show().addClass('crossTop').removeClass('crossDown');
    } else {
        $('.popup').animate({'top': '-7.31rem'}, 200);
        a = 0;
        $('header a b').show().addClass('crossDown').removeClass('crossTop');
    }
});
$('.rt').on('click',function(){
    mySwiperX.slideTo(1,500,false);
    $('.lt').css({'color':'#999'}).siblings().css('color','#000');
    $('header a b').hide();
    if(a==1){
        $('.popup').animate({'top': '-7.31rem'}, 200);
    }
    a=1;
});


//锚点滚动
$('.pop_content li').on('click',function(){
    var index=$(this).index();
    var h=0;
    for(var n=0;n<index;n++){
        h += $('.wrap').eq(n).height();
    }
    /*if(index==0){
        $('.popup').animate({'top': '-7.31rem'}, 200);
    }*/
    $('.popup').animate({'top':'-7.31rem'},200);
    $("article").animate({scrollTop:h},400);
    $('header a b').addClass('crossDown').removeClass('crossTop');
    a=0;
});
//滚动事件
$('.neborBaby').on('touchmove',function(){
    if(a==1){
        $('.popup').animate({'top':'-7.31rem'},200);
        $('header a b').addClass('crossDown').removeClass('crossTop');
        a=0;
    }
}).on('click',function(){
    if(a==1){
        $('.popup').animate({'top':'-7.31rem'},200);
        $('header a b').addClass('crossDown').removeClass('crossTop');
        a=0;
    }
});

//疫苗接种事件函数
function getTime(i){
    var z=0;//判断状态参数
    var h=0;//滚动高度计算
    var j=0;//判断年龄是否大于6岁
    var vaccine_year,vaccine_month,vaccine_day,s1,s2,baby_year,baby_month=null;
    var myDate = new Date();
    var birthday=$('.wrapper-y').children().eq(i).find('.get-age').html();
    var birthday_year=Number(birthday.substring(0,4));
    var birthday_month=Number(birthday.substring(5,7));
    var birthday_day=Number(birthday.substring(8,10));//得到宝宝出生的年月日
    var local_year=Number(myDate.getFullYear());
    var local_month=Number(myDate.getMonth()+1);//月份得到的数字是0-11
    var local_day=Number(myDate.getDate());
//    计算宝宝年龄
    if(local_day<birthday_day){
        if(local_month>birthday_month){
            baby_month=local_month-birthday_month-1;
            baby_year=local_year-birthday_year;
        }else{
            baby_month=local_month+11-birthday_month;
            baby_year=local_year-birthday_year-1;
        }
    }else{
        if(local_month<birthday_month){
            baby_month=local_month+12-birthday_month;
            baby_year=local_year-birthday_year-1;
        }else{
            baby_month=local_month -birthday_month;
            baby_year=local_year-birthday_year;
        }
    }
    //计算完成后显示样式
    if(baby_month==0){
        $('.wrapper-y .swiper-slide').eq(i).find('.baby-age').html(baby_year+'岁龄');
    }else if(baby_year==0){
        $('.wrapper-y .swiper-slide').eq(i).find('.baby-age').html(baby_month+'月龄');
    }else{
        $('.wrapper-y .swiper-slide').eq(i).find('.baby-age').html(baby_year+'岁'+baby_month+'月龄');
    }
//    计算疫苗时间&接种状态判断
    $('.vaccine-content').each(function(){
        //var monthCount=$(this).find('.vaccine-age').html().substring(0,2);
        //计算疫苗时间
        var monthCount_1=Number($(this).find('.vaccine-age').html().substring(0,1));
        var monthCount_2=$(this).find('.vaccine-age').html().substring(1,2);//以“岁”和“月”来进行判断，特殊处理18月龄
        if(monthCount_2=='月'){
            vaccine_month=birthday_month+monthCount_1;
            if(vaccine_month>12){
                vaccine_month -= 12;
                vaccine_year=birthday_year+1;
            }else{
                vaccine_year=birthday_year;
            }
        }else if(monthCount_2=='8'){
            vaccine_month=birthday_month+18;
            if(vaccine_month-12>12){
                vaccine_month -= 24;
                vaccine_year=birthday_year+2;
            }else{
                vaccine_month -= 12;
                vaccine_year=birthday_year+1;
            }
        }else if(monthCount_2=='岁'){
            vaccine_year=birthday_year+monthCount_1;
            vaccine_month=birthday_month;
        }else if(monthCount_2=='生'){
            vaccine_month=birthday_month;
            vaccine_year=birthday_year;
        }
        //特殊日期判断29,30,31日
        if(birthday_day==29){
            if((vaccine_year%4==0 && vaccine_year%100!=0)||(vaccine_year%100==0 && vaccine_year%400==0)){
                vaccine_day=birthday_day;
            }else{
                if(vaccine_month==2){
                    vaccine_day=28;
                }else{
                    vaccine_day=birthday_day;
                }
            }
        }else if(birthday_day==30){
            if(vaccine_month==2){
                if((vaccine_year%4==0 && vaccine_year%100!=0)||(vaccine_year%100==0 && vaccine_year%400==0)){
                    vaccine_day=29;
                }else{
                    vaccine_day=28;
                }
            }else{
                vaccine_day=birthday_day;
            }
        }else if(birthday_day==31){
            if(vaccine_month==2){
                if((vaccine_year%4==0 && vaccine_year%100!=0)||(vaccine_year%100==0 && vaccine_year%400==0)){
                    vaccine_day=29;
                }else{
                    vaccine_day=28;
                }
            }else if(vaccine_month==4||vaccine_month==6||vaccine_month==9||vaccine_month==11){
                vaccine_day=30;
            }else{
                vaccine_day=birthday_day;
            }
        }else{
            vaccine_day=birthday_day;
        }
        //判断是否小于10
        if(vaccine_day<10){
            vaccine_day="0"+vaccine_day;
        }
        if(vaccine_month<10){
            vaccine_month="0"+vaccine_month;
        }
        $(this).find('.vaccine-time').html(vaccine_year+'年'+vaccine_month+'月'+vaccine_day+'日');

    //    判断接种状态
        var vaccine_date=vaccine_year+'/'+vaccine_month+'/'+vaccine_day;
        var local_date=local_year+'/'+local_month+'/'+local_day;
        s1=new Date(vaccine_date);
        s2=new Date(local_date);
        var days=s1.getTime()-s2.getTime();
        var time=parseInt(days/(1000*60*60*24));
        if(time>0){
            if(z==0){//属于没有“应要接种”状态
                $('.wrapper-y .swiper-slide').eq(i).find('.toDay').html(time);//下次疫苗计算天数
                $(".vaccine").animate({scrollTop:h},200);//滚动至未接种
                z=z+1;//下次循环z从2开始，time的赋值不会出现错误
            }else if(z==1){//有“应要接种”状态，无需滚动
                $('.wrapper-y .swiper-slide').eq(i).find('.toDay').html(time);//下次疫苗计算天数
            }
            $(this).find('.vaccine-situation').html('未接种').addClass('vaccine-situation_2').removeClass('vaccine-situation_1 vaccine-situation_3');
            z++;
        }else if(time==0){
            $(this).find('.vaccine-situation').html('应要接种').addClass('vaccine-situation_3').removeClass('vaccine-situation_1 vaccine-situation_2');
            $(".vaccine").animate({scrollTop:h},200);//滚动至应要接种
            if(j==12){//如果刚好属于6岁
                $('.wrapper-y .swiper-slide').eq(i).find('.toDay').html(time);
            }
            z++;
        }else{
            $(this).find('.vaccine-situation').html('应已接种').addClass('vaccine-situation_1').removeClass('vaccine-situation_2 vaccine-situation_3');
            if(j==12){//已满6岁
                $('.wrapper-y .swiper-slide').eq(i).find('.toDay').html(0);
                $(".vaccine").animate({scrollTop:0},200);
            }
        }
        var paddingStr=$(this).css('padding-top');
        var borderStr=$(this).css('border-bottom');
        var padding=parseFloat(paddingStr.substring(0,paddingStr.length-2));
        var border=parseFloat(borderStr.substring(0,borderStr.length-2));
        h += ($(this).height()+padding+border);
        j++;
    });
}

//疫苗提醒
var j=1;
var mySwiperY = new Swiper('.swiper-y',{
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    initialSlide:0,
    loop:true,
    // scrollbarSnapOnRelease : true
});
mySwiperY.on('SlideChangeStart',function(){
     getTime(mySwiperY.activeIndex);
});

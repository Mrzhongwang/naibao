/**
 * Created by Administrator on 2016/9/12 0012.
 */
/*$('input').keyup(function(){
    if($.trim($(this).val())){
        $('.submit').css({'backgroundColor':'#00c20c','color':'#fff'})
    }else{
        $('.submit').css({'backgroundColor':'#d9d9d9','color':'#808080'})
    }
});*/
$(document).ready(function(){
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    }
});
function changeBackground(){
    if($.trim($(this).val())){
        $('.submit').css({'backgroundColor':'#00c20c','color':'#fff'})
    }else{
        $('.submit').css({'backgroundColor':'#d9d9d9','color':'#808080'})
    }
}
$('.tomask,.backgroundImg').on('click',function(){
   $('input').val('');
});
$('input').bind({
    keyup:changeBackground,
    focus:changeBackground,
    focusout:changeBackground
});

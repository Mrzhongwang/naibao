/**
 * Created by Administrator on 2016/9/8 0008.
 */
$(document).ready(function(){
    $('.ui-btn-inner').hide();
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    }
});
$('.getCode').on('click',function(){
    var regexp=/^1[34578]\d{9}$/;
    if(regexp.test($.trim($('.telephoneNumber ').val()))){ //判断是否填入正确手机号
        $(this).html('重新获取').css({'color':'#fff','backgroundColor':'#00c20c'}).hide();
        $('.codeTime').show();
        var i=60;
        var timer=setInterval(function(){
            i--;
            $('.codeTime b').html(i);
            if(i==0){
                $('.getCode').show();
                $('.codeTime').hide();
                window.clearInterval(timer);
                i=60;
                $('.codeTime b').html(i)
            }
        },1000)
    }
});
/*$('.code').keyup(function(){
    var regexp=/^1[34578]\d{9}$/;
    if($.trim($(this).val()) && regexp.test($.trim($('.telephoneNumber ').val()))){
        $('.submit').css({'color':'#fff','backgroundColor':'#00c20c'});
    }else{
        $('.submit').css({'color':'#808080','backgroundColor':'#d9d9d9'});
    }
    $('.ui-btn-inner').hide();
});*/
$('.telephoneNumber ').keyup(function(){
    var regexp=/^1[34578]\d{9}$/;
    if(regexp.test($.trim($('.telephoneNumber ').val()))){
        $('.getCode').css({'color':'#fff','backgroundColor':'#00c20c'});
    }
});
$('.code').bind({
    keyup:function(){
        var regexp=/^1[34578]\d{9}$/;
        if($.trim($(this).val()) && regexp.test($.trim($('.telephoneNumber ').val()))){
            $('.submit').css({'color':'#fff','backgroundColor':'#00c20c'});
        }else{
            $('.submit').css({'color':'#808080','backgroundColor':'#d9d9d9'});
        }
        $('.ui-btn-inner').hide();
    },
    focusout:function(){
        $('.ui-page').siblings().hide();
    }
});
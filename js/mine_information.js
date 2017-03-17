$(document).bind( "pagecreate", function( e ) {  
    $( "input, textarea, select", e.target ).attr( "data-" + $.mobile.ns + "role", "none" );  
});  
window.onload=function(){
	var height=screen.height;
    $('#mask').css('height',height);
    $('.ui-btn-inner').hide();
    $('.ui-loader').hide();
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    }
};

// 获取上传图片
/*document.getElementById( 'img').addEventListener( 'change', function () {
     var reader = new FileReader();
     reader.onload = function (e) {
          //调用图片压缩方法：compress();
     };
     reader.readAsDataURL(this.files[0]);
     console.log(this.files[0]);
     var fileSize = Math.round( this.files[0].size/1024/1024) ; //以M为单位
     //this.files[0] 该信息包含：图片的大小，以byte计算 获取size的方法如下：this.files[0].size;
}, false);*/

// 图片压缩代码
/*function compress(res,fileSize) { //res代表上传的图片，fileSize大小图片的大小
    var img = new Image(),
        maxW = 220; //设置最大宽度

    img.onload = function () {
        var cvs = document.createElement( 'canvas'),
            ctx = cvs.getContext( '2d');

        if(img.width > maxW) {
            img.height *= maxW / img.width;
            img.width = maxW;
        }

        cvs.width = img.width;
        cvs.height = img.height;

        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.drawImage(img, 0, 0, img.width, img.height);

        var compressRate = getCompressRate(1,fileSize);

        var dataUrl = cvs.toDataURL( 'image/jpeg', compressRate);

        document.body.appendChild(cvs);
        console.log(dataUrl);
    }

    img.src = res;
}

function getCompressRate(allowMaxSize,fileSize){ //计算压缩比率，size单位为MB
      var compressRate = 1;

      if(fileSize/allowMaxSize > 4){
           compressRate = 0.5;
      } else if(fileSize/allowMaxSize >3){
           compressRate = 0.6;
      } else if(fileSize/allowMaxSize >2){
           compressRate = 0.7;
      } else if(fileSize > allowMaxSize){
           compressRate = 0.8;
      } else{
           compressRate = 0.9;
      }

      return compressRate;
}*/

// 弹窗控制
/*$('.perMessage img').on('tap',function(){
	$('#mask').show();
	$('footer').show();
});
$('.cancel').on('tap',function(){
	$('#mask').hide();
	$('footer').hide();
});*/
$('section a h1').on('click',function(){
    $('input[type="text"]').val($(this).html());
    $('#mask').show();
    $('.changeName').show();
});
$('.bt_left').on('click',function(){
    $('#mask').hide();
    $('.changeName').hide();
});
//编辑姓名
$('.changeName p b').click(function(){
    $('input[type="text"]').val('').focus();
});
$('.bt_right').on('click',function(){
    var str=$('input[type="text"]').val();
    if($.trim(str).length >0){
        $('section a h1').html($.trim(str));
    }
    $('#mask').hide();
    $('.changeName').hide();
    return false;
});
//输入框事件
/*$('input[type="text"]').keyup(function(){
    var num=$(this).attr('limit');
    var str=$(this).val();
    if(str.length>num){
        $(this).val(str.substring(0,num));
    }else{
        $(this).val(str);
    }
});*/
$('input[type="text"]').bind({
    keyup:function() {
        var num = $(this).attr('limit');
        var str = $(this).val();
        if (str.length > num) {
            $(this).val(str.substring(0, num));
        } else {
            $(this).val(str);
        }
    },
    focus:function(){
        $('.changeName').animate({top:'-8.16rem'},150);
        //$('.changeName').css({'top':'-8.16rem'});
    },
    focusout:function(){
        $('.changeName').animate({top:'-6.16rem'},150);
        //$('.changeName').css({'top':'-6.16rem'});
    }
});

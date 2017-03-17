// JavaScript Document
$(document).ready(function(e) {
	$(".li_center").click( function(){
		$(".Float").hide(200);
		$(".entry").show(200);
	})
	
    $(".entry_text input").focus( function(){
		$(this).val("");
		$(this).css("text-indent","0px");
		$(this).css("color","#4c4c4c");
	})
	
	$(".entry_text input").blur( function(){
		if($(".entry_text input").val()==""){
			$(this).css("text-indent","2.06rem");
			$(this).css("color","#b2b2b2");
			$(this).val("请输入您的评论");
		}
	})
	
	$(".sbumit").click( function(){
		if($(".entry_text input").val()=="请输入您的评论"){		
			return false;
		}else{
			setTimeout(function(){
				$(".entry").hide(200);
				$(".Float").show(200);
			},500)
			
		}
	})
	
	var i=1;
	$(".ft_mian").hide();
	$(".ft_mian").eq(0).show();
	$(".ft_mian").eq(1).show();
	$(".last").click( function(){
		i=i+1;
		$(".ft_mian").eq(i).show();
		i=i+1;
		$(".ft_mian").eq(i).show();
	})
	
	var k=true;
	$(".collection_img").click( function(){
		if(k==true){
			$(".collection_img img")[0].src="img/collection3.png";
			k=false;
		}else{
			$(".collection_img img")[0].src="img/collection.png";
			k=true;
		}
	})
	
	
	
});























































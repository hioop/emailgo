emailgo
=======

用户找回密码或者用户注册时，使用邮箱进行验证，根据邮箱地址进行自动跳转到相应的emaile网站


(function(){
	$(document).ready(function(){
		$("#link_login_email").on("click",function(){
			var addr = email.split("@")[1];
			var href = "";
			if(addr == "gmail.com"){
				href = "http://mail.google.com";
			}else{
				href="http://mail."+addr;
			}
			$(".reg-succ .lay-btn a").attr("href",href);
		});
	});
	
})();

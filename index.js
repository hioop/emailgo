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

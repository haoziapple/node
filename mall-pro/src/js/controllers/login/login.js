var $ = require("jquery");
require("../../../../common/validator.config.js");
var com = require("../../../../common/common.js");
var md5 = require("md5");
var $userName = $('#userName'),
	$passWord = $('#passWord');
var $loginForm = $('#loginForm');

$(".sa_ma, .mm_login").click(function(){
    $(".login_sj").css({"display":"block"});
    $(".login_sm").css({"display":"none"});
})
$(".sj_ma").click(function(){
    $(".login_sm").css({"display":"block"});
    $(".login_sj").css({"display":"none"});
})
$("#clear").click(function(){
    clearForm();
})

function clearForm() {
	$userName.val('');
    $passWord.val('');
}

// 初始化验证
$loginForm.validator({
    fields: {
        'userName': 'required;mobile',
        'passWord': 'required;password'
    }
});
$('#loginBtn').click(function(){
	//判断验证
	if ($loginForm.isValid()) {
		com.ajax(
		"/fzjt_aquatic_write/login/account", 
		{
			userName: $userName.val(),
			passWord: md5($passWord.val())
		}).then(function(res){	//成功的回调
			com.setItem("tokenId", res.tokenId);
			window.location.href = "index.html";
		}).catch(function(res){	//失败的回调
			if (res.code === "100001") {
				alert(res.desc);
				window.location.href = "registerOne.html";
			}
			if (res.code === "100002") {
				alert(res.desc);
			}
			if (res.code === "100003") {
				alert(res.desc);
				clearForm();
			}
		});
	}
});

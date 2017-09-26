var $ = require("jquery");
var com = require("../../../../common/common.js");

//ajax返回处理的数据
var bannerTmpData = [],
	shopTmpData = [],
	menuTmpData = [];

$.ajax({
	url: "http://10.108.26.164:8080/server/fzjt_aquatic_read/pcCollect/pcCollectList",
	async: true,
	contentType: "application/json",
	dataType: "json",
	type: "post",
	data: JSON.stringify({
		tokenId: com.getItem("tokenId")
	}),
	success: function(res){
		console.log(res);
	}
});

/*
*	渲染模板
*/
//banner
var bannerTmp = require("../../../hbs/index/banner.hbs");
$('#bannerHTML').html(bannerTmp({"banner": bannerTmpData}));
//金牌商户
var shopTmp = require("../../../hbs/index/shop.hbs");
$('#index_shop').html(shopTmp({"shops": shopTmpData}));
//menu
var menuTmp = require("../../../hbs/index/menu.hbs");
$('#index_menu').html(shopTmp({"firstMenu": menuTmpData}));


require("./index_banner");
require("./index_action");


var $ = require("jquery");
$(".index_nav>li").click(function(){
	$(this).addClass("index_nav_click").siblings().removeClass("index_nav_click");
});
/*主页轮播*/
var index_banner_width=$(".index_banner").width();
$(".index_banner").height(index_banner_width/3.84);
$(window).resize(function(){
	var index_banner_width=$(".index_banner").width();
	$(".index_banner").height(index_banner_width/3.84);
});
/*帮助中心-侧边导航*/
$(".help_connav_jbq").click(function(){
	$(this).addClass("help_connav_jbq_click").siblings().removeClass("help_connav_jbq_click");
});
//商品详情页-选择购买型号
$(".spxq_concz_lbchoose_list>li").click(function(){
	$(this).addClass("spxq_concz_lbchoose_list_click").siblings().removeClass("spxq_concz_lbchoose_list_click");
});

//商品详情-图片切换
spxqPic();
function spxqPic(){
	var spxq_concz_smallimgbox_list_len=$(".spxq_concz_smallimgbox_list>li").length;
	$(".spxq_concz_smallimgbox_list").width(spxq_concz_smallimgbox_list_len*92+"px");
	var spxq_small_num=0;
	$(".spxq_rightimg").click(function(){
		spxq_small_num++;
		if(spxq_small_num>=spxq_concz_smallimgbox_list_len-5){
			spxq_small_num=spxq_concz_smallimgbox_list_len-5;
		}
		left=-92*spxq_small_num+"px";
		$(".spxq_concz_smallimgbox_list").css({"left":left});
	});
	$(".spxq_leftimg").click(function(){
		spxq_small_num--;
		if(spxq_small_num<=0){
			spxq_small_num=0;
		}
		left=-92*spxq_small_num+"px";
		$(".spxq_concz_smallimgbox_list").css({"left":left});
	});
	$(".spxq_concz_smallimgbox_list>li").click(function(){
		$(this).addClass("spxq_concz_smallimgbox_list_click").siblings().removeClass("spxq_concz_smallimgbox_list_click");
		var index=$(this).index();
		$(".spxq_concz_bigimg_list>li").eq(index).addClass("display_block").siblings().removeClass("display_block");
	});
}
//商品详情-计算
$(".spxq_ccbox_listjjbox_prev").click(function(){
	var num=$(this).next().val();
	num--;
	if(num<=0){
		$(this).next().removeClass("spxq_ccbox_listjjbox_text2");
		$(this).removeClass("spxq_ccbox_listjjbox_prev2");
		num=0;
	}
	$(this).next().val(num);
});
$(".spxq_ccbox_listjjbox_add").click(function(){
	var num=$(this).prev().val();
	num++;
	if(num>0){
		$(this).prev().addClass("spxq_ccbox_listjjbox_text2");
		$(this).parents(".spxq_ccbox_listjjbox").find(".spxq_ccbox_listjjbox_prev").addClass("spxq_ccbox_listjjbox_prev2");
	}
	$(this).prev().val(num);
});
$(".spxq_ccbox_listjjbox_text").keyup(function(){
	if($(this).val()>0){
		$(this).addClass("spxq_ccbox_listjjbox_text2");
		$(this).prev().addClass("spxq_ccbox_listjjbox_prev2");
	}
	else if($(this).val()<=0){
		$(this).val("0");
		$(this).removeClass("spxq_ccbox_listjjbox_text2");
		$(this).prev().removeClass("spxq_ccbox_listjjbox_prev2");
	}
})
//商品详情-下拉选择
$(".spxq_ccbox_xlchoose").click(function(){
	$(this).find("img").toggleClass("display_none");
	$(this).parents(".spxq_ccbox").toggleClass("spxq_ccbox2");
});
if($(".spxq_ccbox_list>li").length<=3){
	$(".spxq_ccbox").removeClass("spxq_ccbox2");
	$(".spxq_ccbox_xlchoose").addClass("display_none");
}

//商品详情-商品分类切换
$(".spxq_spflbox_splfont_sl").click(function(){
	$(this).parents(".spxq_spflbox_splfont").find("img").toggleClass("display_inline");
	$(this).parents(".spxq_spflbox_spl").find(".spxq_spflbox_spllist").toggleClass("display_block");
});
//商品详情-详情介绍选择
$(".spxq_conjsboxright_toplist>li").click(function(){
	$(this).addClass("spxq_conjsboxright_toplist_click").siblings().removeClass("spxq_conjsboxright_toplist_click");
});
//发票管理左侧导航栏
$(".receipt_conboxleft_list>li").click(function(){
	$(this).addClass("receipt_conboxleft_list_click").siblings().removeClass("receipt_conboxleft_list_click");
});
//发票弹窗关闭
$(".receipt_tcclose").click(function(){
	$(this).parents(".fixed_tc").css({"display":"none"});
});

//收货地址-select下拉框
$(".receipt_table_sel").change(function(){
	$(this).addClass("receipt_table_sel_change");
});
//个人中心首页-图片溢出判断
$(".pece_myddbox_list_pic").each(function(){
	if($(this).find("span").length>3){
		$(this).next().addClass("visibility_visible");
	}
	else{
		$(this).next().removeClass("visibility_visible");
	}
});
//个人中心首页-我收藏的货品
$(".pece_myddlb_list").each(function(){
	var num=$(this).find("li").length;
	$(this).width(num*192);
	return num;
});

var moveNum=0;
$("#pece_myds_right").click(function(){
	moveNum++;
	var moveNumhp=$(this).parents(".pece_myddlb").find(".pece_myddlb_list").children("li").length;

	if(moveNum>=moveNumhp-5){
		moveNum=moveNumhp-5;
	}
	var left=-192*moveNum+"px"; 
	$("#pece_myddlb_list").css({"left":left});
});
$("#pece_myds_left").click(function(){
	moveNum--;
	var moveNumhp=$(this).parents(".pece_myddlb").find(".pece_myddlb_list").children("li").length;

	if(moveNum<=0){
		moveNum=0;
	}
	var left=-192*moveNum+"px"; 
	$("#pece_myddlb_list").css({"left":left});
});

//我收藏的商家
var moveNumsj=0;
$("#pece_mysj_right").click(function(){
	moveNumsj++;
	var moveNumhp=$(this).parents(".pece_myddlb").find(".pece_myddlb_list").children("li").length;

	if(moveNumsj>=moveNumhp-5){
		moveNumsj=moveNumhp-5;
	}
	var left=-192*moveNumsj+"px"; 
	$("#pece_mysj_list").css({"left":left});
});
$("#pece_mysj_left").click(function(){
	moveNumsj--;
	var moveNumhp=$(this).parents(".pece_myddlb").find(".pece_myddlb_list").children("li").length;

	if(moveNumsj<=0){
		moveNumsj=0;
	}
	var left=-192*moveNumsj+"px"; 
	$("#pece_mysj_list").css({"left":left});
});

//个人中心首页-推荐购买-刷新
/*var pece_myddbox_sx_rotate=0;
$(".pece_myddbox_sx").click(function(){
	pece_myddbox_sx_rotate+=1080;
	$(this).css({"transform":"rotate("+pece_myddbox_sx_rotate+"deg)"})
})
*/
//个人中心-搜藏夹-tab切换
$(".pecescj_top_list>li").click(function(){
	$(this).addClass("pecescj_top_list_click").siblings().removeClass("pecescj_top_list_click");
	var index=$(this).index();
	$(".pecescj_contab_list>li").eq(index).addClass("display_block").siblings().removeClass("display_block");
})
//个人中心-收藏夹-批量操作
$(".pecescj_contab_listqpalltop_sz").click(function(){
	$(this).find("img").toggleClass("display_none");
});
$(".pecescj_contab_listqpalltop_czbtn").click(function(){
	$(this).addClass("display_none");
	$(".pecescj_contab_listqpalltop_plcz").addClass("display_block");
	$(".pecescj_qbdpbox_pl").addClass("display_block");
});
$(".pecescj_contab_listqpalltop_wcbtn").click(function(){
	$(this).parents(".pecescj_contab_listqpalltop_plcz").removeClass("display_block");
	$(".pecescj_contab_listqpalltop_czbtn").removeClass("display_none");
	$(".pecescj_qbdpbox_pl").removeClass("display_block");

});
$(".pecescj_qbdpbox_pl").find("img").click(function(){
	$(this).parents(".pecescj_qbdpbox_pl").find("img").toggleClass("display_block");
	$(this).parents(".pecescj_qbdpbox_pl").toggleClass("pecescj_qbdpbox_pl2");
});
//个人中心-收藏夹-货品-点击更多
$(".schp_allfllist_more").click(function(){
	$(".schp_allfllist").addClass("schp_allfllist_clickmore");
});
//个人中心-买家头部切换
$(".receipt_sslist > .receipt_xz").click(function(){
	$(this).addClass("receipt_sslist_click").siblings().removeClass("receipt_sslist_click");
});
//商家首页-左侧-货品排行榜切换
$(".spindex_phnavbox_list>li").click(function(){
	$(this).addClass("spindex_phnavbox_list_click").siblings().removeClass("spindex_phnavbox_list_click");
	var index=$(this).index();
	$(".spindex_phconcj").eq(index).addClass("display_block").siblings().removeClass("display_block");
});


//进货单-我的收藏轮播
$(".jhd_sclist").each(function(){
	var jhd_sclist_num=$(this).find("li").length;
	$(this).width(jhd_sclist_num*238);
});
var jhdSclistMovenum=0;
$(".jhd_scbox_right").click(function(){
	jhdSclistMovenum++;
	var kjdMovenum=$(this).parents(".jhd_scbox").find(".jhd_sclist").children("li").length;

	if(jhdSclistMovenum>=kjdMovenum-5){
		jhdSclistMovenum=kjdMovenum-5;
	}
	var left=-238*jhdSclistMovenum+"px"; 
	$(".jhd_sclist").css({"left":left});
});
$(".jhd_scbox_left").click(function(){
	jhdSclistMovenum--;
	var kjdMovenum=$(this).parents(".jhd_scbox").find(".jhd_sclist").children("li").length;
	if(jhdSclistMovenum<=0){
		jhdSclistMovenum=0;
	}
	var left=-238*jhdSclistMovenum+"px"; 
	$(".jhd_sclist").css({"left":left});
});


---
title: 耗子的贴图空间
noDate: 'true'
---

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<!--<script src="/js/jquery-2.1.0.min.js"></script>-->
<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

# 个人相册
<style>
	.myPhotosList {
		display: inline-flex;
	}
	.photo {
		height: 250px;
	}
	.nav>li>a {
    position: static;
    display: block;
    padding: 0px 0px 0px 48px;
}
</style>

<div class="img-box">
</div>

<div>
	<ul class="pagination myPhotosList">
		<li class="mylist"><a href="#">1</a></li>
	</ul>
</div>

<script src="/js/photo-private.js"></script>
<script>
$("li.mylist").click(function () {
    console.log($(this).text());
	loadMyPhotos($(this).text());
});
</script>
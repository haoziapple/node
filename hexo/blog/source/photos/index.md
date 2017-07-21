---
title: 耗子的贴图空间
noDate: 'true'
---

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<script src="/js/bootstrap.min.js"></script>

# 个人相册
<style>
	.myPhotosList {
		display: inline-flex;
	}
</style>

<div class="img-box">
</div>

<div>
	<ul class="pagination myPhotosList">
		<li class="mylist"><a href="#">1</a></li>
	</ul>
</div>

<script src="/js/photo.js"></script>
<script>
$("li.mylist").click(function () {
    console.log($(this).text());
	loadMyPhotos($(this).text());
});
</script>
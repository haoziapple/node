---
title: photos
noDate: 'true'
---

<!-- <ul>
<li><div class="img-box">
<a class="img-bg" rel="example_group" href="http://osus8erpv.bkt.clouddn.com/avtar.jpg?raw=true"></a>
<img src="http://osus8erpv.bkt.clouddn.com/avtar.jpg?raw=true" />
</li>
</ul> -->

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<!-- <link type="text/css" href="/fancybox/jquery.fancybox.css" rel="stylesheet"> -->
<link href="/css/bootstrap.min.css" rel="stylesheet">
<script src="/js/bootstrap.min.js"></script>


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
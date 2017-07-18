'use strict';

function loadMyPhotos(page) {
    var offset = 20;
    var start = (page - 1) * offset;
    var end = start + offset;


    $.getJSON("output.json", function (data) {
        console.log(data);
        var li = "";
        var rowNum = 1;
        // 清空img-box
        $(".img-box").html("")
        // 初始化第一行图片
        var row = '<div class="img-box-ul' + rowNum + ' row"></div>';
        $(".img-box").append(row);
        for (var i = start; i < end && i < data.length; i++) {
            // 载入row中的图片
            li = '<div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">' +
                '<img class="img-responsive" src="http://osus8erpv.bkt.clouddn.com/' + data[i] + '?raw=true" />' +
                '</div>';
            $(".img-box-ul" + rowNum).append(li);

            // 每行4张图片
            if ((i + 1) % 4 == 0) {
                rowNum += 1;
                row = '<div class="img-box-ul' + rowNum + ' row"></div>';
                $(".img-box").append(row);
            }
        };
    });
};

$.ajaxSettings.async = false;
$.getJSON("output.json", function (data) {
    console.log(data);
    var li = "";
    var rowNum = 1;
    var page = 1;
    for (var i = 0; i < 20 && i < data.length; i++) {
        li = '<div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">' +
            '<img class="img-responsive" src="http://osus8erpv.bkt.clouddn.com/' + data[i] + '?raw=true" />' +
            '</div>';
        $(".img-box-ul" + rowNum).append(li);
        if ((i + 1) % 4 == 0) {
            rowNum += 1;
            var row = '<div class="img-box-ul' + rowNum + ' row"></div>';
            $(".img-box").append(row);
        }
        if ((i + 1) % 20 == 0) {
            page += 1;
            var tab = '<li class="mylist"><a href="#">' + page + '</a></li>';
            $("ul.pagination").append(tab);
        }
    };
});


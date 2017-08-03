$("h1").click(function () {
    $.ajax({
        crossDomain: true,
        type: "post",
        data: "{\"examKey\": \"string\",\"userCode\": \"string\",\"userKey\": \"string\"}",
        dataType: "json",
        contentType: "application/json",
        url: "http://10.108.26.61:8081/starter/order/test",
        //http://10.108.26.61:8081/starter/order/submit
        //http://10.108.26.113:8080/fyctb-service/api/shareInfo/queryShareInfo
        success: function (ret) {
            console.log(ret);
        },
        error: function (ret) {
            console.log(ret);
        }
    });
});
$("h1").click(function () {
    $.ajax({
        crossDomain: true,
        type: "get",
        data: "{\"examKey\": \"string\",\"userCode\": \"string\",\"userKey\": \"string\"}",
        dataType: "json",
        contentType: "application/json",
        url: "http://localhost:8080/api/allJobs", 
        // "http://10.108.26.61:8081/starter_service/pc/order/test",
        //http://10.108.26.61:8081/starter/order/submit
        //http://10.108.26.113:8080/fyctb-service/api/shareInfo/queryShareInfo
        //http://localhost:8080/api/allJobs
        success: function (ret) {
            console.log(ret);
        },
        error: function (ret) {
            console.log(ret);
        }
    });
});
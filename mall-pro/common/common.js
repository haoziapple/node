var $ = require('jquery');
var config = require("./config.js");
window.server = "http://"+ config.host + ":8080/server";
var commonObj = {
	setItem: function (key, value) {
		var arrDisplay = [0, 1, 1, 1];
		//存储，IE6~7 cookie 其他浏览器HTML5本地存储
		if (window.localStorage) {
		    localStorage.setItem(key, value);	
		} else {
		   
		}
	},
	getItem: function (key) {
		return window.localStorage? localStorage.getItem(key): Cookie.read(key);
	},
	clearItem: function (key) {
		if (window.localStorage) {
		    localStorage.clearItem(key);	
		} else {
		   
		}
	},
	ajax: function(url, data, callback) {
	  return new Promise(function (resolve, reject) {
	    $.ajax({
	      url: server + url,
	      type: data == null ? 'GET' : 'POST',
	      dataType: "json",
	      contentType: "application/json",
	      data: data == null ? '' : JSON.stringify(data),
	      async: true,
	      success: function (resp) {
	        if(resp.code === "0"){
                resolve(resp);//在异步操作成功时调用
            }else{
                reject(resp);//在异步操作失败时调用
            }
	      }
	    });
	  });
	}
}
module.exports = commonObj;
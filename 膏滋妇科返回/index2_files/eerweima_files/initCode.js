var baseCodeUrl='http://statics.yirongtang.cn/';var jsKey='d7d08b48-0fd9-4cc7-a155-e1b2e04814ba';var adwxNo=['陈敏玲','黄厚杰','赖艳华','蓝国权','李敦科','李桂成','李祝南','林钦伟','欧洁妮','温庭武','吴松伟','熊钰','张松波','张伟珍','朱元宾'];var adcodeImage=['陈敏玲.jpg','黄厚杰.jpg','赖艳华.jpg','蓝国权.jpg','李敦科.jpg','李桂成.jpg','李祝南.jpg','林钦伟.jpg','欧洁妮.jpg','温庭武.jpg','吴松伟.jpg','熊钰.jpg','张松波.jpg','张伟珍.jpg','朱元宾.jpg'];var spreadId='1670';var url='http://oa.mxingkong.cn/';var adi=parseInt(Math.random()*(adwxNo.length));var adiWxNo=adwxNo[adi];var referrer=encodeURIComponent(document.referrer);var adiCodeImage=adcodeImage[adi];var stxlwx = "<span class='J_wxno'>"+adiWxNo+"</span>";var wx_img = "<img class='adCode'  src='"+baseCodeUrl+"static/"+jsKey+"/"+adiCodeImage+"?r="+Math.random()+"'>";var wx_img_no = "<img   src='"+baseCodeUrl+"static/"+jsKey+"/"+adiCodeImage+"?r="+Math.random()+"'>";var startTime = (new Date()).valueOf();var timeOutEvent = 0; $(function(){	if(getCookie("clickCode"+spreadId) == null){		setCookie("clickCode"+spreadId, 1, 15);		setTimeout("loadClick()",1000);	}	$("body").on("touchstart",".adCode",function(e){		if(getCookie("spreadCode"+spreadId) == null){			setCookie("spreadCode"+spreadId, 1, 15);			timeOutEvent=setTimeout("addClick(1)",700);		}	});	$("body").on("touchmove",".adCode",function(e){		clearTimeout(timeOutEvent); 		timeOutEvent = 0; 	});	$("body").on("touchend",".adCode",function(e){		clearTimeout(timeOutEvent);	    return false; 	});	$("body").on("touchstart",".J_wxno",function(e){		if(getCookie("spreadWx"+spreadId) == null){			setCookie("spreadWx"+spreadId, 1, 15);			setTimeout("addClick(2)",1000);		}	});	$("body").on("touchmove",".J_wxno",function(e){		clearTimeout(timeOutEvent); 		timeOutEvent = 0; 	});	$("body").on("touchend",".J_wxno",function(e){		clearTimeout(timeOutEvent);	    return false; 	});	var ing=0;		$("body").on("touchmove",function(e){			ing=1;		});		$('body').on("touchend",function(e){			if(ing==1){				addScroll();			}		});});function loadClick(){	var jsonUrl=url+'spread/loadClick?referrer='+referrer+'&spreadId='+spreadId;	$.getJSON(jsonUrl,function(data){},"json");}function addScroll(){	if(getQueryString("userId")&&getQueryString("ptSource")){		var jsonUrl=url+'spread/addScroll?userId='+getQueryString("userId")+"&ptSource="+getQueryString("ptSource");		$.getJSON(jsonUrl,function(data){},"json");	}}function addClick(type){	var jsonUrl=url+'spread/addClick?referrer='+referrer+'&spreadId='+spreadId+"&wxNo="+adiWxNo+"&type="+type+"&stayTime="+((new Date()).valueOf()-startTime);	jsonUrl += "&userId="+getQueryString("userId")+"&ptSource="+getQueryString("ptSource");	$.getJSON(jsonUrl,function(data){},"json");}function setCookie(name,value,days){    var exp=new Date();    exp.setTime(exp.getTime() + days*24*60*60*1000);    if(value){        document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString()+";path=/";    }}function getCookie(name){    var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));    if(arr!=null){        return unescape(arr[2]);    }    return null;}function getQueryString(name) {    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');    var r = window.location.search.substr(1).match(reg);    if (r != null) {        return unescape(r[2]);    }    return "";}
function Weibo(){
  this.ajax_method = 'GET';
}
Weibo.prototype = {   //获取数据，重新画表
  call_sync_ajax_request:function(url, method, callback){
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      async: false,
      success:callback
    });
  },

Draw_content:function(data){
	console.log(data);
	var html = '';
	$('#weibo_text').empty();
	if(data==''){
		html += "该时段用户未发布任何微博";
	}else{
		html += data;
	}
	$('#weibo_text').append(html);
  }
}

var date = '';
var time = '';
var dateStr = '';
var ts = '';
date = $('#select_date').val();
time = $('#select_time').val();
dateStr = '2015-'+date+' '+time+':00';
ts = get_unix_time(dateStr);
url ="/weibo/show_user_weibo_ts/?uid="+parent.personalData.uid+"&ts="+ts;
console.log(url);
var Weibo = new Weibo();
Weibo.call_sync_ajax_request(url, Weibo.ajax_method, Weibo.Draw_content);
$('#select_date').change(function(){
	date = $('#select_date').val();
	dateStr = '2015-'+date+' '+time+':00';
	ts = get_unix_time(dateStr);
	url ="/weibo/show_user_weibo_ts/?uid="+parent.personalData.uid+"&ts="+ts;
	console.log(url);
	Weibo.call_sync_ajax_request(url, Weibo.ajax_method, Weibo.Draw_content);
})
$('#select_time').change(function(){
	 time = $('#select_time').val();
	 dateStr = '2015-'+date+' '+time+':00';
	 ts = get_unix_time(dateStr);
	 url ="/weibo/show_user_weibo_ts/?uid="+parent.personalData.uid+"&ts="+ts;
	 console.log(url);
	 Weibo.call_sync_ajax_request(url, Weibo.ajax_method, Weibo.Draw_content);
})
//dateStr = '2015-'+date+' '+time+':00';
//console.log(dateStr);
//dateStr = '2014-05-08 00:22:11 ';
function get_unix_time(dateStr){
    var newstr = dateStr.replace(/-/g,'/'); 
    var date =  new Date(newstr); 
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}


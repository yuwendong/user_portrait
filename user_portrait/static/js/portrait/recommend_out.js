function Search_weibo_recommend(url, div){
  that = this;
  this.ajax_method = 'GET';
  this.url = url;
  this.div = div;
}

Search_weibo_recommend.prototype = {
  call_sync_ajax_request:function(url, method, callback){
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      async: false,
      success:callback
    });
  },

  Draw_table: function(data){
    //console.log(data);
    var div = that.div
    //console.log(div);
    $(div).empty();
    var user_url ;
    //console.log(user_url);
    html = '';
    html += '<table id="recommend_table_new" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>uid</th><th>昵称</th><th>性别</th><th>注册地</th><th>关注数</th><th>粉丝数</th><th>影响力</th><th>' + '<input name="recommend_all" id="recommend_all" type="checkbox" value="" onclick="recommend_all()" />' + '</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = window.location.href;
      user_url = user_url + item[i];
      html += '<tr>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i] +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center"><input name="in_status" class="in_status" type="checkbox" value="' + item[i] + '" /></td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
  },
  Re_Draw_table: function(data){
    //console.log(data);
    var div = that.div
    //console.log(div);
    $(div).empty();
    var user_url ;
    //console.log(user_url);
    html = '';
    html += '<table id="recommend_table_new" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>uid</th><th>昵称</th><th>性别</th><th>注册地</th><th>关注数</th><th>粉丝数</th><th>影响力</th><th>' + '<input name="recommend_all" id="recommend_all" type="checkbox" value="" onclick="recommend_all()" />' + '</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = window.location.href;
      user_url = user_url + item[i];
      html += '<tr>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i] +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center"><input name="in_status" class="in_status" type="checkbox" value="' + item[i] + '" /></td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
    $('#recommend_table_new').dataTable({
        "sDom": "<'row'<'col-md-6'l ><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ 每页"
        }
    });
  }
}

function Search_weibo_history(url, div){
  that = this;
  this.ajax_method = 'GET';
  this.url = url;
  this.div = div;
}

Search_weibo_history.prototype = {
  call_sync_ajax_request:function(url, method, callback){
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      async: false,
      success:callback
    });
  },

  Draw_table: function(data){
    //console.log(data);
    var div = that.div
    //console.log(div);
    $(div).empty();
    var user_url ;
    //console.log(user_url);
    html = '';
    html += '<table id="history_table_new" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>uid</th><th>昵称</th><th>性别</th><th>注册地</th><th>关注数</th><th>粉丝数</th><th>影响力</th><th>' + '<input name="history_all" id="history_all" type="checkbox" value="" onclick="history_all()" />' + '</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = window.location.href;
      user_url = user_url + i;
      html += '<tr>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i] +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center"><input name="history_status" class="history_status" type="checkbox" value="' + item[i] + '" /></td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
  },
  Re_Draw_table: function(data){
    //console.log(data);
    var div = that.div
    //console.log(div);
    $(div).empty();
    var user_url ;
    //console.log(user_url);
    html = '';
    html += '<table id="history_table_new" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>uid</th><th>昵称</th><th>性别</th><th>注册地</th><th>关注数</th><th>粉丝数</th><th>影响力</th><th>' + '<input name="history_all" id="history_all" type="checkbox" value="" onclick="history_all()" />' + '</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = window.location.href;
      user_url = user_url + i;
      html += '<tr>';
      html += '<td class="center"><a href='+ user_url+ '>'+ 3211231 +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center">'+ '' +'</td>';
      html += '<td class="center"><input name="history_status" class="history_status" type="checkbox" value="' + item[i] + '" /></td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
    $('#history_table_new').dataTable({
        "sDom": "<'row'<'col-md-6'l ><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ 每页"
        }
    });
  }
}

var url_recommend = '/recommentation/show_out/?date=2013-09-07';
draw_table_recommend = new Search_weibo_recommend(url_recommend, '#recommend');
draw_table_recommend.call_sync_ajax_request(url_recommend, draw_table_recommend.ajax_method, draw_table_recommend.Draw_table);

var url_history = '/recommentation/history_delete/?date=2013-09-07';
draw_table_history = new Search_weibo_history(url_history, '#history');
draw_table_history.call_sync_ajax_request(url_history, draw_table_history.ajax_method, draw_table_history.Draw_table);

function recommend_button(){
  var recommend_uids = [];
  $('input[name="in_status"]:checked').each(function(){
      recommend_uids.push($(this).attr('value'));
      //$(this).parent().parent().remove();
  })
  console.log(recommend_uids);
}

function history_button(){
  var history_uids = [];
  $('input[name="history_status"]:checked').each(function(){
      $(this).attr('disabled',true);
      history_uids.push($(this).attr('value'));
  })
  console.log($("#history_date_select").val());
  console.log(history_uids);
}

var tomorrow = new Date(2013,8,8);
var recommend_date = [];
for(var i=0;i<7;i++){
  var today = new Date(tomorrow-24*60*60*1000*(7-i));
  recommend_date[i] = today.getFullYear()+"-"+((today.getMonth()+1)<10?"0":"")+(today.getMonth()+1)+"-"+((today.getDate())<10?"0":"")+(today.getDate());
}
$("#recommend_date").empty();
var recommend_date_html = '';
recommend_date_html += '<select id="recommend_date_select">';
recommend_date_html += '<option value="' + recommend_date[0] + '">' + recommend_date[0] + '</option>';
recommend_date_html += '<option value="' + recommend_date[1] + '">' + recommend_date[1] + '</option>';
recommend_date_html += '<option value="' + recommend_date[2] + '">' + recommend_date[2] + '</option>';
recommend_date_html += '<option value="' + recommend_date[3] + '">' + recommend_date[3] + '</option>';
recommend_date_html += '<option value="' + recommend_date[4] + '">' + recommend_date[4] + '</option>';
recommend_date_html += '<option value="' + recommend_date[5] + '">' + recommend_date[5] + '</option>';
recommend_date_html += '<option value="' + recommend_date[6] + '" selected="selected">' + recommend_date[6] + '</option>';
recommend_date_html += '</select>';
$("#recommend_date").append(recommend_date_html);

var history_date = [];
for(var i=0;i<7;i++){
  var today = new Date(tomorrow-24*60*60*1000*(7-i));
  history_date[i] = today.getFullYear()+"-"+((today.getMonth()+1)<10?"0":"")+(today.getMonth()+1)+"-"+((today.getDate())<10?"0":"")+(today.getDate());
}
$("#history_date").empty();
var history_date_html = '';
history_date_html += '<select id="history_date_select">';
history_date_html += '<option value="' + history_date[0] + '">' + history_date[0] + '</option>';
history_date_html += '<option value="' + history_date[1] + '">' + history_date[1] + '</option>';
history_date_html += '<option value="' + history_date[2] + '">' + history_date[2] + '</option>';
history_date_html += '<option value="' + history_date[3] + '">' + history_date[3] + '</option>';
history_date_html += '<option value="' + history_date[4] + '">' + history_date[4] + '</option>';
history_date_html += '<option value="' + history_date[5] + '">' + history_date[5] + '</option>';
history_date_html += '<option value="' + history_date[6] + '" selected="selected">' + history_date[6] + '</option>';
history_date_html += '</select>';
$("#history_date").append(history_date_html);

/*
function recommend_date_button(){
  console.log($("#recommend_date_select").val());
  var url_recommend_new = '/recommentation/show_out/?date=' + $("#recommend_date_select").val();
  //console.log(url_recommend_new);
  draw_table_recommend_new = new Search_weibo_recommend(url_recommend_new, '#recommend');
  draw_table_recommend_new.call_sync_ajax_request(url_recommend_new, draw_table_recommend_new.ajax_method, draw_table_recommend_new.Draw_table);
}

function history_date_button(){
  console.log($("#history_date_select").val());
  var url_history_new = '/recommentation/show_out_history/?date=' + $("#history_date_select").val();
  //console.log(url_history_new);
  draw_table_history_new = new Search_weibo_history(url_history_new, '#history');
  draw_table_history_new.call_sync_ajax_request(url_history_new, draw_table_history_new.ajax_method, draw_table_history_new.Draw_table);
}
*/

$('#recommend_date_button').click(function(){
  console.log($("#recommend_date_select").val());
  var url_recommend_new = '/recommentation/show_out/?date=' + $("#recommend_date_select").val();
  //console.log(url_recommend_new);
  draw_table_recommend_new = new Search_weibo_recommend(url_recommend_new, '#recommend');
  draw_table_recommend_new.call_sync_ajax_request(url_recommend_new, draw_table_recommend_new.ajax_method, draw_table_recommend_new.Re_Draw_table);
});

$('#history_date_button').click(function(){
  console.log($("#history_date_select").val());
  var url_history_new = '/recommentation/history_delete/?date=' + $("#history_date_select").val();
  //console.log(url_history_new);
  draw_table_history_new = new Search_weibo_history(url_history_new, '#history');
  draw_table_history_new.call_sync_ajax_request(url_history_new, draw_table_history_new.ajax_method, draw_table_history_new.Re_Draw_table);
});

function recommend_all(){
  $('input[name="in_status"]:not(:disabled)').prop('checked', $("#recommend_all").prop('checked'));
}

function history_all(){
  $('input[name="history_status"]:not(:disabled)').prop('checked', $("#history_all").prop('checked'));
}
//ui-search 定义
 $.fn.UiSearch=function(){
     var ui=$(this);
     $('.ui-search-selected',ui).on('click',function(){
         $('.ui-search-select-list').show();
         return false;//阻止向上传递
     })

     $('.ui-search-select-list a',ui).on('click',function(){
         $('.ui-search-selected').text($(this).text());
         $('.ui-search-select-list').hide();
         return false;
     })

     $('body').on("click",function(){
        $('.ui-search-select-list').hide();
     })
 }

//ui-tab 定规
$.fn.UiTab=function(header,content){
    var ui=$(this);
    var tabs=$(header,ui);
    var cons=$(content,ui);

    tabs.on('click',function(){
        var index=$(this).index();
        tabs.removeClass('system_cur').eq(index).addClass('system_cur');
        cons.hide().eq(index).show();
        return false;
    })
}

//页面跳转
$.fn.GoTo=function(){
    var room_list=$(this);
    $('span',room_list).on('click',function(){
        window.location.href='scheduling.html';     
    })
}

 $(function(){
     $('.ui-search').UiSearch();
     $('.system').UiTab('.system_title > .item','.system_content > .system_content_items');
     $('.room_list').GoTo();
 })
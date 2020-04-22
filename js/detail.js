
var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]


//输出今天之后的7个星期的排班
$.fn.uitable=function(){
    //先将容器内容清空
    $('#schedule_box_wrap').empty();
    //设置一页显示出来几个
    var pageCount=7;
    //设置当前页面的页数为0，一页存放的是一周
    //可以吧currentPage当成是第几周，第0页也就是第一周
    //当我们点击按钮查看上下周排班表时，通过currentPage加1或减1实现。
    var currentPage=0;
    //一共要循环多少天的排班表，这里是49天
    var days=pageCount*7;
    //获取当前日期
    var date=new Date();
    var time=date.getTime();//获取毫秒数

    for(i=0;i<days;i++){
        var _t=time + i*86400*1000;
        var _d=new Date(_t); 
        var html=[];
        var w=week[_d.getDay()];//获得星期几
        var y=_d.getFullYear();
        var m=_d.getMonth()+1;
        m=m<10?'0'+m:m;//月份统一成2位数
        var d=_d.getDate();
        d=d<10?'0'+d:d;//日期统一成2位数
    
    html.push('<div class="schedule_box_item"><div class="date">'+w
    +'<br>'+y+'-'+m+'-'+d+'</div>');
    html.push('<div class="status"></div>');
    html.push('<div class="status status_full">约满</div>');
    html.push('<div class="status"></div></div>');

    $('.schedule_box_wrap').append(html.join(''));
    }


    var width=$('.middle').width();
    // console.log(currentPage);

    $(".schedule_box_wrap").on('flashLeft',function(){
        $(this).css('left',width*currentPage*-1);
    })
    $(".schedule_box_wrap").on('flashRight',function(){
        $(this).css('left',width*currentPage*-1);
    })
    // 左移
    $('.icon-left').on('click',function(){
        if(currentPage-1>=0){
            currentPage--;
            $('.schedule_box_wrap').triggerHandler('flashLeft');
        }
        return false;
    });
    // 右移
    $('.icon-right').on('click',function(){
        if(currentPage+1<pageCount){
            currentPage++;
            // alert(currentPage);
            $('.schedule_box_wrap').triggerHandler('flashRight');
        }
    })
}

$(function(){
    $('.middle').uitable();   
})

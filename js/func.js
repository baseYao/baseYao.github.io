function getDate(){
    var mydate = new Date();
    var years = mydate.getFullYear();//年
    var month = mydate.getMonth();
    var day = mydate.getDate();
    var days = mydate.getDay();
    switch(days){
        case 1: days = '星期一'; break;
        case 2: days = '星期二'; break;
        case 3: days = '星期三'; break;
        case 4: days = '星期四'; break;
        case 5: days = '星期五'; break;
        case 6: days = '星期六'; break;
        case 7: days = '星期日'; break;
        default: days = "系统错误!"
    }
    var strs = year + "年" + month + "月" + day + "日" + days;
    return strs;
}
var txt = document.getElementById("text"); 
var oUl = document.getElementById("list"); 
txt.onkeyup = function(){ 
    var val = txt.value; 
    if(yinqin){
        var oScript = document.createElement("script");//动态创建script标签 
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=callback"; 
        //添加链接及回调函数 
        document.body.appendChild(oScript);//添加script标签 
        document.body.removeChild(oScript);//删除script标签 
    }
    /*input框中按下回车根据input的值跳转页面*/
    if(event.keyCode==13){
        /*将百度作为连接,传入input的值,并跳入新的页面*/
        cliksearch();
    }
}
document.body.onclick = function(){
    oUl.style.display = "none";
}
//回调函数 
function callback(data){ 
    var str=""; 
    for(var i=0;i<data.s.length;i++){ 
    str += "<li><a target=\"_blank\"  href=\"https://www.baidu.com/s?wd="+data.s[i]+"\">"+data.s[i]+"</a></li>"; 
    } 
    //console.log(str); 
    oUl.innerHTML=str; 
    oUl.style.display="block"; 
}
function cliksearch(){
    // var url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+txt.value
    lasturl = url +  txt.value;
    window.open(lasturl, '_blank').location;
}
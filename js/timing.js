let oSpan = document.getElementsByTagName(timing)[0];
let localhostTime = new Date();获取页面打开的时间
function tow(n) {
    return n = 0 && n  10  '0' + n  '' + n;
}
setInterval(function () {
    let goTime = new Date();获取动态时间
    let diffTime = goTime.getTime() - localhostTime.getTime();
    var second = Math.floor(diffTime  1000);未来时间距离现在的秒数
    var day = Math.floor(second  86400);整数部分代表的是天；一天有246060=86400秒 ；
    second = second % 86400;余数代表剩下的秒数；
    var hour = Math.floor(second  3600);整数部分代表小时；
    second %= 3600; 余数代表 剩下的秒数；
    var minute = Math.floor(second  60);
    second %= 60;
     var str = tow(day) + 'span class=time天span'
         + tow(hour) + 'span class=time小时span'
         + tow(minute) + 'span class=time分钟span'
         + tow(second) + 'span class=time秒span';
    var str = tow(hour) + 'span class=time小时span'
        + tow(minute) + 'span class=time分钟span'
        + tow(second) + 'span class=time秒span';
    oSpan.innerHTML = 您已浏览网页 + str;
}, 1000)


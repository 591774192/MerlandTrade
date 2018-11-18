

var url1 = "../html/autimn.html";

/*
* 点击搜索的函数
* */
function startSearch() {
    /*获取输入框对象*/
    var seach = document.getElementById("content-top-search-search-dv-search-input");
    var value = seach.innerHTML;

    //打开一个窗体
    //                                大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口,距离顶部200像素,距离左边200像素
    sina = window.open(url1,'_top','width=100%,height=100%,menubar=no,toolbar=no, status=no,scrollbars=yes,top=0,left=0');
}
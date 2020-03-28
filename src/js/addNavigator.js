function addNav(title, url) {
    var text = document.createTextNode(title);
    var a = document.createElement("a");
    a.setAttribute("class", "menu");
    a.setAttribute("href", url);
    a.appendChild(text);
    var navLi = document.createElement("li");
    navLi.appendChild(a);
    var originLi = document.getElementById("blog_nav_admin").parentNode;
    var navUl = document.getElementById("navList");
    navUl.insertBefore(navLi, originLi);
}

addNav("首页", "https://www.cnblogs.com/newber/");
addNav("GitHub", "http://baidu.com");

function addSideBar(addId, addTitle, moveElement) {
    var myNews = document.createElement("div");
    myNews.setAttribute("id", addId);
    var myNewsTitle = document.createElement("h3");
    myNewsTitle.setAttribute("class", "catListTitle");
    var myNewsTitleText = document.createTextNode(addTitle);
    myNewsTitle.appendChild(myNewsTitleText);
    myNews.appendChild(myNewsTitle);
    var myNewsUl = document.createElement("ul");
    myNews.appendChild(myNewsUl);

    var underNews = document.getElementById(moveElement).getElementsByTagName("a");
    for (var i = 0, count = underNews.length; i < count; ++i) {
        var aNode = underNews[i].cloneNode(true);
        if (aNode.nodeType == 1) {
            var myNewsLi = document.createElement("li");
            myNewsUl.appendChild(myNewsLi);
            myNewsLi.appendChild(aNode);
        }
    }
    document.getElementById("sideBarMain").appendChild(myNews);
    document.getElementById(moveElement).setAttribute("style", "display:none");

}

// addSideBar("my_under_posts_news", "相关博文", "under_post_news");
// addSideBar("my_ad_t2", "推荐", "ad_t2");

$(document).ready(function () {
    addSideBar("my_under_posts_news", "相关博文", "under_post_news");
    addSideBar("my_ad_t2", "推荐", "ad_t2");
});
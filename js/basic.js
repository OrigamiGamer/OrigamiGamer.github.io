{
    // 加载网站所有资源
    function load_images() {

    }

    // 加载网站文章
    function load_articles() {
        marked_parse("content", "First article.md");
    }

    // 跳转网页
    function target(name) {
        var _blog;
        switch (name) {
            case "creakler":
                _blog = "https://qianshi-oristudio.github.io";
                break;
            case "omofun":
                _blog = "https://omofun.tv";
                break;
        }
        window.location.href = _blog;
    }

    // 每天首次进入网站时欢迎
    function window_load() {
        var _date = new Date;
        var _today = toString(_date.getDay());
        if (localStorage.getItem("LastLoggedTime") != _today) {
            localStorage.setItem("LastLoggedTime", _today);
        } else {
            //document.getElementById("welcome").remove();
        }
    }
    window.onload = window_load;
}
{
    function initialize() {
        //资源
        var src_face = "https://portrait.gitee.com/uploads/avatars/user/3450/10350908_OrigamiGame_1642737826.png!avatar200"

        // 加载头像
        //var img = document.getElementById("face");
        //img.setAttribute("src",src_face);

        //加载图标
        //var ico = document.getElementsByClassName("blog-icon");
    }


    function friendship_blog(name) {
        var _blog;
        switch (name) {
            case "creakler":
                _blog = "https://creaklerblog.freeflarum.com";
                break;
            case "omofun":
                _blog = "https://omofun.tv";
                break;
        }
        window.location.href = _blog;
    }


    initialize();
}
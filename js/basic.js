{
    let _face = "https://portrait.gitee.com/uploads/avatars/user/3450/10350908_OrigamiGame_1642737826.png!avatar200"
    function initialize() {
        // 加载头像
        var img = document.getElementById("img_face");
        img.setAttribute("src", _face);
    }


    function friendship_blog(name) {
        switch (name) {
            case "creakler":
                window.location.href = "https://creaklerblog.freeflarum.com";
        }
    }

    initialize();
}
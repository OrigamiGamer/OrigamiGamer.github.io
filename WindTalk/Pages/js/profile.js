{
    function SetBackground(url) {
        var body = document.getElementById("body");
        var _url = "background-image:url(" + url + ")";
        body.setAttribute("style", _url);

    }
}
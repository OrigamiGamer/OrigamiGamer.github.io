{
    function Load(name, account, qq, email) {
        // Face
        var div_face = document.getElementById("preview-face");
        var _url = "background-image:url(https://tenapi.cn/qqimg/?qq=" + qq + ")";
        div_face.setAttribute("style", _url);

        // Name
        var div_name = document.getElementById("preview-name");
        div_name.innerHTML = name;

        // Account


        // Email


    }
}
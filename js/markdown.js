{
    function marked_parse(Element, path) {
        //载入文本文件?

        var xmlhttp = null;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) { }
        }

        if (!xmlhttp) xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    var s = xmlhttp.responseText;
                    alert("XMLHttpRequest = " + s);
                    s = s.replace(/</g, "<");
                    s = s.replace(/>/g, ">");

                    xmlhttp = null;
                }
            }
        };
    }
}
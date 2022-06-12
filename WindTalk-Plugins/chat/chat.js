{
    console.log("气泡作者: Origami");
    console.log("  *添加消息 msg_add(pos,name,contnet,face);");
    console.log("  *清空消息 msg_clear();");
    console.log("  *跳转位置 page_goto(pos);    pos: top,bottom");

    //消息数据结构体
    var chat_msg = {
        "pos": "",
        "name": "",
        "account": "",
        "content": "",
        "face": ""
    };

    var msgs = chat_msg;


    //添加消息
    function msg_add(pos, name, account, content, face) {
        //储存到消息数据结构体
        var n = ++msgs.length;

        var _msg = chat_msg;
        _msg.pos = pos;
        _msg.name = name;
        _msg.account = account;
        _msg.content = content;
        _msg.face = face;

        msgs[n] = _msg;


        //获取基础元素
        var body = document.querySelector("body");
        var tail = document.getElementById("tail");

        //消息结构体
        var div_box = document.createElement("div");


        if (pos == "center") {	//提示消息//

            //设置class属性为chat-notice
            div_box.setAttribute("class", "chat-notice");
            //创建提示内容 span
            var span_content = document.createElement("span");
            //传递 content参数 给 span节点
            span_content.innerHTML = content;
            //将 span_content节点 设为 div_box节点 的子节点
            div_box.appendChild(span_content);


        } else {				//用户消息

            if (pos == "left") {	//左侧消息
                //设置class属性为chat-sender
                div_box.setAttribute("class", "chat-sender");
            }
            if (pos == "right") {	//右侧消息
                //设置class属性为chat-receiver
                div_box.setAttribute("class", "chat-receiver");
            }


            //创建头像结构 div
            var div_face = document.createElement("div");
            //创建头像图片 img
            var img_face = document.createElement("img");
            //传递 face参数 给 img节点的src属性
            img_face.setAttribute("src", face);
            //将 img_face节点 设为 div_face节点 的子节点
            div_face.appendChild(img_face);
            //将 div_face节点 设为 div_box节点 的子节点
            div_box.appendChild(div_face);



            //名称
            var div_name = document.createElement("div");
            //传递 name参数 给 div_name节点
            div_name.innerHTML = name;
            //将 div_name节点 设为 div_box节点 的子节点
            div_box.appendChild(div_name);



            //气泡结构
            var div_bubble = document.createElement("div");
            //创建左三角 div
            var div_triangle = document.createElement("div");

            //是否位于左侧
            if (pos == "left") {
                //设置class属性为chat-left_triangle
                div_triangle.setAttribute("class", "chat-left_triangle");
            }
            if (pos == "right") {
                //设置class属性为chat-right_triangle
                div_triangle.setAttribute("class", "chat-right_triangle");
            };

            //将 div_triangle 设为 div_bubble节点 的子节点
            div_bubble.appendChild(div_triangle);

            //创建内容 span
            var span_content = document.createElement("span");
            //传递 content参数 给 span_content节点
            span_content.innerHTML = content;
            //将 span_content节点 设为 div_bubble节点 的子节点
            div_bubble.appendChild(span_content);

            //将 div_bubble节点 设为 div_box节点 的子节点
            div_box.appendChild(div_bubble);
        };

        //添加 消息div节点 到末尾 tail节点
        body.insertBefore(div_box, tail);

        page_goto("bottom");
    }


    //删除所有消息
    function msg_clear() {

        //删除消息结构体
        msgs.length = 0;

        //删除右侧消息
        var div_left = document.getElementsByClassName("chat-sender");
        while (div_left.length > 0) {
            console.log(div_left.length)
            div_left[0].remove();

        };

        //删除左侧消息
        var div_right = document.getElementsByClassName("chat-receiver");
        while (div_right.length > 0) {
            console.log(div_right.length)
            div_right[0].remove();

        };

        //删除提示
        var div_notice = document.getElementsByClassName("chat-notice");
        while (div_notice.length > 0) {
            console.log(div_notice.length)
            div_notice[0].remove();

        }
    }


    //网页移动到指定位置
    function page_goto(pos) {
        switch (pos) {
            case "top":
            //跳转到顶部不会写
            case "bottom":
                document.documentElement.scrollTop = document.body.scrollHeight;
        }
    }

}
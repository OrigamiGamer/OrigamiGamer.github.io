{
    console.log("气泡作者: Origami");
    console.log("  *添加消息 msg_add(pos,name,contnet,face);");
    console.log("  *清空消息 msg_clear();");
    console.log("  *跳转位置 page(pos);    pos: top,bottom");

    // 结构体-消息数据
    var chat_msg = {
        "pos": "",
        "name": "",
        "account": "",
        "content": "",
        "face": ""
    };

    var AryMsgs = chat_msg; // 数组-消息数据


    //添加消息
    function msg_add(pos, name, account, content, face) {
        //储存到消息数据结构体
        var n = ++AryMsgs.length;
        var _msg = chat_msg;
        if (pos != undefined) {
            _msg.pos = pos;
        }
        if (name != undefined) {
            _msg.name = name;
        }
        if (account != undefined) {
            _msg.account = account;
        }
        if (content != undefined) {
            _msg.content = content;
        }
        if (face != undefined) {
            _msg.face = face;
        }


        //获取基础元素
        var body = document.querySelector("body");
        var tail = document.getElementById("tail");

        //消息结构体
        var div_box = document.createElement("div");


        if (_msg.pos == "center") {	//提示消息//

            //设置class属性为chat-notice
            div_box.setAttribute("class", "chat-notice");
            //创建提示内容 span
            var span_content = document.createElement("span");
            //传递 content参数 给 span节点
            span_content.innerHTML = _msg.content;
            //将 span_content节点 设为 div_box节点 的子节点
            div_box.appendChild(span_content);


        } else {				//用户消息

            if (_msg.pos == "left") {	//左侧消息
                //设置class属性为chat-sender
                div_box.setAttribute("class", "chat-sender");
            }
            if (_msg.pos == "right") {	//右侧消息
                //设置class属性为chat-receiver
                div_box.setAttribute("class", "chat-receiver");
            }


            //创建头像结构 div
            var div_face = document.createElement("div");
            //创建头像图片 img
            var img_face = document.createElement("img");
            //传递 face参数 给 img节点的class,src属性
            img_face.setAttribute("class", "img-face");
            img_face.setAttribute("src", _msg.face);
            //将 img_face节点 设为 div_face节点 的子节点
            div_face.appendChild(img_face);
            //将 div_face节点 设为 div_box节点 的子节点
            div_box.appendChild(div_face);



            //名称
            var div_name = document.createElement("div");
            //传递 name参数 给 div_name节点
            div_name.innerHTML = _msg.name;
            //将 div_name节点 设为 div_box节点 的子节点
            div_box.appendChild(div_name);



            //气泡结构
            var div_bubble = document.createElement("div");
            //创建左三角 div
            var div_triangle = document.createElement("div");

            //是否位于左侧
            if (_msg.pos == "left") {
                //设置class属性为chat-left_triangle
                div_triangle.setAttribute("class", "chat-left_triangle");
            }
            if (_msg.pos == "right") {
                //设置class属性为chat-right_triangle
                div_triangle.setAttribute("class", "chat-right_triangle");
            };

            //将 div_triangle 设为 div_bubble节点 的子节点
            div_bubble.appendChild(div_triangle);

            //创建内容 span
            var span_content = document.createElement("span");
            //传递 content参数 给 span_content节点
            span_content.innerHTML = _msg.content;
            //将 span_content节点 设为 div_bubble节点 的子节点
            div_bubble.appendChild(span_content);

            //将 div_bubble节点 设为 div_box节点 的子节点
            div_box.appendChild(div_bubble);
        };

        //添加 消息div节点 到末尾 tail节点
        body.insertBefore(div_box, tail);

        AryMsgs[n] = _msg;

        page("bottom"); //页面到底部
    }


    //删除所有消息
    function msg_clear() {

        //删除消息结构体
        AryMsgs.length = 0;

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
    function page(pos) {
        switch (pos) {
            case "top":
                //跳转顶部不会写
                break;
            case "bottom":
                document.documentElement.scrollTop = document.body.scrollHeight;
                break;
        }
    }

}
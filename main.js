class IIROSEAPI {
    //域名-window的对应字典
    static domin_window_dic={};
    static send_room_message(msg) {
        let msg_json = {
            "m": msg.toString(),
            "mc": inputcolorhex,
            "i": Math.random().toString().slice(2, 14)
        };
        socket.send(JSON.stringify(msg_json))
    }
    static send_bullet_message(msg){
        //~{"t":"(消息内容)","c":"(消息颜色)","v":0}
        let msg_json = {
            "t": msg.toString(),
            "c": inputcolorhex,
            "v": 0
        };
        socket.send("~"+JSON.stringify(msg_json))
    }
    static send_private_message(msg,uid){
        //{"g":"(接受者用户唯一标识)","m":"(消息内容)","mc":"(消息颜色)","i":"(随机数)"}
        let msg_json = {
            "g": uid.toString,
            "m": msg.toString(),
            "mc": inputcolorhex,
            "i": Math.random().toString().slice(2, 14)
        };
        socket.send(JSON.stringify(msg_json))
        
    }
    //添加win监听
    static add_new_plugin(domin_name,win){
        IIROSEAPI.domin_window_dic[domin_name]=win
    }
}
function proxyFunction (targetFunction, callback) {
    return ((...param) => {
        if (callback(param, targetFunction) !== true)
            return targetFunction(...param)
    });
}
function message_get(p){
    for (const [key, value] of Object.entries(IIROSEAPI.domin_window_dic)) {
      //console.log(`Key: ${key}, Value: ${value}`);
        var domin=key;
        var win=value;
        win.postMessage(p,domin);
    }
}

socket._onmessage = proxyFunction(socket._onmessage.bind(socket), async (p) => {message_get(p)});

//脚本装载完成标志
var IIROSE_WPM_MES_FINISH=true
//IIROSEAPI.send_bullet_message("test");


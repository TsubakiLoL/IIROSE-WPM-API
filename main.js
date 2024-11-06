class IIROSEAPI {
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
        //{"g":"(接受者用户唯一标识)","m":"(消息内容)","mc":"(消息颜色)","i":"(随机数，房间消息的示例)"}
        let msg_json = {
            "g": uid.toString,
            "m": msg.toString(),
            "mc": inputcolorhex,
            "i": Math.random().toString().slice(2, 14)
        };
        socket.send(JSON.stringify(msg_json))
        
    }
    
}


IIROSEAPI.send_bullet_message("test");


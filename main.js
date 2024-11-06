class IIROSEAPI {
    static send_room_message(msg) {
        let msg_json = {
            "m": msg.toString(),
            "mc": inputcolorhex,
            "i": Math.random().toString().slice(2, 14)
        };
        socket.send(JSON.stringify(msg_json))
    }
}

IIROSEAPI.send_room_mesage("test");


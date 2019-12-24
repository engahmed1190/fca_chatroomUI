WebChat.default.init({
    selector: "#webchat",
    initPayload: "/get_started",
    interval: 100, // 1000 ms between each message
    customData: {"userId": "333", "language": "ar"}, // arbitrary custom data. Stay minimal as this will be added to the socket
    socketUrl: "https://fca.brainwise.me",
	//socketUrl: "http://localhost:5050",
    socketPath: "/socket.io/",
    title: "FCA Chatbot",
    subtitle: "typically replies instantly",
	session_persistence: true,
    inputTextFieldHint: "Type a message...",
    connectingText: "Waiting for server...",
    hideWhenNotConnected: true,
    fullScreenMode: false,
    profileAvatar: "Avatar.png",

    params: {
      images: {
        dims: {
          width: 300,
          height: 200,
        }
      },
      storage: "local"
    }
  })
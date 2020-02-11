WebChat.default.init({
    selector: "#webchat",
    initPayload: "/get_started",
    interval: 100, // 1000 ms between each message
    customData: {"userId": "333", "language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
    socketUrl: "https://fca.brainwise.me",
	//socketUrl: "http://localhost:5050",
    socketPath: "/socket.io/",
    title: "FCA Chatbot",
    subtitle: "typically replies instantly",
	  session_persistence: true,
    inputTextFieldHint: "Type a message...",
    connectingText: "Waiting for server...",
    hideWhenNotConnected: true,
    fullScreenMode: true,
    profileAvatar: "Avatar.png",

    params: {
      images: {
        dims: {
          width: 100,
          height: 100,
        }
      },
      storage: "local"
    }
  })
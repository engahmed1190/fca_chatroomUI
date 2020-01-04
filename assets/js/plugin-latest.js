  WebChat.default.init({
    selector: "#webchat",
    initPayload: "/get_started",
    customData: {"language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
    socketUrl: "https://fca.brainwise.me",
    socketPath: "/socket.io/",
    title: "FCA Chatbot",
    subtitle: "typically replies instantly",
  })
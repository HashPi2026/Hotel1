import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Prevent duplicate script loading
    if (document.getElementById("chatbot-sdk")) return;

    const script = document.createElement("script");
    script.id = "chatbot-sdk";
    script.src = process.env.REACT_APP_CHATBOT_SDK_URL;
    script.async = true;

    script.onload = () => {
      console.log("Chatbot SDK Loaded");

      // If SDK requires initialization, uncomment and adjust:
      /*
      if (window.Chatbot) {
        window.Chatbot.init({
          apiKey: process.env.REACT_APP_CHATBOT_KEY,
        });
      }
      */
    };

    document.body.appendChild(script);
  }, []);

  return null; // No UI needed (SDK provides widget)
};

export default Chatbot;
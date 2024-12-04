import { useState, useEffect } from "react";
import { Client as V2Client } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
import styles from "./Chat.module.css";

interface ChatProps {
  recipientAddress: string;
}

export default function Chat({ recipientAddress }: ChatProps) {
  const [messages, setMessages] = useState<
    { content: string; sender: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [wallet, setWallet] = useState<any | null>(null);
  const [xmtp, setXmtp] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newWallet = Wallet.createRandom();
    setWallet(newWallet);
    initXmtp(newWallet);
  }, []);

  useEffect(() => {
    const streamMessages = async () => {
      if (!xmtp || !recipientAddress) return;

      try {
        const conversation =
          await xmtp.conversations.newConversation(recipientAddress);

        // Load existing messages
        const messages = await conversation.messages();
        console.log("Initial messages loaded:", messages.length);

        const formattedMessages = messages.map((msg: any) => {
          console.log("Processing message:", msg.id, msg.content);
          return {
            content: msg.content,
            sender: msg.senderAddress === wallet.address ? "Human" : "Agent",
          };
        });

        // Set initial messages
        setMessages(formattedMessages);
        console.log("Initial messages set:", formattedMessages.length);

        // Create a Set to track message IDs we've already seen
        const processedMessageIds = new Set(messages.map((msg: any) => msg.id));

        // Listen for new messages
        for await (const message of await conversation.streamMessages()) {
          console.log("New message received:", message.id, message.content);
          // Only add message if we haven't processed it before
          if (!processedMessageIds.has(message.id)) {
            processedMessageIds.add(message.id);
            setMessages((prevMessages) => {
              console.log("Adding new message to UI");
              return [
                ...prevMessages,
                {
                  content: message.content,
                  sender:
                    message.senderAddress === wallet.address
                      ? "Human"
                      : "Agent",
                },
              ];
            });
          }
        }
      } catch (error) {
        console.error("Error streaming messages:", error);
      }
    };

    streamMessages();
  }, [xmtp, recipientAddress, wallet]);

  const initXmtp = async (wallet: any) => {
    try {
      const xmtpClient = await V2Client.create(wallet, { env: "production" });
      setXmtp(xmtpClient);
      setIsLoading(false);
    } catch (error) {
      console.error("Error initializing XMTP:", error);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!xmtp || !newMessage || !recipientAddress) {
      console.log("Missing required data:", {
        xmtp: !!xmtp,
        newMessage,
        recipientAddress,
      });
      return;
    }

    try {
      const conversation =
        await xmtp.conversations.newConversation(recipientAddress);
      await conversation.send(newMessage);
      setNewMessage("");
    } catch (error) {
      console.error("Detailed error in sendMessage:", error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.walletInfo}>
        <div>
          Your Wallet: {wallet?.address?.slice(0, 6)}...
          {wallet?.address?.slice(-4)}
        </div>
        <div>
          Recipient: {recipientAddress.slice(0, 6)}...
          {recipientAddress.slice(-4)}
        </div>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <span className={styles.sender}>{msg.sender}</span>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className={styles.messageForm}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={
              isLoading ? "Initializing XMTP..." : "Type a message..."
            }
            className={styles.input}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={isLoading}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
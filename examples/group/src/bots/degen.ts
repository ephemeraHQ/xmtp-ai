import { HandlerContext } from "@xmtp/botkit";
import { users } from "../lib/users.js";

export async function handler(context: HandlerContext) {
  const { senderAddress, content, typeId } = context.message;
  const { params, users: receivers, url } = content;

  let amount: number = 0,
    receiverAddresses: string[] = [],
    reference: string = "";

  if (typeId === "reply") {
    const { content: reply, receiver } = content;
    //Reply
    receiverAddresses = [receiver];
    if (reply.includes("$degen")) {
      const match = reply.match(/(\d+)/);
      if (match) amount = parseInt(match[0]);
    }
  } else if (typeId === "text") {
    const { content: text } = content;
    if (text.startsWith("/tip")) {
      const { amount: extractedAmount, username } = params;

      amount = parseInt(extractedAmount) || 10;
      receiverAddresses = receivers;
    }
  } else if (typeId === "reaction") {
    const { content: reaction, action, receiver } = content;

    if (reaction === "degen" && action === "added") {
      amount = 10;
      receiverAddresses = [receiver];
    }
  }
  const sender = users.find((user: any) => user.address === senderAddress);

  if (!sender || receiverAddresses.length === 0 || amount === 0) {
    context.reply("Sender or receiver or amount not found.");
    return;
  }

  if (sender.degen >= amount * receiverAddresses.length) {
    receiverAddresses.forEach(async (receiver: any) => {
      context.reply(
        `You received ${amount} DEGEN tokens from ${sender.username}. Your new balance is ${receiver.degen} DEGEN tokens.`,
        [receiver.address],
      );
    });
    context.reply(
      `You sent ${
        amount * receiverAddresses.length
      } DEGEN tokens in total. Your remaining balance: ${
        sender.degen
      } DEGEN tokens.`,
      [sender.address],
      reference,
    );
  } else {
    context.reply("Insufficient DEGEN tokens to send.");
  }
}

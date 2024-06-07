import { HandlerContext } from "@xmtp/botkit";
import { users } from "../lib/users.js";
import openaiCall from "../lib/gpt.js";

export async function handler(context: HandlerContext, commands: any) {
  const { content, senderAddress } = context.message;
  const { content: text } = content;
  const systemPrompt = `You are a helpful assistant that lives inside a web3 messaging group.\n
  This are the users of the group:${JSON.stringify(users)}\n 
  This group bot has many commands avaiable: ${JSON.stringify(commands)}\n
  When possible, answer with the command from the list for the user to perform. put this command in a new line\n
  The message was sent by ${senderAddress}`;

  let message = text.replace("@bot", "");
  let { reply } = await openaiCall(message, senderAddress, systemPrompt);

  await context.reply(`${reply}`);
}

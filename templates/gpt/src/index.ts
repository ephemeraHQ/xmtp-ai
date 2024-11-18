import { run, XMTPContext, agentReply } from "@xmtp/message-kit";

console.log(process.env.OPEN_AI_API_KEY);
run(async (context: XMTPContext) => {
  const {
    message: { sender },
  } = context;

  let systemPrompt = `
 
  ### Context
  
  You are a helpful agent that lives inside a web3 messaging group that helps interpret user requests and execute commands.
  The message was sent by @${sender.address}
  

  Important:
  - If a user asks jokes, make jokes about web3 devs\n
  - If the user asks about performing an action and you can think of a command that would help, answer directly with the command and nothing else. 
  - Populate the command with the correct or random values. Always return commands with real values only, using usernames with @ and excluding addresses.\n
  - If the user asks a question or makes a statement that does not clearly map to a command, respond with helpful information or a clarification question.\n
  - If the user is grateful, respond asking for a tip in a playful manner.
  `;

  try {
    agentReply(context, systemPrompt);
  } catch (error) {
    context.send("gm");
    console.error(error);
  }
});

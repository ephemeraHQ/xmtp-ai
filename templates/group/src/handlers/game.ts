import { XMTPContext } from "@xmtp/message-kit";
import type { SkillAction } from "@xmtp/message-kit";

export const registerSkill: SkillAction[] = [
  {
    skill: "/game [game]",
    handler: handleGames,
    description: "Play a game.",
    examples: ["/game wordle", "/game slot", "/game help"],
    params: {
      game: {
        default: "",
        type: "string",
        values: ["wordle", "slot", "help"],
      },
    },
  },
];

export async function handleGames(context: XMTPContext) {
  const {
    message: {
      content: { skill, params, text },
    },
  } = context;
  if (!skill) {
    if (text === "🔎" || text === "🔍") {
      // Send the URL for the requested game
      context.reply("https://framedl.xyz/");
    }
    return;
  }
  // URLs for each game type
  const gameUrls: { [key: string]: string } = {
    wordle: "https://framedl.xyz",
    slot: "https://slot-machine-frame.vercel.app",
  };
  // Respond with the appropriate game URL or an error message
  switch (params.game) {
    case "wordle":
    case "slot":
      // Retrieve the URL for the requested game using a simplified variable assignment
      const gameUrl = gameUrls[params.game];
      // Send the URL for the requested game
      context.send(gameUrl);
      break;

    case "help":
      context.send("Available games: \n/game wordle\n/game slot");
      break;
    default:
      // Inform the user about unrecognized skills and provide available options
      context.send(
        "Skill not recognized. Available games: wordle, slot, or help.",
      );
  }
}

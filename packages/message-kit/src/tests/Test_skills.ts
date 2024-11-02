import type { SkillGroup } from "../helpers/types.js";

let tipping = undefined;
let transaction = undefined;
let games = undefined;
let loyalty = undefined;
let agent = undefined;
let helpHandler = undefined;

export const skills: SkillGroup[] = [
  {
    name: "Tipping",
    description: "Tip tokens via emoji, replies or command.",
    skills: [
      {
        command: "/tip [@usernames] [amount] [token]",
        triggers: ["/tip"],
        description: "Tip users in a specified token.",
        handler: tipping,
        params: {
          username: {
            default: "",
            plural: true,
            type: "username",
          },
          amount: {
            default: 10,
            type: "number",
          },
        },
      },
    ],
  },
  {
    name: "Transactions",
    description: "Multipurpose transaction frame built onbase.",
    skills: [
      {
        command: "/send [amount] [token] [username]",
        triggers: ["/send"],
        description:
          "Send a specified amount of a cryptocurrency to a destination address.",
        handler: transaction,
        params: {
          amount: {
            default: 10,
            type: "number",
          },
          token: {
            default: "usdc",
            type: "string",
            values: ["eth", "dai", "usdc", "degen"], // Accepted tokens
          },
          username: {
            default: "",
            type: "username",
          },
        },
      },
      {
        command: "/swap [amount] [token_from] [token_to]",
        triggers: ["/swap"],
        description: "Exchange one type of cryptocurrency for another.",
        handler: transaction,
        params: {
          amount: {
            default: 10,
            type: "number",
          },
          token_from: {
            default: "usdc",
            type: "string",
            values: ["eth", "dai", "usdc", "degen"], // Accepted tokens
          },
          token_to: {
            default: "eth",
            type: "string",
            values: ["eth", "dai", "usdc", "degen"], // Accepted tokenss
          },
        },
      },
      {
        command: "/show",
        triggers: ["/show"],
        handler: transaction,
        description: "Show the whole frame.",
        params: {},
      },
    ],
  },
  {
    name: "Games",
    description: "Provides various gaming experiences.",
    skills: [
      {
        command: "/game [game]",
        triggers: ["/game", "🔎", "🔍"],
        handler: games,
        description: "Play a game.",
        params: {
          game: {
            default: "",
            type: "string",
            values: ["wordle", "slot", "help"],
          },
        },
      },
    ],
  },
  {
    name: "Loyalty",
    description: "Manage group members and metadata.",
    skills: [
      {
        command: "/points",
        triggers: ["/points"],
        handler: loyalty,
        description: "Check your points.",
        params: {},
      },
      {
        command: "/leaderboard",
        triggers: ["/leaderboard"],
        adminOnly: true,
        handler: loyalty,
        description: "Check the points of a user.",
        params: {},
      },
    ],
  },
  {
    name: "Agent",
    description: "Manage agent commands.",
    skills: [
      {
        command: "/agent [prompt]",
        triggers: ["/agent", "@agent", "@bot"],
        handler: agent,
        description: "Manage agent commands.",
        params: {
          prompt: {
            default: "",
            type: "prompt",
          },
        },
      },
    ],
  },
  {
    name: "Help",
    description: "Get help with the bot.",
    skills: [
      {
        command: "/help",
        triggers: ["/help"],
        handler: helpHandler,
        description: "Get help with the bot.",
        params: {},
      },
    ],
  },
];

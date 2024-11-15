// vocs.config.tsx
import { defineConfig } from "file:///Users/fabrizioguespe/DevRel/message-kit/node_modules/vocs/_lib/index.js";
import { Fragment, jsx, jsxs } from "file:///Users/fabrizioguespe/DevRel/message-kit/node_modules/react/jsx-runtime.js";
var vocs_config_default = defineConfig({
  head: () => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "MessageKit" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: "https://messagekit.ephemerahq.com/hero.jpg"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "fc:frame", content: "vNext" }),
      /* @__PURE__ */ jsx("meta", { property: "of:version", content: "vNext" }),
      /* @__PURE__ */ jsx("meta", { property: "of:accepts:xmtp", content: "vNext" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "of:image",
          content: "https://messagekit.ephemerahq.com/hero.jpg"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "fc:frame:image",
          content: "https://messagekit.ephemerahq.com/hero.jpg"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "fc:frame:button:1", content: "Docs" }),
      /* @__PURE__ */ jsx("meta", { property: "fc:frame:button:1:action", content: "link" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "fc:frame:button:1:target",
          content: "https://messagekit.ephemerahq.com/"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "fc:frame:button:2", content: "Drop a \u2B50\uFE0F" }),
      /* @__PURE__ */ jsx("meta", { property: "fc:frame:button:2:action", content: "link" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "fc:frame:button:2:target",
          content: "https://github.com/ephemeraHQ/message-kit"
        }
      ),
      /* @__PURE__ */ jsx(
        "script",
        {
          src: "https://plausible.io/js/script.outbound-links.js",
          "data-domain": "messagekit.ephemerahq.com",
          defer: true
        }
      )
    ] });
  },
  ogImageUrl: {
    "/": "/hero.jpg",
    "/docs": "/hero.jpg"
  },
  title: "MessageKit",
  iconUrl: "/messagekit-logo.png",
  rootDir: ".",
  theme: {
    colorScheme: "dark",
    accentColor: {
      light: "#FA6977",
      dark: "#FA6977"
    }
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/ephemeraHQ/message-kit"
    }
  ],
  topNav: [
    {
      text: "Converse app",
      link: "https://testflight.apple.com/join/Q27zugWe"
    },
    { text: "XMTP", link: "https://docs.xmtp.org/" },
    { text: "1.1.8", link: "/changelog" }
  ],
  editLink: {
    pattern: "https://github.com/ephemeraHQ/message-kit/packages/docs/main/:path",
    text: "Suggest changes to this page"
  },
  sidebar: [
    {
      text: "Quickstart",
      link: "/quickstart"
    },
    {
      text: "Directory",
      link: "/directory"
    },
    {
      text: "Examples",
      link: "/examples"
    },
    {
      text: "Concepts",
      items: [
        {
          text: "Structure",
          link: "/concepts/structure"
        },
        {
          text: "Messages",
          link: "/concepts/messages"
        },
        {
          text: "Types",
          link: "/concepts/types"
        },
        {
          text: "Groups",
          link: "/concepts/groups"
        },
        {
          text: "Guidelines",
          link: "/concepts/guidelines"
        },
        {
          text: "Deployment",
          link: "/concepts/deployment"
        }
      ]
    },
    {
      text: "AI Skills",
      link: "/skills",
      items: [
        {
          text: "Reasoning",
          link: "/skills/reasoning"
        },
        {
          text: "Fine Tuning",
          link: "/skills/fine-tuning"
        },
        {
          text: "Prompting",
          link: "/skills/prompting"
        },
        {
          text: "Processing",
          link: "/skills/processing"
        },
        {
          text: "Parsing",
          link: "/skills/parsing"
        },
        {
          text: "Definition",
          link: "/skills/definition"
        }
      ]
    },
    {
      text: "Use cases",
      items: [
        {
          text: "Gm",
          link: "/templates/gm"
        },
        {
          text: "Agent",
          link: "/templates/agent",
          items: [
            {
              text: "Ens",
              link: "/templates/agent/ens"
            },
            {
              text: "Skills",
              link: "/templates/agent/skills"
            },
            {
              text: "Prompt",
              link: "/templates/agent/prompt"
            }
          ]
        },
        {
          text: "Group",
          link: "/templates/group",
          items: [
            {
              text: "Tipping",
              link: "/templates/group/tipping"
            },
            {
              text: "Games",
              link: "/templates/group/games"
            },
            {
              text: "Payments",
              link: "/templates/group/payment"
            },
            {
              text: "Helpers",
              link: "/templates/group/helpers"
            },
            {
              text: "Skills",
              link: "/templates/group/skills"
            },
            {
              text: "Prompt",
              link: "/templates/group/prompt"
            }
          ]
        }
      ]
    },
    {
      text: "Middlewares",
      collapsed: true,
      items: [
        {
          text: "Cron",
          link: "/middlewares/cron"
        },
        {
          text: "Redis",
          link: "/middlewares/redis"
        },
        {
          text: "Vision",
          link: "/middlewares/vision"
        },
        {
          text: "Stackso",
          link: "/middlewares/stackso"
        },
        {
          text: "Notion",
          link: "/middlewares/notion"
        },
        {
          text: "LearnWeb3",
          link: "/middlewares/learnweb3"
        },
        {
          text: "Lowdb",
          link: "/middlewares/lowdb"
        },
        {
          text: "Gpt",
          link: "/middlewares/gpt"
        },
        {
          text: "Resolver",
          link: "/middlewares/resolver"
        }
      ]
    },
    {
      text: "Open Frames",
      link: "/frames",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/frames"
        },
        {
          text: "Frameworks",
          items: [
            {
              text: "OnchainKit",
              link: "/frames/frameworks/onchainkit"
            },
            {
              text: "Frames.js",
              link: "/frames/frameworks/framesjs"
            },
            {
              text: "Frog",
              link: "/frames/frameworks/frog"
            }
          ]
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBoZWFkOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1lc3NhZ2VLaXRcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21lc3NhZ2VraXQuZXBoZW1lcmFocS5jb20vaGVyby5qcGdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZjOmZyYW1lXCIgY29udGVudD1cInZOZXh0XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZjp2ZXJzaW9uXCIgY29udGVudD1cInZOZXh0XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZjphY2NlcHRzOnhtdHBcIiBjb250ZW50PVwidk5leHRcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2Y6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21lc3NhZ2VraXQuZXBoZW1lcmFocS5jb20vaGVyby5qcGdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiZmM6ZnJhbWU6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21lc3NhZ2VraXQuZXBoZW1lcmFocS5jb20vaGVyby5qcGdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmM6ZnJhbWU6YnV0dG9uOjFcIiBjb250ZW50PVwiRG9jc1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmM6ZnJhbWU6YnV0dG9uOjE6YWN0aW9uXCIgY29udGVudD1cImxpbmtcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiZmM6ZnJhbWU6YnV0dG9uOjE6dGFyZ2V0XCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9tZXNzYWdla2l0LmVwaGVtZXJhaHEuY29tL1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYzpmcmFtZTpidXR0b246MlwiIGNvbnRlbnQ9XCJEcm9wIGEgXHUyQjUwXHVGRTBGXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYzpmcmFtZTpidXR0b246MjphY3Rpb25cIiBjb250ZW50PVwibGlua1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJmYzpmcmFtZTpidXR0b246Mjp0YXJnZXRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2dpdGh1Yi5jb20vZXBoZW1lcmFIUS9tZXNzYWdlLWtpdFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGxhdXNpYmxlLmlvL2pzL3NjcmlwdC5vdXRib3VuZC1saW5rcy5qc1wiXG4gICAgICAgICAgZGF0YS1kb21haW49XCJtZXNzYWdla2l0LmVwaGVtZXJhaHEuY29tXCJcbiAgICAgICAgICBkZWZlclxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSxcbiAgb2dJbWFnZVVybDoge1xuICAgIFwiL1wiOiBcIi9oZXJvLmpwZ1wiLFxuICAgIFwiL2RvY3NcIjogXCIvaGVyby5qcGdcIixcbiAgfSxcbiAgdGl0bGU6IFwiTWVzc2FnZUtpdFwiLFxuICBpY29uVXJsOiBcIi9tZXNzYWdla2l0LWxvZ28ucG5nXCIsXG4gIHJvb3REaXI6IFwiLlwiLFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImRhcmtcIixcbiAgICBhY2NlbnRDb2xvcjoge1xuICAgICAgbGlnaHQ6IFwiI0ZBNjk3N1wiLFxuICAgICAgZGFyazogXCIjRkE2OTc3XCIsXG4gICAgfSxcbiAgfSxcbiAgc29jaWFsczogW1xuICAgIHtcbiAgICAgIGljb246IFwiZ2l0aHViXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcGhlbWVyYUhRL21lc3NhZ2Uta2l0XCIsXG4gICAgfSxcbiAgXSxcbiAgdG9wTmF2OiBbXG4gICAge1xuICAgICAgdGV4dDogXCJDb252ZXJzZSBhcHBcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly90ZXN0ZmxpZ2h0LmFwcGxlLmNvbS9qb2luL1EyN3p1Z1dlXCIsXG4gICAgfSxcbiAgICB7IHRleHQ6IFwiWE1UUFwiLCBsaW5rOiBcImh0dHBzOi8vZG9jcy54bXRwLm9yZy9cIiB9LFxuICAgIHsgdGV4dDogXCIxLjEuOFwiLCBsaW5rOiBcIi9jaGFuZ2Vsb2dcIiB9LFxuICBdLFxuICBlZGl0TGluazoge1xuICAgIHBhdHRlcm46XG4gICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcGhlbWVyYUhRL21lc3NhZ2Uta2l0L3BhY2thZ2VzL2RvY3MvbWFpbi86cGF0aFwiLFxuICAgIHRleHQ6IFwiU3VnZ2VzdCBjaGFuZ2VzIHRvIHRoaXMgcGFnZVwiLFxuICB9LFxuICBzaWRlYmFyOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJRdWlja3N0YXJ0XCIsXG4gICAgICBsaW5rOiBcIi9xdWlja3N0YXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkRpcmVjdG9yeVwiLFxuICAgICAgbGluazogXCIvZGlyZWN0b3J5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkV4YW1wbGVzXCIsXG4gICAgICBsaW5rOiBcIi9leGFtcGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJDb25jZXB0c1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiU3RydWN0dXJlXCIsXG4gICAgICAgICAgbGluazogXCIvY29uY2VwdHMvc3RydWN0dXJlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk1lc3NhZ2VzXCIsXG4gICAgICAgICAgbGluazogXCIvY29uY2VwdHMvbWVzc2FnZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiVHlwZXNcIixcbiAgICAgICAgICBsaW5rOiBcIi9jb25jZXB0cy90eXBlc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJHcm91cHNcIixcbiAgICAgICAgICBsaW5rOiBcIi9jb25jZXB0cy9ncm91cHNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiR3VpZGVsaW5lc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2NvbmNlcHRzL2d1aWRlbGluZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRGVwbG95bWVudFwiLFxuICAgICAgICAgIGxpbms6IFwiL2NvbmNlcHRzL2RlcGxveW1lbnRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkFJIFNraWxsc1wiLFxuICAgICAgbGluazogXCIvc2tpbGxzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJSZWFzb25pbmdcIixcbiAgICAgICAgICBsaW5rOiBcIi9za2lsbHMvcmVhc29uaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkZpbmUgVHVuaW5nXCIsXG4gICAgICAgICAgbGluazogXCIvc2tpbGxzL2ZpbmUtdHVuaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlByb21wdGluZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL3NraWxscy9wcm9tcHRpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUHJvY2Vzc2luZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL3NraWxscy9wcm9jZXNzaW5nXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlBhcnNpbmdcIixcbiAgICAgICAgICBsaW5rOiBcIi9za2lsbHMvcGFyc2luZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJEZWZpbml0aW9uXCIsXG4gICAgICAgICAgbGluazogXCIvc2tpbGxzL2RlZmluaXRpb25cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6IFwiVXNlIGNhc2VzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJHbVwiLFxuICAgICAgICAgIGxpbms6IFwiL3RlbXBsYXRlcy9nbVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBZ2VudFwiLFxuICAgICAgICAgIGxpbms6IFwiL3RlbXBsYXRlcy9hZ2VudFwiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiRW5zXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3RlbXBsYXRlcy9hZ2VudC9lbnNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiU2tpbGxzXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3RlbXBsYXRlcy9hZ2VudC9za2lsbHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiUHJvbXB0XCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3RlbXBsYXRlcy9hZ2VudC9wcm9tcHRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiR3JvdXBcIixcbiAgICAgICAgICBsaW5rOiBcIi90ZW1wbGF0ZXMvZ3JvdXBcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlRpcHBpbmdcIixcbiAgICAgICAgICAgICAgbGluazogXCIvdGVtcGxhdGVzL2dyb3VwL3RpcHBpbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiR2FtZXNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvdGVtcGxhdGVzL2dyb3VwL2dhbWVzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlBheW1lbnRzXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3RlbXBsYXRlcy9ncm91cC9wYXltZW50XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkhlbHBlcnNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvdGVtcGxhdGVzL2dyb3VwL2hlbHBlcnNcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJTa2lsbHNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvdGVtcGxhdGVzL2dyb3VwL3NraWxsc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQcm9tcHRcIixcbiAgICAgICAgICAgICAgbGluazogXCIvdGVtcGxhdGVzL2dyb3VwL3Byb21wdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGV4dDogXCJNaWRkbGV3YXJlc1wiLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQ3JvblwiLFxuICAgICAgICAgIGxpbms6IFwiL21pZGRsZXdhcmVzL2Nyb25cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUmVkaXNcIixcbiAgICAgICAgICBsaW5rOiBcIi9taWRkbGV3YXJlcy9yZWRpc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJWaXNpb25cIixcbiAgICAgICAgICBsaW5rOiBcIi9taWRkbGV3YXJlcy92aXNpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiU3RhY2tzb1wiLFxuICAgICAgICAgIGxpbms6IFwiL21pZGRsZXdhcmVzL3N0YWNrc29cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTm90aW9uXCIsXG4gICAgICAgICAgbGluazogXCIvbWlkZGxld2FyZXMvbm90aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkxlYXJuV2ViM1wiLFxuICAgICAgICAgIGxpbms6IFwiL21pZGRsZXdhcmVzL2xlYXJud2ViM1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJMb3dkYlwiLFxuICAgICAgICAgIGxpbms6IFwiL21pZGRsZXdhcmVzL2xvd2RiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkdwdFwiLFxuICAgICAgICAgIGxpbms6IFwiL21pZGRsZXdhcmVzL2dwdFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJSZXNvbHZlclwiLFxuICAgICAgICAgIGxpbms6IFwiL21pZGRsZXdhcmVzL3Jlc29sdmVyXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJPcGVuIEZyYW1lc1wiLFxuICAgICAgbGluazogXCIvZnJhbWVzXCIsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJJbnRyb2R1Y3Rpb25cIixcbiAgICAgICAgICBsaW5rOiBcIi9mcmFtZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRnJhbWV3b3Jrc1wiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiT25jaGFpbktpdFwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mcmFtZXMvZnJhbWV3b3Jrcy9vbmNoYWlua2l0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkZyYW1lcy5qc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mcmFtZXMvZnJhbWV3b3Jrcy9mcmFtZXNqc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJGcm9nXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2ZyYW1lcy9mcmFtZXdvcmtzL2Zyb2dcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW9CO0FBS3ZCLG1CQUNFLEtBREY7QUFITixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLE1BQU07QUFDVixXQUNFLGlDQUNFO0FBQUEsMEJBQUMsVUFBSyxTQUFRLFNBQVE7QUFBQSxNQUN0QixvQkFBQyxVQUFLLE1BQUssWUFBVyxTQUFRLHNCQUFxQjtBQUFBLE1BQ25ELG9CQUFDLFVBQUssVUFBUyxZQUFXLFNBQVEsY0FBYTtBQUFBLE1BQy9DO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxVQUFTO0FBQUEsVUFDVCxTQUFRO0FBQUE7QUFBQSxNQUNWO0FBQUEsTUFDQSxvQkFBQyxVQUFLLFVBQVMsWUFBVyxTQUFRLFNBQVE7QUFBQSxNQUMxQyxvQkFBQyxVQUFLLFVBQVMsY0FBYSxTQUFRLFNBQVE7QUFBQSxNQUM1QyxvQkFBQyxVQUFLLFVBQVMsbUJBQWtCLFNBQVEsU0FBUTtBQUFBLE1BQ2pEO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxVQUFTO0FBQUEsVUFDVCxTQUFRO0FBQUE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsVUFBUztBQUFBLFVBQ1QsU0FBUTtBQUFBO0FBQUEsTUFDVjtBQUFBLE1BRUEsb0JBQUMsVUFBSyxVQUFTLHFCQUFvQixTQUFRLFFBQU87QUFBQSxNQUNsRCxvQkFBQyxVQUFLLFVBQVMsNEJBQTJCLFNBQVEsUUFBTztBQUFBLE1BQ3pEO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxVQUFTO0FBQUEsVUFDVCxTQUFRO0FBQUE7QUFBQSxNQUNWO0FBQUEsTUFFQSxvQkFBQyxVQUFLLFVBQVMscUJBQW9CLFNBQVEsdUJBQVk7QUFBQSxNQUN2RCxvQkFBQyxVQUFLLFVBQVMsNEJBQTJCLFNBQVEsUUFBTztBQUFBLE1BQ3pEO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxVQUFTO0FBQUEsVUFDVCxTQUFRO0FBQUE7QUFBQSxNQUNWO0FBQUEsTUFFQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsS0FBSTtBQUFBLFVBQ0osZUFBWTtBQUFBLFVBQ1osT0FBSztBQUFBO0FBQUEsTUFDUDtBQUFBLE9BQ0Y7QUFBQSxFQUVKO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLEVBQUUsTUFBTSxRQUFRLE1BQU0seUJBQXlCO0FBQUEsSUFDL0MsRUFBRSxNQUFNLFNBQVMsTUFBTSxhQUFhO0FBQUEsRUFDdEM7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFFQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

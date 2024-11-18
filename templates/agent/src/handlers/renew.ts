import { frameUrl } from "../skills.js";
import { getUserInfo, XMTPContext } from "@xmtp/message-kit";

export async function handleRenew(context: XMTPContext) {
  const {
    message: {
      sender,
      content: { skill, params: domain },
    },
  } = context;

  // Check if the user holds the domain
  if (!domain) {
    return {
      code: 400,
      message: "Missing required parameters. Please provide domain.",
    };
  }

  const data = await getUserInfo(domain);

  if (!data?.address || data?.address !== sender?.address) {
    return {
      code: 403,
      message:
        "Looks like this domain is not registered to you. Only the owner can renew it.",
    };
  }

  // Generate URL for the ens
  let url_ens = frameUrl + "frames/manage?name=" + domain;
  return { code: 200, message: `${url_ens}` };
}

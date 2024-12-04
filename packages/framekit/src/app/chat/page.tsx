"use client";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import sdk, { type FrameContext } from "@farcaster/frame-sdk";

const Chat = dynamic(() => import("../../components/Chat"), {
  ssr: false,
});

// Create a wrapper component that will render the full HTML
function FrameHTML({ children }: { children: React.ReactNode }) {
  const params = {
    url: `${process.env.NEXT_PUBLIC_URL}`,
    address: "0xc9925662D36DE3e1bF0fD64e779B2e5F0Aead964",
  };
  const image = `${params.url}/api/chat?address=${params.address}`;
  console.log("image", image);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chat Frame</title>
        <meta property="og:image" content={image} />
        <meta property="fc:frame" content="vNext" />
        <meta property="of:version" content="vNext" />
        <meta property="of:accepts:xmtp" content="vNext" />
        <meta property="fc:frame:image" content={image} />
        <meta property="fc:frame:button:1" content="Start Chat" />
      </head>
      <body>{children}</body>
    </html>
  );
}

function ChatContent(): JSX.Element {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();
  const searchParams = useSearchParams();

  const address =
    searchParams?.get("address") ||
    "0xc9925662D36DE3e1bF0fD64e779B2e5F0Aead964";

  useEffect(() => {
    const initFrame = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };

    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      initFrame();
    }
  }, [isSDKLoaded]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Chat recipientAddress={address} />
    </div>
  );
}

export default function ChatFrame(): JSX.Element {
  return (
    <FrameHTML>
      <Suspense fallback={<div>Loading...</div>}>
        <ChatContent />
      </Suspense>
    </FrameHTML>
  );
}
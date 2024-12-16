import { parseUnits } from "viem";
import PaymentFrame from "../../components/PaymentFrame";
import { extractFrameChain } from "../utils/networks";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const params = {
    url: process.env.NEXT_PUBLIC_URL,
    recipientAddress:
      (resolvedSearchParams?.recipientAddress as string) ||
      (resolvedSearchParams?.recipientaddress as string),
    amount: parseFloat(resolvedSearchParams?.amount as string) || 1,
    onRampURL:
      (resolvedSearchParams?.onRampURL as string) ||
      (resolvedSearchParams?.onrampurl as string),
    networkId:
      (resolvedSearchParams?.networkId as string) ||
      (resolvedSearchParams?.networkid as string) ||
      "base",
  };
  const { chainId, tokenAddress } = extractFrameChain(params.networkId);
  const amountUint256 = parseUnits(params.amount.toString(), 6);
  const ethereumUrl = `ethereum:${tokenAddress}@${chainId}/transfer?address=${params.recipientAddress}&uint256=${amountUint256}`;
  const image = `${params.url}/api/payment?networkId=${params.networkId}&amount=${params.amount}&recipientAddress=${params.recipientAddress}`;

  return (
    <html
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "white",
        height: "100%",
      }}>
      <head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Ethereum Payment" />
        <meta property="fc:frame" content="vNext" />
        <meta property="of:version" content="vNext" />
        <meta property="of:accepts:xmtp" content="vNext" />
        <meta property="of:image" content={image} />
        <meta property="og:image" content={image} />
        <meta property="fc:frame:image" content={image} />
        <meta property="fc:frame:ratio" content="1.91:1" />

        <meta property="fc:frame:button:1" content={`Pay in USDC (Mobile)`} />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content={ethereumUrl} />

        {params.onRampURL && (
          <>
            <meta property="fc:frame:button:2" content={`Pay in USD`} />
            <meta property="fc:frame:button:2:action" content="link" />
            <meta
              property="fc:frame:button:2:target"
              content={params.onRampURL}
            />
          </>
        )}
        <style>
          {`
          :root {
            --background: #ffffff;
            --foreground: #000000;
            --accent: #fa6977;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --background: #ffffff;
              --foreground: #000000;
            }
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
            
            html, body {
              background-color: var(--background) !important;
              height: 100%;
              width: 100%;
            }

            body {
              display: inline-block;
            }

            .form-container {
              background-color: var(--background);  
              border-radius: 0.5rem;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
              padding: 1.5rem;
            }
          `}
        </style>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          height: "100%",
          display: "inline-block",
          width: "100%",
        }}>
        <PaymentFrame url={ethereumUrl} image={image} label="Pay in USDC" />
      </body>
    </html>
  );
}

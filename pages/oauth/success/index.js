import { fetchTokesnFromSalesfroce } from "@/api/SalesforceConnectAPI";
import logger from "@/logger/logger";
import { ConnectContext } from "@/providers/ConnectProvider";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

function LoginPage() {
  const { userAccessTokensData, setUserTokensData } =
    useContext(ConnectContext);
  const router = useRouter();

  const { code } = router.query;

  useEffect(() => {
    if (!code) return;

    try {
      fetchTokesnFromSalesfroce({
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        code,
      })
        .then((data) => {
          logger.info("Salesforce API Success ::: ", { data });
          setUserTokensData(data);
        })
        .catch((error) => {
          logger.info("Salesforce API Error :::", { error });
        });
    } catch (error) {
      logger.info("Salesforce API Error :::", { error });
    }
  }, [code]);

  if (!userAccessTokensData) return null;

  return (
    <div className="px-4">
      <pre>{JSON.stringify(userAccessTokensData, null, 2)}</pre>
    </div>
  );
}

export default LoginPage;

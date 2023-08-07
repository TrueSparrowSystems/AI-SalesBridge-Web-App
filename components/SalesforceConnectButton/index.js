import Button from "@/components/common/Button";
import SalesforceLogo from "@/components/svg/SalesforceLogo";
import { useCallback } from "react";

const sleep = () => {
  // Simulating an API call with a delay of 2 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

function SalesforceConnectButton() {
  const clickHandler = useCallback(async () => {
    await sleep();

    const salesforceConnectURL = `https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`;

    location.href = salesforceConnectURL;
  }, []);

  return (
    <Button
      onClickFn={clickHandler}
      btnClasses="bg-salesforce-btn-pattern px-6 py-3 rounded-[5px] w-[277px] h-[46px]"
      data-testid="test-salesforce-connect-btn"
    >
      <div className="flex justify-center items-center gap-2">
        <SalesforceLogo />
        <span className="text-white text-base tracking-[0.04em]">
          Connect salesforce
        </span>
      </div>
    </Button>
  );
}

export default SalesforceConnectButton;

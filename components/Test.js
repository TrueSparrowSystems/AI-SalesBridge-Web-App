import React from "react";

function Test() {
  return (
    <div className="flex justify-center flex-col gap-2 items-center">
      <h1 className="text-3xl font-bold">AI salesbridge</h1>
      <a
        data-test-id="test-salesforce-connect-btn"
        href="https://truesparrowsystemspvtltd--dev.sandbox.my.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9wt4IL4O5wvIWfQWLPqpX6Zy3yo6RRVR7fWIzgKAqKmlIBEu4tyJZKuZEu_gXTjE0yNpQXhKoIFmJlHsI&redirect_uri=https://login.salesforce.com/services/oauth2/success"
        className="border bottom-2 p-2"
      >
        Connect salesforce
      </a>
    </div>
  );
}

export default Test;

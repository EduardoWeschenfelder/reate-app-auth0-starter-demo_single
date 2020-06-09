import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();
      console.log({ token })
      const response = await fetch("http://localhost:3333/api/external", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div style={{ margin: '30px' }}>
      <h1>External API </h1>
      <button
        style={{ color: '#fff', backgroundColor: 'green', outline: 'none', padding: '15px 30px', borderRadius: '8px' }}
        onClick={callApi}
      >
        Ping API
      </button>
      <br />
      <br />
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)} </code>}
    </div>
  );
};

export default ExternalApi;

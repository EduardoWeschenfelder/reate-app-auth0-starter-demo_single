import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0(); // pega o carregamento e usuario autenticado(dados)

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: '30px' }}>
      <Fragment >
        <img style={{ width: '100px', height: '100px' }} src={user.picture} alt="Profile" />

        <h2>{user.nickname} </h2>
        < p > {user.email} </p>
        {/* < code > {JSON.stringify(user, null, 2)} </code>  */}
      </Fragment>
    </div>
  );
};

export default Profile;
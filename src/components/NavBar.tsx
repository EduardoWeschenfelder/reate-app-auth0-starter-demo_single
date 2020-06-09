import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{ margin: '20px' }}>{/* se não estiver autenticado botão login aparece */}
      {!isAuthenticated && (
        <button
          style={{ color: '#fff', backgroundColor: 'green', outline: 'none', padding: '15px 30px', margin: '10px', borderRadius: '8px' }}
          onClick={() => loginWithRedirect({})}>Log in</button>
      )}
      {/* se estiver autenticado os botão home profile aparece */}
      {isAuthenticated && (
        <span>
          <Link
            style={{ color: '#fff', backgroundColor: 'blue', textDecoration: 'none', padding: '15px 30px', margin: '10px', borderRadius: '8px' }}
            to="/">Home</Link>&nbsp;
          <Link
            style={{ color: '#fff', backgroundColor: 'green', textDecoration: 'none', padding: '15px 30px', margin: '10px', borderRadius: '8px' }}
            to="/profile">Profile</Link>
        </span>
      )}
      {/* se estiver autenticado os botão logout aparece */}
      {isAuthenticated && <button
        style={{ color: '#fff', backgroundColor: 'red', outline: 'none', padding: '15px 30px', margin: '10px', borderRadius: '8px' }}
        onClick={() => logout()}>Logout</button>}
    </div>
  );
};

export default NavBar;
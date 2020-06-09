import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{ margin: '20px' }}>
      {!isAuthenticated && (
        <button
          style={{ color: '#fff', backgroundColor: 'green', outline: 'none', padding: '15px 30px', margin: '10px', borderRadius: '8px' }}
          onClick={() => loginWithRedirect({})}>Log in</button>
      )}
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
      {isAuthenticated && <button
        style={{ color: '#fff', backgroundColor: 'red', outline: 'none', padding: '15px 30px', margin: '10px', borderRadius: '8px' }}
        onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;
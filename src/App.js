import logo from "./logo.svg";
import "./App.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    user,
    loginWithRedirect,
    logout,
    isAuthenticated,
    isLoading,
    loginWithPopup,
  } = useAuth0();

  if (isLoading) {
    return (
      <>
        <div className="loading-container">
          <div className="loader"></div>
        </div>
        ;
      </>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* {
          isAuthenticated ? (<h2> Hello {user.name} </h2>) : ()
        } */}
        {isAuthenticated ? (
          <div>
            <h2>Hello {user.name}</h2>
            <button
              className="btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h2>Hi user please login</h2>
            <button className="btn" onClick={() => loginWithPopup()}>
              LOGIN
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

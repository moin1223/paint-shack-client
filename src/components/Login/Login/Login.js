import { Button } from "react-bootstrap";
import logo from "../../../images/logo1.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router';
import { useState } from "react";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const [setError] = useState('');

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = { name: user.displayName, email: user.email, img: user.photoURL };
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


  return (
    <div>
      <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-4 p-5 mx-auto shadow">
            <div>
              <div className="text-center">
                <img style={{ width: "100px" }} src={logo} alt="" />
              </div>
              <h1 className="text-center text-danger">PHAIT SHACK</h1>
              <h3 className="text-center text-primary">
                Painting <span className="text-secondary">Service</span>
              </h3>
              <Button
                style={{ width: "100%" }}
                variant="success"
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import './SignUpUi.css';
import { signInWithGoogle } from '../firebase'; // Ensure this path is correct

function SignUpUi() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      // Redirect or handle successful login
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="signin_padding">
          <h1 className="title">Sign In</h1>
          <div>
            <div className="field_container">
              <input placeholder="Email" className="otherField" />
            </div>
            <div className="field_container">
              <input placeholder="Password" className="otherField" />
            </div>
            <button className="login">Sign In</button>
            <button className="login" onClick={handleGoogleLogin}>Sign In with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpUi;

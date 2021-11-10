import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuth from "./Firebase.init";

initializeAuth();
const FirebaseSettings = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState('')

  const SignUpWithEmail = (name,email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
      const verified = userCredential.user;
      setUser({...verified, name})
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

  return {
    user,
    error,
    SignUpWithEmail
  };
};

export default FirebaseSettings;

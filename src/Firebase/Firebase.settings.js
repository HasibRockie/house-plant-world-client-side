import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "./Firebase.init";

initializeAuth();
const FirebaseSettings = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //   on auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
      }
    });
  }, []);

  //   sign up function
  const SignUpWithEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const verified = userCredential.user;
        setUser({ ...verified, displayName: name });

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...verified, displayName: name }),
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // login function
  const SignInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //   log out function
  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setError(error?.errorMessage)
      });
  };

  return {
    user,
    error,
    SignUpWithEmail,
    SignInWithEmail,
    Logout,
  };
};

export default FirebaseSettings;

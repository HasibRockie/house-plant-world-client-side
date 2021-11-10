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
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //   on auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user?.email);
        setError("");
      } else {
        setUser({});
      }
    });

    const url = `http://localhost:5000/users/${email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data?.role);
        setName(data?.displayName)
      });
  }, [email]);


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
          body: JSON.stringify({
            email: email,
            displayName: name,
            role: "user",
          }),
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
        const userId = userCredential.user;
        setUser(userId);
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
        setUser({});
      })
      .catch((error) => {
        setError(error?.errorMessage);
      });
  };

  return {
    user,
    error,
    SignUpWithEmail,
    SignInWithEmail,
    Logout,
    isAdmin,
    name,
  };
};

export default FirebaseSettings;

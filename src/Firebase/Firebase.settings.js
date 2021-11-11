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
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //   on auth state change
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user?.email);
        setError("");
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    const url = `https://house-plant-world.herokuapp.com/users/${email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data?.role);
        setName(data?.displayName);
      });
  }, [email]);

  //   sign up function
  const SignUpWithEmail = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const verified = userCredential.user;
        setName(name);
        setUser({ ...verified, displayName: name });

        fetch("https://house-plant-world.herokuapp.com/users", {
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
      })
      .finally(setIsLoading(false));
  };

  // login function
  const SignInWithEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user;
        setUser(userId);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  //   log out function
  const Logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setIsAdmin(false)
      })
      .catch((error) => {
        setError(error?.errorMessage);
      })
      .finally(setIsLoading(false));
  };

  return {
    user,
    error,
    SignUpWithEmail,
    SignInWithEmail,
    Logout,
    isAdmin,
    name,
    isLoading,
  };
};

export default FirebaseSettings;

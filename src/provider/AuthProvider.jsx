import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setLoading(true);
        alert("You log Out successfully");
      })
      .catch((error) => console.log(error.message));
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authValue = {
    user,
    loading,
    createUser,
    setUser,
    logIn,
    logOut,
    updateUser,
    signInGoogle,
    signInGitHub,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

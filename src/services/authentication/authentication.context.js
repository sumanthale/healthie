import React, { useState, createContext, useEffect } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";

import {
  createNewUser,
  deleteUserNotification,
  fetchUser,
  signIn,
  reauthenticate,
  saveUserNotification,
  updateUser,
  schedule,
  medicalExam,
  deleteVaccine,
} from "./authentication.service";
import { auth } from "../../firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    setError(null);
    setIsLoading(false);
    setInfo(null);

    const subscription = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log("🚀🚀 We are authenticated now!");
        // setUser(user); // will set the user and all the useEffect's will use this user
        getUserDetails(user);
      } else {
        console.log("😢 We are not authenticated!");
      }
    });
    return () => subscription();
  }, []);

  const getUserDetails = async (user) => {
    try {
      const details = await fetchUser(user.uid);
      const { email, emailVerified } = user;
      setUser({
        email,
        emailVerified,
        ...details,
      });

      console.log({
        email,
        emailVerified,
        ...details,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onLogin = (email, password) => {
    setError(null);
    setIsLoading(true);
    signIn(email, password)
      .then((user) => {
        // setUser(user);
        console.log(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };
  const onPasswordChange = (email) => {
    setError(null);
    setInfo(null);
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then((u) => {
        setIsLoading(false);
        setInfo("Email sent to reset password");
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, name) => {
    setError(null);
    // if (password !== repeatedPassword) {
    //   setError("Error: Passwords do not match");
    //   return;
    // }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setIsLoading(false);
        createNewUser(user, name);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log(e);
      });
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setError(null);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const reset = () => {
    if (error) setError(null);
    if (info) setInfo(null);
    if (isLoading) setIsLoading(false);
  };
  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email sent to verify your account");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changePassword = (currentPassword, password, repeatedPassword) => {
    setError(null);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    const user = auth.currentUser;
    reauthenticate(currentPassword)
      .then(() => {
        updatePassword(user, password)
          .then(() => {
            setIsLoading(false);
            setInfo("Password updated");
          })
          .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
            console.log(e);
          });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
        console.log(error);
      });
  };

  const changeProfile = async (name) => {
    setIsLoading(true);
    updateUser(user.id, name)
      .then(() => {
        setInfo("Profile updated");
        setIsLoading(false);
        setUser({
          ...user,
          name,
          newDate: true,
        });
      })
      .catch((e) => {
        setError(e.toString());
        setIsLoading(false);
      });
  };

  const saveNotification = async (medication) => {
    await saveUserNotification(medication);
  };
  const deleteNotification = async (medication) => {
    deleteUserNotification(medication);
  };

  const scheduleVaccine = async (
    vaccineID,
    description,
    purpose,
    location,
    date
  ) => {
    try {
      await schedule(vaccineID, description, purpose, location, date);
      setUser((user) => {
        return {
          ...user,
          schedules: {
            vaccineID,
            description,
            purpose,
            location,
            date,
          },
        };
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const createExam = async (exam) => {
    try {
      await medicalExam(exam);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const clearSchedule = async () => {
    try {
      await deleteVaccine();
      setUser((user) => {
        return {
          ...user,
          schedules: null,
        };
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        onPasswordChange,
        info,
        reset,
        sendVerificationEmail,
        changeProfile,
        changePassword,
        saveNotification,
        deleteNotification,
        scheduleVaccine,
        clearSchedule,
        createExam,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

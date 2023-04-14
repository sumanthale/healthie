import React, { createContext, useState, useEffect, useContext } from "react";

import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthenticationContext } from "../authentication/authentication.context";
export const MedicationContext = createContext();

export const MedicationContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [myMedications, setMyMedications] = useState([]);
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const querySnapshot = await getDocs(collection(db, "medication"));

    const allMedics = [];
    querySnapshot.forEach((doc) => {
      allMedics.push(doc.data());
    });
    setMedications(allMedics);
  };

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "users", user.id, "medications")),
        (snapshot) => {
          if (snapshot.empty) {
            console.log("No documents");
            setMyMedications([]);

            return;
          } else {
            const myMedics = [];
            snapshot.forEach((doc) => {
              myMedics.push(doc.data());
            });
            setMyMedications(myMedics);
          }
        }
      ),
    []
  );

  return (
    <MedicationContext.Provider
      value={{
        medications,
        myMedications,
      }}
    >
      {children}
    </MedicationContext.Provider>
  );
};

import {
  signInWithEmailAndPassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  getAuth,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const signIn = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const createNewUser = async (user, name) => {
  await setDoc(doc(db, "users", user.uid), {
    name,
    id: user.uid,
    email: user.email,
    schedules: null,
    exams: null,
  });
  return true;
};

export const fetchUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { name, id, schedules, exams } = docSnap.data();
    return {
      name,
      id,
      schedules,
      exams,
    };
  } else {
    console.log("No such document!");
    return {};
  }
};
export const updateUser = async (uid, name) => {
  const userRef = doc(db, "users", uid);
  return await updateDoc(userRef, {
    name,
  });
};
export const reauthenticate = (currentPassword) => {
  const auth = getAuth();
  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    currentPassword
  );
  return reauthenticateWithCredential(auth.currentUser, credential);
};

export const saveUserNotification = async (medication) => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid, "medications", medication.token);

  await setDoc(userRef, medication);
};
export const deleteUserNotification = async (token) => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid, "medications", token);

  await deleteDoc(userRef);
};

export const schedule = async (
  vaccineID,
  description,
  purpose,
  location,
  date
) => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid);

  await updateDoc(userRef, {
    schedules: {
      vaccineID,
      description,
      purpose,
      location,
      date,
    },
  });
};
export const deleteVaccine = async () => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid);

  await updateDoc(userRef, {
    schedules: null,
  });
};

export const medicalExam = async (exam) => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid, "medications", medication.token);

  await setDoc(userRef, medication);
};

export const saveUserNotes = async (notes) => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, {
    notes,
  });
};
export const getUserNotes = async () => {
  const user = getAuth().currentUser;
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    const { notes } = docSnap.data();
    return notes || [];
  }
  return [];
};

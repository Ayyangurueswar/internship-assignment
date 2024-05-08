import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDxxQwFaAtj9_Ov1hUttRHEcfm7RbGCQzk",
    authDomain: "test-app-e72a3.firebaseapp.com",
    projectId: "test-app-e72a3",
    storageBucket: "test-app-e72a3.appspot.com",
    messagingSenderId: "811099692365",
    appId: "1:811099692365:web:ab239b8644fdfe15c4ab04",
    measurementId: "G-Z65J59QG7G",
    databaseURL: "https://test-app-e72a3-default-rtdb.firebaseio.com"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export const writeReportData = (reports) => {
    set(ref(database, 'reports'), reports);
}

export const getReports = () => {
    return get(child(ref(database), 'reports'));
}

export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const resetPwd = (auth, email) => {
    return sendPasswordResetEmail(auth, email);
}
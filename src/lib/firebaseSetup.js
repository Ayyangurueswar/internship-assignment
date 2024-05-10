import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "test-app-e72a3.firebaseapp.com",
    projectId: "test-app-e72a3",
    storageBucket: "test-app-e72a3.appspot.com",
    messagingSenderId: "811099692365",
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-Z65J59QG7G",
    databaseURL: "https://test-app-e72a3-default-rtdb.firebaseio.com"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);

export const writeReportData = (reports) => {
    set(ref(database, 'reports'), reports);
}

export const getReports = () => {
    return get(child(ref(database), 'reports'));
}

export const writeDashboardData = (reports) => {
    set(ref(database, 'dashboardReports'), reports);
}

export const getDashboardReports = () => {
    return get(child(ref(database),'dashboardReports'));
}
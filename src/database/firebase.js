import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export default db;

// // Watch for expense node changes
// const cancelExpensesSubscription = onValue(expensesRef, (snapshot) => {
//   const expensesState = [];
//   snapshot.forEach((elem) => {
//     expensesState.push({
//       id: elem.key,
//       ...elem.val(),
//     });
//   });
//   console.log(expensesState);
// });

// // const nameRef = ref(db, 'name');
// // const cancelNameSubscription = onValue(nameRef, (snapshot) => {
// //   const currentName = snapshot.val();
// //   console.log('Inside onValue func: the name is', currentName);
// // });
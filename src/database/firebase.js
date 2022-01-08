import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

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

export default db;

// apiKey: 'AIzaSyAVyWYNoP8jbgwkMJR6xewyzQbAGj1LkEA',
//   authDomain: 'my-expensify-35a1b.firebaseapp.com',
//   databaseURL: 'https://my-expensify-35a1b-default-rtdb.firebaseio.com',
//   projectId: 'my-expensify-35a1b',
//   storageBucket: 'my-expensify-35a1b.appspot.com',
//   messagingSenderId: '929975208857',
//   appId: '1:929975208857:web:7c9911963be09929ebe108',
//   measurementId: 'G-T740YPQTEH',

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

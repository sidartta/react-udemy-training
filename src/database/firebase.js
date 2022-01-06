import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  remove,
  set,
  update,
  onValue,
  push,
  get,
  child,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAVyWYNoP8jbgwkMJR6xewyzQbAGj1LkEA',
  authDomain: 'my-expensify-35a1b.firebaseapp.com',
  databaseURL: 'https://my-expensify-35a1b-default-rtdb.firebaseio.com',
  projectId: 'my-expensify-35a1b',
  storageBucket: 'my-expensify-35a1b.appspot.com',
  messagingSenderId: '929975208857',
  appId: '1:929975208857:web:7c9911963be09929ebe108',
  measurementId: 'G-T740YPQTEH',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;

// const initialState = [
//   {
//     category: 'Home',
//     payee: 'RONA',
//     amount: 200,
//     createdAt: 1212313,
//   },
//   {
//     category: 'Food',
//     payee: 'IGA',
//     amount: 150,
//     createdAt: 123190283,
//   },
// ];

// const setData = async (data, location = null) => {
//   try {
//     const res = await set(location, data);
//     console.log('Database initialized successfully. 🎉');
//     return res;
//   } catch (err) {
//     console.error(
//       `Somethign went wrong 💥. The following error occured: ${err}`
//     );
//   }
// };
// const removeData = async (childrenPath) => {
//   try {
//     await remove(ref(db, childrenPath));
//     console.log('Database removed successfully. 🎉');
//   } catch (err) {
//     console.error(
//       `Somethign went wrong 💥. The following error occured: ${err}`
//     );
//   }
// };
// const updateData = async (dataToUpdate, location) => {
//   try {
//     await update(location, dataToUpdate);
//     console.log('Database updated successfully. 🎉');
//   } catch (err) {
//     console.error(
//       `Somethign went wrong 💥. The following error occured: ${err}`
//     );
//   }
// };

// // initialize database
// const expensesRef = ref(db, 'expenses');

// // initialState.map((elem) => {
// //   const newExpenseRef = push(expensesRef);
// //   setData(elem, newExpenseRef);
// // });

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

// // const newExpenseRef = push(expensesRef);
// // setTimeout(
// //   () =>
// //     setData(
// //       {
// //         category: 'Auto',
// //         payee: 'PETRO CANADA',
// //         amount: 22,
// //         createdAt: 1231123283,
// //       },
// //       newExpenseRef
// //     ),
// //   5000
// // );
// setTimeout(() => {
//   const updateRef = child(expensesRef, '-MsOwfG6XRnP7LZ6FWaF');
//   update(updateRef, { amount: 11111 });
// }, 1000);

// /////////////////////////////////////////////////////////////////
// // setDatabase({ ...newEntry });

// // const familyMemberRef = ref(db, 'family');

// // const newFamilyRef = push(familyMemberRef);

// // set(newFamilyRef, 'Abderrahim').then(() => {
// //   get(newFamilyRef).then((snapshot) => console.log(snapshot.val()));
// // });

// // get(familyMemberRef).then((snapshot) => {
// //   //   snapshot.forEach((elem) => console.log(elem.val()));
// //   const familyMembers = [];
// //   let count = 0;
// //   snapshot.forEach((elem) => {
// //     familyMembers.push({
// //       id: elem.key,
// //       name: elem.val(),
// //     });
// //   });
// //   console.log(familyMembers);
// // });

// ///////////////////////////////////////////////////////////////////
// // const nameRef = ref(db, 'name');
// // const cancelNameSubscription = onValue(nameRef, (snapshot) => {
// //   const currentName = snapshot.val();
// //   console.log('Inside onValue func: the name is', currentName);
// // });

// // removeData('/hasChildren');

// // setDatabase({ hasChildren: null });

// // updateData({
// //   name: 'Nawel',
// //   age: 37,
// //   hasChildren: null,
// //   'location/city': 'Montreal',
// // });

// // setTimeout(() => updateData({ name: 'Omar' }), 5000);
// // setTimeout(() => cancelNameSubscription(), 10000);
// // setTimeout(() => updateData({ name: 'Moh' }), 30000);

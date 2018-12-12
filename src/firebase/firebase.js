/* eslint-disable */

import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MASSGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //
// //   console.log(expenses);
// // });
//
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //
// //     console.log(expenses);
// //   });
//
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763,
// });
//
// // database.ref('notes/-LQZqJTt83Rzn60xKwo2').remove();
//
// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python',
// // });
//
// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // });
//
// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });
//
// // database.ref()
// //   .set({
// //     name: 'Phil Nacamuli',
// //     age: 31,
// //     stressLevel: 6,
// //     job: {
// //       title: 'Software Developer',
// //       company: 'Google',
// //     },
// //     location: {
// //       city: 'Austin',
// //       country: 'United States',
// //     },
// //   })
// //   .then(() => {
// //     console.log('Data is saved!');
// //   })
// //   .catch((e) => {
// //     console.log('This failed', e);
// //   });
// //
// // database.ref()
// //   .update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle',
// //   });
//
// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Remove succeeded');
// //   })
// //   .catch((e) => {
// //     console.log('Remove failed', e);
// //   });
import firebase from 'firebase/app';
import 'firebase/firestore';


// Initialize Firebase, and export it to be used in many vue components
// Good idea dude: https://stackoverflow.com/a/53179494
const config = {
  apiKey: 'AIzaSyAcjW2rWja6VayhZa90WQVu56NPbS-yq5Q',
  authDomain: 'keepitpupper-dev.firebaseapp.com',
  databaseURL: 'https://keepitpupper-dev.firebaseio.com',
  projectId: 'keepitpupper-dev',
  storageBucket: 'keepitpupper-dev.appspot.com',
  messagingSenderId: '212309711746',
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
// const functions = firebase.functions();

// Right now we are only exporting firestore, but we should export whatever we need here.
export {
  firestore,
//   functions,
};

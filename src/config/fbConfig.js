import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Needs to be in .gitignore
var config = {
  apiKey: "AIzaSyBV4aMfu9XizfICXxwqaVgXCS0SFv831n0",
  authDomain: "projectm-2aba4.firebaseapp.com",
  databaseURL: "https://projectm-2aba4.firebaseio.com",
  projectId: "projectm-2aba4",
  storageBucket: "projectm-2aba4.appspot.com",
  messagingSenderId: "599179987900",
  appId: "1:599179987900:web:d8184f536d030c85ef39b9",
  measurementId: "G-QWZ6QK3KKJ"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
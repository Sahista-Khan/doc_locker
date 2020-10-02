import firebase from 'firebase';
import 'firebase/storage';



var firebaseConfig = {
    apiKey: "AIzaSyBioRpMgbTHHN6g9TaRYOfivw6OtE7Ggsg",
    authDomain: "doc-locker.firebaseapp.com",
    databaseURL: "https://doc-locker.firebaseio.com",
    projectId: "doc-locker",
    storageBucket: "doc-locker.appspot.com",
    messagingSenderId: "658580879782",
    appId: "1:658580879782:web:dcd382d66b987ea2583767",
    measurementId: "G-HW0P6DESW8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const storage=firebase.storage();

  export {storage, firebase as default};


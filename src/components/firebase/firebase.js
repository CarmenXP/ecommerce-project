import firebase from '/firebase/app'
//import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC97sf-DQbEXYVME9cd5uHJ9i--dYW0-8Y",
    authDomain: "database-e-commerce.firebaseapp.com",
    databaseURL: "https://database-e-commerce-default-rtdb.firebaseio.com",
    projectId: "database-e-commerce",
    storageBucket: "database-e-commerce.appspot.com",
    messagingSenderId: "489870611548",
    appId: "1:489870611548:web:35007db2c74b480f744299"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  //const auth= fireBase.auth()

  export default fire;
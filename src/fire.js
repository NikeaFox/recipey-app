 import firebase from "firebase";
 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 var firebaseConfig = {

     apiKey: "AIzaSyDC4aCBe0sXmnrFnVDQcqexiwEpeVG30mU",

     authDomain: "recipey-app-c57a7.firebaseapp.com",

     projectId: "recipey-app-c57a7",

     storageBucket: "recipey-app-c57a7.appspot.com",

     messagingSenderId: "108143405850",

     appId: "1:108143405850:web:6dc374f6e0cfbe3d479aa3",

     measurementId: "G-J0GXECLQJZ"

 };

 // Initialize Firebase

 const fire = firebase.initializeApp(firebaseConfig);

 firebase.analytics();
 export default fire
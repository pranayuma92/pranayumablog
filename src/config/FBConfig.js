import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCltzAevbhPN9auKh9NTZhRmBaGqqmF93Y",
    authDomain: "pranayumablog.firebaseapp.com",
    databaseURL: "https://pranayumablog.firebaseio.com",
    projectId: "pranayumablog",
    storageBucket: "pranayumablog.appspot.com",
    messagingSenderId: "576666381768",
    appId: "1:576666381768:web:0c1431dd41fa905b3d24fd",
    measurementId: "G-YS2E5ZQRFX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
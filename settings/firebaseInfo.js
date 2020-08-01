// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmmNPfc5ydkrIJX2s7MStvYRY878v5Onw",
    authDomain: "moritz-zenor.firebaseapp.com",
    databaseURL: "https://moritz-zenor.firebaseio.com",
    projectId: "moritz-zenor",
    storageBucket: "moritz-zenor.appspot.com",
    messagingSenderId: "88807818236"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
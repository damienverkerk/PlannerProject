import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD3FsBEudnBvKjcJ9WGaHocoGsFUrFnDUA",
	authDomain: "planning-2f9f7.firebaseapp.com",
	databaseURL: "https://planning-2f9f7.firebaseio.com",
	projectId: "planning-2f9f7",
	storageBucket: "planning-2f9f7.appspot.com",
	messagingSenderId: "180300624612",
	appId: "1:180300624612:web:ba3670b28da311efa672f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const usersCollection = db.collection("users");
const projectsCollection = db.collection("projects");
const tasksCollection = db.collection("tasks");

export {
	db,
	auth,
	currentUser,
	usersCollection,
	projectsCollection,
	tasksCollection
};

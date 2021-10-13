import firebase from "firebase";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB42HIVnlgqKIGnwtXBSAQkgCPe-6qwY_M",
  authDomain: "codex-image-upload-9768.firebaseapp.com",
  databaseURL: "gs://codex-image-upload-9768.appspot.com",
  projectId: "codex-image-upload-9768",
  storageBucket: "codex-image-upload-9768.appspot.com",
  messagingSenderId: "937782230586",
  appId: "1:937782230586:web:bc0fe07a9f1c51a0d8bf03"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3IOYyE6LiTcOEGucxG4XxsITGYeJ9cl4",
  authDomain: "hackthone-1c508.firebaseapp.com",
  projectId: "hackthone-1c508",
  storageBucket: "hackthone-1c508.appspot.com",
  messagingSenderId: "837893931237",
  appId: "1:837893931237:web:267a8cc7824fc6c9c3140c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

async function firebaseSignUp(name,phone,email,password){
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await addUserToDb(name,phone,email, userCredential.user.uid)
}

function addUserToDb(name,phone,email,uid){
    return setDoc(doc(db,"users",uid),{name, phone,email})
  }

function firebaseSignIn(email,password) {
    return signInWithEmailAndPassword(auth, email, password)
}
export {
    firebaseSignIn,firebaseSignUp
}
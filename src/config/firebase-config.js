
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, addDoc, collection, getDocs, getDoc, where, query, onSnapshot } from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";



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
const db = getFirestore(app);
const storage = getStorage(app);

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

// upload img
async function uploadImage(adImg) {
  const storageRef = ref(storage, `images/${adImg.name}`);
  const snapshot = await uploadBytes(storageRef, adImg);
  const url = await getDownloadURL(snapshot.ref);
  return url;
}

// for add new item to db
function additemToDb(obj) {

  let  {imgUrl, itemName, category, itemDes, itemUnitName, itemUnitPrice} = obj;
  return addDoc(collection(db, "companies"), {
    imgUrl, itemName, category, itemDes, itemUnitName, itemUnitPrice
  });
}

async function getItemsFromDb(){
  const querySnapshot = await getDocs(collection(db, 'companies'))
  const items = []
  
  querySnapshot.forEach((doc)=>{
    items.push({id: doc.id, ...doc.data()})
  });
  return items;
}
export {
    firebaseSignIn,firebaseSignUp, auth, uploadImage, additemToDb, getItemsFromDb
}
//
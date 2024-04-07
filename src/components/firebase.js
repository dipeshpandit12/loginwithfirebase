import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyARiZCHBAvnOuTFEBiTNpdpKbPJRUPV9wI",
    authDomain: "login-5ad32.firebaseapp.com",
    projectId: "login-5ad32",
    storageBucket: "login-5ad32.appspot.com",
    messagingSenderId: "99572530447",
    appId: "1:99572530447:web:40c945c056377a47f6927a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
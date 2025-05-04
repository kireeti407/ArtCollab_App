import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfSAfNWnYCxuYdftdW4UI68GMHzWUzLgw",
  authDomain: "artcollab-app.firebaseapp.com",
  projectId: "artcollab-app",
  storageBucket: "artcollab-app.firebasestorage.app",
  messagingSenderId: "585809648980",
  appId: "1:585809648980:web:5fb646726d1f045d0f7cc1",
  measurementId: "G-SY1JBYR9KM"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
export default auth




